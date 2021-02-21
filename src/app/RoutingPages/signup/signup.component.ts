import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/services/crud.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public crudService: CRUDService, public authenticationService:AuthenticationService) {}
  public email;
  public password:any;
  ngOnInit() {}


  courseOrder = [];

  addCoffee = course => this.courseOrder.push(course);


  onSubmit() {
    this.authenticationService.SignUp(this.crudService.form.value.userId, this.password);
    // this.email = ''; 
    // this.password = '';
  }

}
