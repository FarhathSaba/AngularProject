import { Component, OnInit } from '@angular/core';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-viewtransaction',
  templateUrl: './viewtransaction.component.html',
  styleUrls: ['./viewtransaction.component.css']
})
export class ViewtransactionComponent implements OnInit {

  constructor(public crudService:CRUDService) { }

  customerNo;
  viewTransactionList;

  ngOnInit() {
    this.customerNo= JSON.parse(sessionStorage.getItem("customerNo")).toString();
    this.crudService.getCustomerTransaction(this.customerNo).subscribe(
      res=>
      this.viewTransactionList= res
    );
  }

}
