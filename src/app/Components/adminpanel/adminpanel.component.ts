import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthnticationService } from 'src/app/Services/authntication.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  constructor(private authService: AuthnticationService,private router:Router, location: PlatformLocation) { }

  ngOnInit(): void {
  }
  logOutForEmail(){
    this.authService.logout();
    this.router.navigate(['/Login'])
   
  
  }

}
