import { Component, OnInit } from '@angular/core';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Resturants } from 'src/app/ViewModels/resturants';

@Component({
  selector: 'app-resturant-data',
  templateUrl: './resturant-data.component.html',
  styleUrls: ['./resturant-data.component.css']
})
export class ResturantDataComponent implements OnInit {
  resturantList: Resturants[] = [];
  constructor(private restService: ResturantDataService) { }

  ngOnInit(): void {
    this.restService.getAllResturants().subscribe(
      (res) => {
        this.resturantList = res
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
