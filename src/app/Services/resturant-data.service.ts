import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
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



}
