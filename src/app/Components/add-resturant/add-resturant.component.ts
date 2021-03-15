import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Resturants } from 'src/app/ViewModels/resturants';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {

  resturantForm: FormGroup = new FormGroup({})
  resturantData: Resturants;


  constructor(private fb: FormBuilder, private restService: ResturantDataService, private router: Router, private shService: SharedService) {
    this.resturantData = this.shService.getResturant()
  }

  ngOnInit(): void {

    this.resturantForm = this.fb.group({
      name: [this.resturantData.name, Validators.required],
      Location: [this.resturantData.Location, Validators.required],
      hotLine: [this.resturantData.hotLine, Validators.required],
      Branches: [this.resturantData.Branches, Validators.required],
      Dish: [this.resturantData.Dish, Validators.required],
      Mood: [this.resturantData.Mood, Validators.required],
      openNow: [this.resturantData.openNow],
      img: [this.resturantData.img, Validators.required],
      mealImg: [this.resturantData.mealImg, Validators.required],
      arName: [this.resturantData.arName, Validators.required],
      arLocation: [this.resturantData.arLocation, Validators.required]
    })
  }

  addResturant() {
    this.restService.addNewResturant(this.resturantForm.value).subscribe(
      (res) => {
        console.log(res)
        this.resturantForm.reset();
        //this.router.navigateByUrl('/resturants')
      },
      (err) => {
        console.log(err)
      }
    )
  }


  updateResturantData() {
    this.restService.updateResturantData(this.resturantForm.value, this.resturantData.id).subscribe(
      (res) => {
        console.log(res)
        this.router.navigateByUrl('/resturants')
      },
      (err) => {
        console.log(err)
      }
    )
  }
}
