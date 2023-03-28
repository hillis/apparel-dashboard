import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrintavoComponent } from './printavo/printavo.component';
import { AdminComponent } from './admin/admin.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent,
    PrintavoComponent,
    AdminComponent],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    GraphQLModule,
    NgbModule,
    RouterModule.forRoot([
      { path: 'printavo-component', component: PrintavoComponent },
      { path: 'admin-component', component: AdminComponent },
      { path: '', redirectTo: '/printavo-component', pathMatch: 'full'}
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
