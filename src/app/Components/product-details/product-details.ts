import { Component, OnInit, signal } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../Services/products-service';
import { ActivatedRoute } from '@angular/router';
import { CurrencyPipe, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Shadow } from '../../directives/shadow';

@Component({
  imports: [CurrencyPipe, RouterLink, Shadow],
  selector: 'app-product-details',
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails implements OnInit {
  product = signal<IProduct | null>(null);
  id!: number;
  constructor(
    private _productservice: ProductsService,
    private route: ActivatedRoute,
    private location:Location
  ) {}
  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next:(data:any)=>this.id=data.params.id
    })

    //this.id = Number(this.route.snapshot.paramMap.get('id'));
   /* this.route.paramMap.subscribe({
      next: (data: any) => (this.id = data.params.id),
    });*/
    this._productservice.GetProductById(this.id).subscribe({
      next: (data) => {
        this.product.set(data);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  navigate(){
    this.location.back()
  }

  readonly fallbackImage = '/default-product.svg';

  useFallback(event: Event): void {
    const image = event.target as HTMLImageElement;

    if (image.src.endsWith(this.fallbackImage)) {
      return;
    }

    image.src = this.fallbackImage;
  }
}
