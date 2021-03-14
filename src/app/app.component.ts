import { Component, DoCheck, OnInit } from '@angular/core';
import { AuthnticationService } from './Services/authntication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'admin-dashboard';
  isLogged: boolean = false;
  constructor(private auth: AuthnticationService) { }
  ngDoCheck(): void {
    this.isLogged = this.auth.islogged()
  }
  ngOnInit(): void {

  }

}
