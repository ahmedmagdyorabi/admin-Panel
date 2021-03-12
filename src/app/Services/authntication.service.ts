import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'
import { throwError } from 'rxjs';

interface AuthnResponseData { 
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?:boolean;

}

@Injectable({
  providedIn: 'root'
})
export class AuthnticationService {

  constructor(private http: HttpClient) { }
  private handleAuthntication(email:string,token:string,id:string,expiresData:number){
    const expireDate=new Date(new Date().getTime()+expiresData*1000);
    
     localStorage.setItem('authUser',token);
    
    
       
  }

  login(email: String, password: String){
    if(email==='kareem@gmail.com'){
     return this.http.post<AuthnResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArkAhV-tyPNZQL0pPqydK2NOZaAPFrLnA',
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
    ).pipe(tap(resData=>{
      this.handleAuthntication(resData.email, resData.idToken, resData.localId, +resData.expiresIn);
       

    }))
  }
  else
    return throwError('This Email Is Not Admin')
  


  }
  logout(){
    localStorage.removeItem('authUser');
  }
  islogged():boolean{

    if(localStorage.getItem('authUser'))
    return true;

    else
    return false;


  }







}
