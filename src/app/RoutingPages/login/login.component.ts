import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(
    public authenticationService:AuthenticationService,
    private router: Router
  ){
  }

  ngOnInit(){
  
  }

  goToHome(){
    this.router.navigate(['home'])
  }
  
  email: string;
  password: string;

  signUp() {
    this.router.navigate(['signup'])
  }

  signIn() {
    this.authenticationService.SignIn(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.authenticationService.SignOut();
  }
}
