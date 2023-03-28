import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Order, OrderSortField } from './order.interface';
import { environment } from '../../environments/environment';
import { GET_ORDERS } from '../../environments/queries';

@Component({
  selector: 'app-printavo',
  templateUrl: './printavo.component.html',
  styleUrls: ['./printavo.component.css'],
})
export class PrintavoComponent {
  loading = false;
  totalCount = 0;
  serverTotalCount = 0;
  fetchedResultsCount = 0;
  resultsPerPage = 5;
  title = 'Printavo Dashboard';
  searchQuery = '';
  orders: Order[] = [];
  pageInfo: {
    hasNextPage: boolean;
    endCursor: string | null;
  } = {
    hasNextPage: false,
    endCursor: null,
  };

  constructor(private apollo: Apollo) {}

  search(
    afterCursor?: string | null,
    sortOn?: OrderSortField,
    sortDescending?: boolean
  ) {
    this.apollo
      .query({
        query: GET_ORDERS,
        variables: {
          query: this.searchQuery,
          first: this.resultsPerPage,

          after: afterCursor,
          sortOn: sortOn,
          sortDescending: sortDescending,
        },
        context: {
          headers: {
            'Client-Type': environment.clientType,
            'Client-Token': environment.clientToken,
            Token: environment.token,
            Email: environment.email,
          },
        },
      })
      .subscribe((result: any) => {
        this.orders = result.data.orders.nodes;
        this.totalCount = this.orders.length;
        this.fetchedResultsCount = this.orders.length;
        this.pageInfo.hasNextPage = result.data.orders.pageInfo.hasNextPage;
        this.pageInfo.endCursor = result.data.orders.pageInfo.endCursor;
      });
  }

  nextPage() {
    if (this.pageInfo.hasNextPage) {
      this.search(this.pageInfo.endCursor);
    }
  }

  sortBy(property: OrderSortField) {
    const sortDescending = true; // Set this to true if you want descending order
    this.search(this.pageInfo.endCursor, property, sortDescending);
  }
}
