import { Injectable } from '@angular/core';
import { Imenu } from '../ViewModels/imenu';
import { Resturants } from '../ViewModels/resturants';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  menu: Imenu = { meal: '', price: 0, description: '' }

  resturant: Resturants = { id: 0, name: '', Location: '', hotLine: 0, img: '', mealImg: '', Branches: 0, openNow: false, Mood: '', Dish: '', arLocation: '', arName: '' }

  constructor() { }

  setResturant(restData: Resturants) {
    this.resturant = restData
  }

  getResturant(): Resturants {
    return this.resturant
  }

  setMenuItem(meal: Imenu) {
    this.menu = meal
  }

  getMenuItem(): Imenu {
    return this.menu
  }
}
