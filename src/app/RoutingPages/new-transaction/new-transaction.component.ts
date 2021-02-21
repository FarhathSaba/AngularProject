import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  constructor(public crudService: CRUDService) { }
  userdetails;

  ngOnInit() {
    this.userdetails= JSON.parse(sessionStorage.getItem("customerDetails"));
    this.crudService.transactionForm.value.customerNo= this.userdetails.customerNo.toString();
    this.crudService.transactionForm.value.customerName= this.userdetails.customerName;
    this.crudService.transactionForm.value.customerAddress= this.userdetails.Address;
    this.crudService.transactionForm.value.phoneNo= this.userdetails.phoneNo;
  }

  onSubmit(){
    var flag=this.alphanumeric(this.crudService.transactionForm.value.beneficiaryBank,this.crudService.transactionForm.value.beneficiaryAccountNo,this.crudService.transactionForm.value.paymentDetails);
    if(flag){
      var ele= document.getElementById("transferCurrency") as HTMLSelectElement;
      this.crudService.transactionForm.value.transferCurrency= ele.value;
    this.crudService.createNewTransaction(this.crudService.transactionForm.value);
    }
  }

alphanumeric(beneficiaryBank,beneficiaryAccountNo,paymentDetails){ 
var letters = /^[0-9a-zA-Z]+$/;
    if(letters.test(beneficiaryBank) && letters.test(beneficiaryAccountNo) && letters.test(paymentDetails))
    {
        return true;
    }
    else
    {
      alert('Please input  only characters for fields beneficiaryBank,beneficiaryAccountNo,paymentDetails');
      return false;
    }
  }

}
