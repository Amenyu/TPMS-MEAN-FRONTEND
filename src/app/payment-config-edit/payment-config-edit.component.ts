import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TpmsService } from '../tpms.service';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner"; 

@Component({
  selector: 'app-payment-config-edit',
  templateUrl: './payment-config-edit.component.html',
  styleUrls: ['./payment-config-edit.component.css']
})
export class PaymentConfigEditComponent implements OnInit {
  configItem={
    trainerType:'',
    trainingMode:'',
    isExtraActivity:'No',
    noOfStudents:'',
    paymentAmt:0
  }

  constructor(private tpmsService :TpmsService , private router :Router) { }

  ngOnInit(): void {
    let paymentConfigId = localStorage.getItem("editPaymentConfigId");
    this.tpmsService.getPaymentConfig(paymentConfigId).subscribe((data)=>{
      this.configItem=JSON.parse(JSON.stringify(data));
    })
  }

  editPaymentConfig(){
    this.tpmsService.editPaymentConfig(this.configItem);
    localStorage.removeItem('editPaymentConfigId');
    this.router.navigate(['payment-config-list']);   
  }
}
