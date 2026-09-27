import { CurrencyPipe } from '@angular/common';
import { Component, OnInit, signal, Signal } from '@angular/core';
import { IDeliveryMethod } from '../../models/ideliverymethod';
import { DeliveryMethodService } from '../../Services/delivery-methods';
import { Shadow } from '../../directives/shadow';

@Component({
  imports: [CurrencyPipe,Shadow],
  selector: 'app-delivery-methods',
  styleUrl: './delivery-methods.css',
  templateUrl: './delivery-methods.html',
})
export class DeliveryMethods implements OnInit{
  deliverymethods=signal<IDeliveryMethod[]>([]);
  constructor(private _deliverymethods:DeliveryMethodService){

  }
  ngOnInit(): void {
    this._deliverymethods.GetAllDeliveryMethods().subscribe({
      next:(data)=> {
        this.deliverymethods.set(data)
        console.log(data);
        
      },
      error:(err)=>{
        console.error(err);
        
      }
    })
  }

}
