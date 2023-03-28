import { gql } from 'apollo-angular';

export const GET_ORDERS = gql`
  query GetOrders(
    $query: String!
    $first: Int!
    $after: String
    $sortOn: OrderSortField
    $sortDescending: Boolean
  ) {
    orders(
      query: $query
      first: $first
      after: $after
      sortOn: $sortOn
      sortDescending: $sortDescending
    ) {
      
      nodes {
        ... on Invoice {
          id
          nickname
          paidInFull
          visualId
          url
          visualPoNumber
          workorderUrl
          total
          status {
            name
          }
        }
        ... on Quote {
          id
          nickname
          paidInFull
          visualId
          url
          visualPoNumber
          workorderUrl
          total
          status {
            name
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;
