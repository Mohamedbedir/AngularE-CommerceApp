import { Component, OnInit, signal } from '@angular/core';
import { IBrand } from '../../models/ibrand';
import { BrandService } from '../../Services/brand-service';
import { Shadow } from '../../directives/shadow';
import { Sort } from '../sort/sort';
import { startWith, Subject, switchMap } from 'rxjs';

@Component({
  imports: [Shadow,Sort],
  selector: 'app-brands',
  styleUrl: './brands.css',
  templateUrl: './brands.html',
})
export class Brands implements OnInit{
  brands=signal<IBrand[]>([]);

   queryChange$:Subject<void>=new Subject();
    query:any={}


  constructor(private _brandservice:BrandService) {
  
  }
  ngOnInit(): void {
    this.queryChange$.pipe(
      startWith(null),
      switchMap(()=>this._brandservice.GetAllBrands(this.query))
    ).subscribe({
      next:(data)=>{
        this.brands.set(data)
      },
      error:(err)=>{console.error(err);
      }
    })
  }

  sorting(value:string){
    if(value){
      this.query.sort=value
      this.queryChange$.next()
    }
    else{
       delete this.query.sort;
      this.queryChange$.next()
    }
  }
}
