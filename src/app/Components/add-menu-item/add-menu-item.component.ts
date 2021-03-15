import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { SharedService } from 'src/app/Services/shared.service';
import { Imenu } from 'src/app/ViewModels/imenu';
import { Resturants } from 'src/app/ViewModels/resturants';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {
  mealForm: FormGroup = new FormGroup({})
  mealDetails: Imenu;

  constructor(private fb: FormBuilder, private restService: ResturantDataService, private shService: SharedService, private router: Router) {
    this.mealDetails = this.shService.getMenuItem()
  }

  ngOnInit(): void {
    this.mealForm = this.fb.group({
      meal: [this.mealDetails.meal, Validators.required],
      price: [this.mealDetails.price, Validators.required],
      description: [this.mealDetails.description, Validators.required]
    })
  }

  addMeal() {
    this.restService.addNewMeal(this.mealForm.value).subscribe(
      (res) => {
        console.log(res)
        this.mealForm.reset()
      },
      (err) => {
        console.log(err)
      }
    )
  }


  updateMeal() {
    this.restService.updateMenuItem(this.mealForm.value, this.mealDetails.id).subscribe(
      (res) => {
        console.log(res)
        this.router.navigateByUrl('/menu')
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
