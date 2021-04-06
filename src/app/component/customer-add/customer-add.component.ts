import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerCompanyService } from 'src/app/service/customer-company.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent implements OnInit {
  constructor(private fb: FormBuilder,private router: Router,private service:CustomerCompanyService) { }

  addCustomerForm=this.fb.group({
    customerName:[''],
    companyName:[''],
    userId:[''],
    customerDatabaseId:[''],
    districtId:[''],
    createDate:[''],
    transactionDate:['']
  })
  ngOnInit(): void {
  }
  addCustomer(){
    this.service.createCustomer(this.addCustomerForm.value).subscribe(
      data=>{
        this.router.navigate(['/customer-list']);
      }
    )
  }
}
