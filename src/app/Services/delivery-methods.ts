import { Injectable, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDeliveryMethod } from '../models/ideliverymethod';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeliveryMethodService {
    apiLink = environment.apiLink;
    constructor(private http:HttpClient){
    }

    GetAllDeliveryMethods():Observable<IDeliveryMethod[]>{
        return this.http.get<IDeliveryMethod[]>(`${this.apiLink}/Products/DeliveryMethods`)
    }
}

