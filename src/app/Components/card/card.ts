import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Observable } from 'rxjs';
import { Shadow } from '../../directives/shadow';
import { TruncPipe } from '../../Pipes/trunc-pipe';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CurrencyPipe, Shadow, TruncPipe, RouterLink],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
     this.stringEvent.emit(this.valuefromchild);
  }
  valuefromchild = 'valuef';

  @Output()
  stringEvent: EventEmitter<string> = new EventEmitter();

  @Input()
  product!: IProduct;

  readonly fallbackImage = '/default-product.svg';

  useFallback(event: Event): void {
    const image = event.target as HTMLImageElement;

    if (image.src.endsWith(this.fallbackImage)) {
      return;
    }

    image.src = this.fallbackImage;
  }
  /*
  imegs$ = new Observable((observe) => {
    observe.next(1);
    observe.next(2);
    observe.next(3);
    observe.next(4);
    observe.next(5);
    observe.complete();

  });
  imegs$.Subscribe({
    next:(data) => {
      console.log(data);
    };
    comp
  }); */
}
