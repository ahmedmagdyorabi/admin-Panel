import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Imenu } from 'src/app/ViewModels/imenu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Imenu[] = [];

  constructor(private restService: ResturantDataService, private shService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.restService.getMenu().subscribe(
      (res) => {
        this.menu = res
      },
      (err) => {
        console.log(err)
      }
    )
  }


  deleteMeal(id: number | undefined) {
    this.restService.deleteMenuItem(id).subscribe(
      (res) => {
        console.log(res)
        location.reload()
      },
      (err) => {
        console.log(err)
      }
    )

  }

  editMeal(i: number) {
    this.shService.setMenuItem(this.menu[i])
    this.router.navigateByUrl('/add-menu')

  }

}
