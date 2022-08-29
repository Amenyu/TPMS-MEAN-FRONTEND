import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TpmsService } from '../tpms.service';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-payment-config-add',
  templateUrl: './payment-config-add.component.html',
  styleUrls: ['./payment-config-add.component.css']
})
export class PaymentConfigAddComponent implements OnInit {
  configItem={
    trainerType:'',
    trainingMode:'',
    isExtraActivity:'No',
    noOfStudents:'',
    paymentAmt:0
  }

  constructor(private tpmsService :TpmsService , private router :Router, private SpinnerService: NgxSpinnerService ) { }

  ngOnInit(): void {
  }

 
  addConfig(){ 
    this.SpinnerService.show();
    this.tpmsService.newPaymentConfig(this.configItem); 
      
      this.router.navigate(['payment-config-list']);
      this.SpinnerService.hide();
   
  }

}
