import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Resturants } from 'src/app/ViewModels/resturants';

@Component({
  selector: 'app-resturant-data',
  templateUrl: './resturant-data.component.html',
  styleUrls: ['./resturant-data.component.css']
})
export class ResturantDataComponent implements OnInit {
  resturantList: Resturants[] = [];
  constructor(private restService: ResturantDataService, private shService: SharedService, private router: Router) { }

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

  deleteResturant(id: string) {
    this.restService.deleteResturant(id).subscribe(
      (res) => {
        console.log(res)
        location.reload()
      },
      (err) => {
        console.log(err)
      }
    )

  }

  editResturant(i: number) {
    this.shService.setResturant(this.resturantList[i])
    this.router.navigateByUrl('/add-resturant')
    console.log(this.resturantList[i])
  }

}
