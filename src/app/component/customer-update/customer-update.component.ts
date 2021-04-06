import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/class/customer';
import { CustomerCompanyService } from 'src/app/service/customer-company.service';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  constructor(private fb: FormBuilder,private route:ActivatedRoute,private router:Router,private service:CustomerCompanyService) { }
  customer:Customer=new Customer();

  findCustomerById(){
    this.service.findCustomerById(this.route.snapshot.params.id).subscribe(data=>{
      this.customer=data;
      console.log(this.customer)
    })
  }
  updateCustomerForm=this.fb.group({
    customerName:[''],
    companyName:[''],
    userId:[''],
    customerDatabaseId:[''],
    districtId:[''],
    createDate:[''],
    transactionDate:['']
  })
  ngOnInit(): void {
    this.findCustomerById()
  }
  
  
  updateCustomer(){
    this.service.updateCustomer(this.updateCustomerForm.value,this.customer.userId).subscribe(
      data=>{
        this.router.navigate(['/customer-list']);
      }
    )
  }
}
