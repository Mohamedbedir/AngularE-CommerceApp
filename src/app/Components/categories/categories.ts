import { Component, OnInit, signal } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { CategoryService } from '../../Services/category-service';
import { Shadow } from '../../directives/shadow';
import { Sort } from '../sort/sort';
import { startWith, Subject, switchMap } from 'rxjs';

@Component({
  imports: [Shadow,Sort],
  selector: 'app-categories',
  styleUrl: './categories.css',
  templateUrl: './categories.html',
})
export class Categories implements OnInit {


  //  categories!: ICategory[];
  categories = signal<ICategory[]>([]);
  queryChange$:Subject<void>=new Subject();
  query:any={}

  constructor(private _categoryservice: CategoryService) {}
  ngOnInit(): void {

    this.queryChange$.pipe(
      startWith(null),
      switchMap(()=> this._categoryservice.getAllCategories(this.query))
    ).subscribe({
      next: (data) => {
        this.categories.set(data);
      },

      error: (err) => {
        console.error(err);
      },
    });
  }


  sorting(value: string) {
    if (value) {
      this.query.sort = value;
      this.queryChange$.next()
    } else {
      delete this.query.sort;
      this.queryChange$.next()
    }
  }

}
