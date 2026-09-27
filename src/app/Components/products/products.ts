import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Card } from '../card/card';
import { Shadow } from '../../directives/shadow';
import { ProductsService } from '../../Services/products-service';
import { Search } from '../search/search';
import { Filter } from '../filter/filter';
import { Sort } from '../sort/sort';
import { Pagenation } from '../pagenation/pagenation';
import { startWith, Subject, switchMap } from 'rxjs';

@Component({
  imports: [Card, Search, Filter, Sort, Pagenation],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products implements OnInit {
  stringfromchild!: string;
  queryChange$: Subject<void> = new Subject()
  pageIndex = 1;
  pageSize = 3;
  count = 0;
  query: any = {
    pageIndex: this.pageIndex,
    pageSize: this.pageSize,
  };

  receve(value: string) {
    this.stringfromchild = value;
  }

  // products!:IProduct;
  products = signal<IProduct[]>([]);

 

  /**
   *
   */
  constructor(private _productservice: ProductsService) {
    //this.products=products
    //console.log(this.products)
  }
  ngOnInit(): void {
    this.queryChange$.pipe(
      startWith(null),
      switchMap(()=> this._productservice.GetAllProducts(this.query))
    ).subscribe({
      next: (res) => {
        this.products.set(res.data);
        this.pageIndex = res.pageIndex;
        this.pageSize = res.pageSize;
        this.count = res.count;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  Searching(value: string) {
    this.pageIndex = 1;
    this.query.pageIndex = this.pageIndex;
    if (value) {
      this.query.search = value;
      this.queryChange$.next()
    } else {
      delete this.query.search;
      this.queryChange$.next()
    }
  }
  sorting(value: string) {
    this.pageIndex = 1;
    this.query.pageIndex = this.pageIndex;
    if (value) {
      this.query.sort = value;
      this.queryChange$.next()
    } else {
      delete this.query.sort;
      this.queryChange$.next()
    }
  }

  filteringBrand(value: string) {
    this.pageIndex = 1;
    this.query.pageIndex = this.pageIndex;
    if (value) {
      this.query.brandId = value;
      this.queryChange$.next()
    } else {
      delete this.query.brandId;
      this.queryChange$.next()
    }
  }

    filteringCategory(value: string) {
    this.pageIndex = 1;
    this.query.pageIndex = this.pageIndex;
    if (value) {
      this.query.categoryId = value;
      this.queryChange$.next()
    } else {
      delete this.query.categoryId;
      this.queryChange$.next()
    }
  }

  changePage(pageIndex: number) {
    this.pageIndex = pageIndex;
    this.query.pageIndex = pageIndex;
    this.queryChange$.next();
  }

  /*ngAfterViewInit(): void {
    console.log("ViewChild",this.card.product);
    
  }

  @ViewChild(Card)
  card!:Card
*/
}
