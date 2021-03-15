import { Injectable } from '@angular/core';
import { Resturants } from '../ViewModels/resturants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  resturant: Resturants = { id: '', Location: '', hotLine: 0, img: '', mealImg: '', Branches: 0, openNow: false, Mood: '', Dish: '' }

  constructor() { }

  setResturant(restData: Resturants) {
    this.resturant = restData
  }

  getResturant(): Resturants {
    return this.resturant
  }
}
