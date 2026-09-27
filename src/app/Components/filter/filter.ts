import { Component, EventEmitter, OnInit, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IBrand } from '../../models/ibrand';
import { BrandService } from '../../Services/brand-service';
import { ICategory } from '../../models/icategory';
import { CategoryService } from '../../Services/category-service';

@Component({
  imports: [FormsModule],
  selector: 'app-filter',
  styleUrl: './filter.css',
  templateUrl: './filter.html',
})
export class Filter implements OnInit {
  brands = signal<IBrand[]>([]);
  categoris=signal<ICategory[]>([]);

  brand = '';
  category = '';

  @Output()
  brandEvent: EventEmitter<string> = new EventEmitter();
  @Output()
  categoryEvent: EventEmitter<string> = new EventEmitter();
  
  constructor(private _brandservice: BrandService,private _categoryservice:CategoryService) {}

  ngOnInit(): void {
    this._brandservice.GetAllBrands().subscribe({
      next: (data) => {
        this.brands.set(data);
      },
      error: (err) => {
        console.error(err);
      },
    });

    this._categoryservice.getAllCategories().subscribe({
      next: (data) => {
        this.categoris.set(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  sendBrand(): void {
    this.brandEvent.emit(this.brand);
  }
  sendCategory(): void {
    this.categoryEvent.emit(this.category);
  }
}
