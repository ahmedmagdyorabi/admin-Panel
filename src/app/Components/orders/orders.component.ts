import { Component, OnInit } from '@angular/core';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Iorder } from 'src/app/ViewModels/iorder';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  ordersList: Iorder[] = []
  constructor(private restService: ResturantDataService) { }

  ngOnInit(): void {

    this.restService.getOrders().subscribe(
      (res) => {
        this.ordersList = res
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
