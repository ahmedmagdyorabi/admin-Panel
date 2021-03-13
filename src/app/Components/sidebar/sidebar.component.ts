import { PlatformLocation } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthnticationService } from 'src/app/Services/authntication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private authService: AuthnticationService, private router: Router, location: PlatformLocation) { }

  ngOnInit(): void {
  }
  logOutForEmail() {
    this.authService.logout();
    this.router.navigate(['/Login'])


  }
}
