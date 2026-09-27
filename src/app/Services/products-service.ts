import { Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/iproduct';

export interface IProductsResponse {
    pageSize: number;
    pageIndex: number;
    count: number;
    data: IProduct[];
}

@Injectable({
    providedIn:'root'
})
export class ProductsService {

    apiLink=environment.apiLink;
    constructor(private http:HttpClient){

    }
    /*GetAllProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(`${this.apiLink}/Products`)
    }*/
      GetAllProducts(query:any={}):Observable<IProductsResponse>{
          return this.http.get<IProductsResponse>(`${this.apiLink}/Products`,{params:query});
    }
     GetProductById(id:number):Observable<IProduct>{
        return this.http.get<IProduct>(`${this.apiLink}/Products/${id}`)
          
    }
}
