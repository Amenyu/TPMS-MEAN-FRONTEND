import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TpmsService } from '../tpms.service';

@Component({
  selector: 'app-payment-config-list',
  templateUrl: './payment-config-list.component.html',
  styleUrls: ['./payment-config-list.component.css']
})
export class PaymentConfigListComponent implements OnInit {

  paymentConfigs=[{
    trainerType:'',
    trainingMode:'',
    isExtraActivity:'',
    noOfStudents:'',
    paymentAmt:''
  }];


  constructor(private tpmsService : TpmsService , private router :Router ) { }

  ngOnInit(): void {
    this.tpmsService.getPaymentConfigList().
    subscribe((data)=>{
      this.paymentConfigs=JSON.parse(JSON.stringify(data));
    })
  }
  editPaymentConfig(paymentConfig:any){
    localStorage.setItem("editPaymentConfigId",paymentConfig._id.toString());
    this.router.navigate(['payment-config-edit']);
  }

  deletePaymentConfig(paymentConfig:any)
  {
    if(confirm(`Do you want to delete this configuration ?`)){
    this.tpmsService.deletePaymentConfig(paymentConfig._id)
      .subscribe((data) => {
        this.paymentConfigs = this.paymentConfigs.filter(item => item !== paymentConfig);
      })
    }
  }

  addConfig(){
    this.router.navigate(['payment-config-add']);
  }
}
