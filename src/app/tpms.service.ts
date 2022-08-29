import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TpmsService {

    baseServerURL :string = 'http://localhost:8080/api';
    // baseServerURL:String = '/api';

  constructor(private http : HttpClient,private router:Router) { }

  newPaymentConfig(item:any){
    return this.http
    .post(`${this.baseServerURL}/insertPaymentConfig`,{pymtConfig : item})
    .subscribe((data)=>{
      console.log(data);
    });
  }
  getPaymentConfigList(){
    return this.http.get(`${this.baseServerURL}/paymentConfigList`);
  }
  getPaymentConfig(id :any){
    return this.http.get(`${this.baseServerURL}/getPaymentConfig`+id);
  }
  deletePaymentConfig(id:any)
  {
    return this.http.delete(`${this.baseServerURL}/removePaymentConfig/`+id);
  }
  editPaymentConfig(paymentConfig:any){
    return this.http.put(`${this.baseServerURL}/updatePaymentConfig`,paymentConfig)
    .subscribe((data)=>{console.log(data)})
  }
}
