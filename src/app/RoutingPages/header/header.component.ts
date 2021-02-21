import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService:AuthenticationService, public router:Router) { }

  email: string;
  password: string;
  userName= sessionStorage.getItem("userId");
  show=true;

  ngOnInit() {
    this.show=true;
  }

  signOut() {
    this.authenticationService.SignOut();
    this.router.navigate(['login']);
    this.show=false;
  }

  navigateToHome(){
    this.router.navigate(['home']);
  }

}
