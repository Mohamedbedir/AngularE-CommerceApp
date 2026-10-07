import { Injectable, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../models/icategory';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

     apiLink=`${environment.apiLink}/Products`;

    constructor(private http: HttpClient) {

    }
    getAllCategories(query:any={}): Observable<ICategory[]> {
        return this.http.get<ICategory[]>(`${this.apiLink}/Categories`,{params:query});
    }
}
