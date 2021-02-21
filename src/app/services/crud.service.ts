import { Injectable } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class CRUDService {
  constructor(private firestore: AngularFirestore,public router:Router) {}

  form = new FormGroup({
    userId:new FormControl(""),
    customerNo: new FormControl(""),
    customerName: new FormControl(""),
    Address: new FormControl(""),
    phoneNo: new FormControl("")
  });

  transactionForm = new FormGroup({
    referenceNo:new FormControl(""),
    customerNo: new FormControl(""),
    customerName:new FormControl(""),
    customerAddress: new FormControl(""),
    phoneNo: new FormControl(""),
    transferAmount: new FormControl(""), 
    transferCurrency : new FormControl(""),
    beneficiaryBank : new FormControl(""),
    beneficiaryAccountNo: new FormControl(""),
    paymentDetails  : new FormControl("")
  })

  //Firestore CRUD actions example
  createUser(data) {
    return new Promise<any>((resolve, reject) => {
      data.customerNo= Math.floor(Math.random() * (999999 - 100000)) + 100000;
      this.firestore
        .collection("userDetailsTable")
        .doc(data.userId)
        .set(data)
        .then(res => {}, err => reject(err));
    });
  }

  updateUser(data) {
    return this.firestore
      .collection("userDetailsTable")
      .doc(data.payload.doc.id)
      .set({ completed: true }, { merge: true });
  }

  getUser(userId) {
      var router = this.router;
     this.firestore.collection("userDetailsTable").doc(userId).ref.get().then(function (doc) {
      if (doc.exists) {
        var data=doc.data();
        sessionStorage.setItem("customerNo",data.customerNo.toString());
        sessionStorage.setItem("userId",data.userId);
        sessionStorage.setItem("customerDetails", JSON.stringify(data));
        router.navigate(['home']);
      } else {
        console.log("There is no document!");
      }
    }).catch(function (error) {
      console.log("There was an error getting your document:", error);
    });
    return this.firestore.collection("userDetailsTable").snapshotChanges();
  }

  deleteUser(data) {
    return this.firestore
      .collection("userDetailsTable")
      .doc(data.payload.doc.id)
      .delete();
  }

  getCustomerTransaction(customerNo) {
    var transactionDetails = this.firestore.collection("UserTransactions",ref => ref.where('customerNo','==' ,customerNo)).valueChanges();
    // doc(customerNo).ref.get().then(function (doc) {
    //  if (doc.exists) {
    //    console.log(doc.data());
    //  } else {
    //    console.log("There is no document!");
    //  }
  //  }).catch(function (error) {
  //    console.log("There was an error getting your document:", error);
  //  });

  return transactionDetails;
 }

 createNewTransaction(data) {
  return new Promise<any>((resolve, reject) => {
    var d= new Date();
    data.referenceNo= "CUS"+d.getFullYear()+(("0" + (d.getMonth() + 1)).slice(-2))+(("0" + (d.getDate() + 1)).slice(-2))
                        + (Math.floor(Math.random() * (9999 - 1000)) + 1000);
    data.customerNo= data.customerNo.toString()
    this.firestore
      .collection("UserTransactions")
      .doc(data.referenceNo)
      .set(data)
      .then(res => {}, err => reject(err));
    
    alert("You are transaction is Succesful with reference No"+ data.referenceNo );
  });
}

}
