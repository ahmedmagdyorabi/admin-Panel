import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResturantDataService } from 'src/app/Services/resturant-data.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {

  resturantForm: FormGroup = new FormGroup({})


  constructor(private fb: FormBuilder, private restService: ResturantDataService, private router: Router) { }

  ngOnInit(): void {

    this.resturantForm = this.fb.group({
      id: ['', Validators.required],
      Location: ['', Validators.required],
      hotLine: ['', Validators.required],
      Branches: ['', Validators.required],
      Dish: ['', Validators.required],
      Mood: ['', Validators.required],
      openNow: [''],
      img: ['', Validators.required],
      mealImg: ['', Validators.required]
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
}
