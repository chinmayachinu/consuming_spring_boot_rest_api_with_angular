import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerAddComponent } from './component/customer-add/customer-add.component';
import { CustomerListComponent } from './component/customer-list/customer-list.component';
import { CustomerUpdateComponent } from './component/customer-update/customer-update.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer-list', pathMatch: 'full'},
  { path: 'customer-list', component: CustomerListComponent },
  { path: 'customer-add', component: CustomerAddComponent },
  { path: 'customer-update/:id', component: CustomerUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
