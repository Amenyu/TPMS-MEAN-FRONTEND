import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentConfigAddComponent } from './payment-config-add/payment-config-add.component';
import { PaymentConfigEditComponent } from './payment-config-edit/payment-config-edit.component';
import { PaymentConfigListComponent } from './payment-config-list/payment-config-list.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'home', component : HomeComponent },
  { path: 'payment-config-add', component : PaymentConfigAddComponent },
  { path: 'payment-config-list', component : PaymentConfigListComponent },
  { path: 'payment-config-edit', component : PaymentConfigEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
