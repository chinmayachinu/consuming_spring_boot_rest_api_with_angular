import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomerCompanyService {

  private baseUrl:string= 'http://localhost:8080/'
  constructor(private http: HttpClient) { }

  findAllCustomer():Observable<any>{
    return this.http.get(this.baseUrl+"customer")
  }
  findCustomerById(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(this.baseUrl+"customer", customer);
  }
  updateCustomer(customer:any,id:any):Observable<any>{
    return this.http.put(`${this.baseUrl}/${id}`,customer)
  }
  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
}
