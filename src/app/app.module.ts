import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { AdminpanelComponent } from './Components/adminpanel/adminpanel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ResturantDataComponent } from './Components/resturant-data/resturant-data.component';
import { AddResturantComponent } from './Components/add-resturant/add-resturant.component';
import { AddMenuItemComponent } from './Components/add-menu-item/add-menu-item.component';
import { UsersDataComponent } from './Components/users-data/users-data.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpanelComponent,
    LoadingSpinnerComponent,
    ResturantDataComponent,
    AddResturantComponent,
    AddMenuItemComponent,
    UsersDataComponent,
    OrdersComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    ReactiveFormsModule,
    HttpClientModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
