import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrintavoComponent } from './printavo/printavo.component';
import { AdminComponent } from './admin/admin.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
  {
    path: 'printavo-component',
    title: 'Printava Data',
    component: PrintavoComponent,
  },
  {
    path: 'admin-component',
    title: 'Admin',
    component: AdminComponent,
  },
  {
    path: 'chat-component',
    title: 'Chat',
    component: ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
