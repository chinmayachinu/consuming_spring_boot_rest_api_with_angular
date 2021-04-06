import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/class/customer';
import { CustomerCompanyService } from 'src/app/service/customer-company.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList?:Observable<Customer[]>
  constructor(private service:CustomerCompanyService,private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }
  findAll(){
    this.customerList=this.service.findAllCustomer()
  }
  
  deleteCustomer(userId: any){
    this.service.deleteCustomer(userId).subscribe(data=>{
      this.findAll()
    })
  }

  updateCustomer(userId:any){
    this.router.navigate(['customer-update',userId])
  }

}
