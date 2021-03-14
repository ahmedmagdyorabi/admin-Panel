import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMenuItemComponent } from './Components/add-menu-item/add-menu-item.component';
import { AddResturantComponent } from './Components/add-resturant/add-resturant.component';
import { AdminpanelComponent } from './Components/adminpanel/adminpanel.component';
import { LoginComponent } from './Components/login/login.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ResturantDataComponent } from './Components/resturant-data/resturant-data.component';
import { UsersDataComponent } from './Components/users-data/users-data.component';
import { AuthGuardGuard } from './Services/auth-guard.guard';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Admin', component: AdminpanelComponent, canActivate: [AuthGuardGuard] },
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'resturants', component: ResturantDataComponent },
  { path: 'add-resturant', component: AddResturantComponent },
  { path: 'add-menu', component: AddMenuItemComponent },
  { path: 'users', component: UsersDataComponent },
  { path: 'orders', component: OrdersComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
