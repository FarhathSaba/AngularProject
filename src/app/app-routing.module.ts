import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './RoutingPages/login/login.component';
import { HomeComponent } from './RoutingPages/home/home.component';
import { SignupComponent } from './RoutingPages/signup/signup.component';
import { NewTransactionComponent } from './RoutingPages/new-transaction/new-transaction.component';
import { ViewtransactionComponent } from './RoutingPages/viewtransaction/viewtransaction.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'newTransaction',
    component:NewTransactionComponent
  },
  {
    path:'viewTransaction',
    component:ViewtransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
