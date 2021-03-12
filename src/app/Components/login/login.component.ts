import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthnticationService } from 'src/app/Services/authntication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  isLoading:boolean =false;
  checkoutForm = this.formBuilder.group({
    inputEmail: '',
    inputPassword: ''
  });
  error:any=null;
  constructor(private formBuilder: FormBuilder,private adminAuth:AuthnticationService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    this.isLoading=true;
    this.adminAuth.login(this.checkoutForm.value.inputEmail,this.checkoutForm.value.inputPassword).subscribe(
      (resData)=>{
        this.isLoading=false;
        this.error=null;
        this.router.navigate(['/Admin'])
      },

      (err)=>{
    
        this.isLoading=false;
        this.error=err

        // if(err.error.error.message)
        // this.error=err.error.error.message;
        
        
        
      
      
      }
    )
    this.checkoutForm.reset();
  }

}