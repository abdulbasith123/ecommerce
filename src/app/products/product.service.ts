import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  search=new BehaviorSubject('')

  constructor(private http: HttpClient) { }



  viewAllProduct(){
    const baseurl='http://localhost:3000/products'
    return this.http.get(baseurl)
  }

  viewProduct(productId:any){
    const baseurl='http://localhost:3000/products/'+productId
    return this.http.get(baseurl)
  }

  deleteProduct(productId:any){
    const baseurl='http://localhost:3000/products/'+productId
    return this.http.delete(baseurl)
  }
}
