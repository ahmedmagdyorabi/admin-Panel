import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminpanelComponent } from './Components/adminpanel/adminpanel.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Admin', component: AdminpanelComponent },
  {path: '', redirectTo:'Login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
