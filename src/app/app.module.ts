import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './RoutingPages/login/login.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeaderComponent } from './RoutingPages/header/header.component';
import { HomeComponent } from './RoutingPages/home/home.component';
import { SignupComponent } from './RoutingPages/signup/signup.component';
import { CRUDService } from './services/crud.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NewTransactionComponent } from './RoutingPages/new-transaction/new-transaction.component';
import { ViewtransactionComponent } from './RoutingPages/viewtransaction/viewtransaction.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    NewTransactionComponent,
    ViewtransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, "cloud"),
    AngularFireAuthModule
  ],
  providers: [AuthenticationService,AngularFirestore,CRUDService,
    [
      {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
      }
    ]
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
