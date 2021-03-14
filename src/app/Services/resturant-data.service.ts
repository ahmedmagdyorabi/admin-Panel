import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Imenu } from '../ViewModels/imenu';
import { Iorder } from '../ViewModels/iorder';
import { Resturants } from '../ViewModels/resturants';


@Injectable({
  providedIn: 'root'
})
export class ResturantDataService {

  constructor(private http: HttpClient) { }
  getAllResturants(): Observable<Resturants[]> {
    return this.http.get<Resturants[]>(`${environment.database}/resturants`)
  }


  getOrders(): Observable<Iorder[]> {
    return this.http.get<Iorder[]>(`${environment.database}/orders`)
  }

  addNewResturant(rest: Resturants): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    }

    return this.http.post<any>(`${environment.database}/resturants`, rest, httpOptions)
  }


  addNewMeal(meal: Imenu): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    }

    return this.http.post<any>(`${environment.database}/menu`, meal, httpOptions)
  }


}
