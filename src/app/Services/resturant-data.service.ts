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

  getMenu(): Observable<Imenu[]> {
    return this.http.get<Imenu[]>(`${environment.database}/menu`)
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

  deleteResturant(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.database}/resturants/${id}`)
  }

  deleteMenuItem(id: number | undefined): Observable<any> {
    return this.http.delete<any>(`${environment.database}/menu/${id}`)
  }

  updateResturantData(rest: Resturants, id: number): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    }

    return this.http.put<any>(`${environment.database}/resturants/${id}`, rest, httpOptions)
  }

  updateMenuItem(meal: Imenu, id: number | undefined): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //,'Accept':' */*'
        //,'Authorization': 'my-auth-token'
      })
    }

    return this.http.put<any>(`${environment.database}/menu/${id}`, meal, httpOptions)

  }

}
