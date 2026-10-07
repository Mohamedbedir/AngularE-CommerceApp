import { Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBrand } from '../models/ibrand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
    apiLink=`${environment.apiLink}/Products`;
    constructor(private http:HttpClient){
    }

    GetAllBrands(query:any={}):Observable<IBrand[]>{
        return this.http.get<IBrand[]>(`${this.apiLink}/Brands`,{params:query})
    }
}
