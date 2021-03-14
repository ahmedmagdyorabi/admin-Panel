import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';
import { Resturants } from 'src/app/ViewModels/resturants';

@Component({
  selector: 'app-add-menu-item',
  templateUrl: './add-menu-item.component.html',
  styleUrls: ['./add-menu-item.component.css']
})
export class AddMenuItemComponent implements OnInit {
  mealForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder, private restService: ResturantDataService) { }

  ngOnInit(): void {
    this.mealForm = this.fb.group({
      meal: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required]
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

}
