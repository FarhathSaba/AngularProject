import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CRUDService } from './crud.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth,private router: Router,public crudService: CRUDService) {
    this.userData = angularFireAuth.authState;
  }


  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
        this.userData.subscribe(
          res => {
            sessionStorage.setItem("userId",res.email)
            this.crudService.createUser(this.crudService.form.value);
            this.router.navigate(['home']);
            alert('You are Successfully signed up! and your Customer No' +this.crudService.form.value.customerNo);
          }
        )   
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('You are Successfully logged in!');
        this.userData.subscribe(
          res => {
            this.crudService.getUser(res.email);
          }
        )
     
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
     // this.userData= null
  }  

}