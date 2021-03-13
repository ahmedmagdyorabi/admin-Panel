import { Component, OnInit } from '@angular/core';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Resturants } from 'src/app/ViewModels/resturants';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {


  constructor(private restDb: ResturantDataService) { }

  ngOnInit(): void {

  }

}
