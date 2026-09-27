import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-error',
  styleUrl: './error.css',
  templateUrl: './error.html',
})
export class Error {
  constructor(private router: Router,private loc:Location) {}
  goBack(){
    this.loc.back()
    //this.router.navigate(['/']);
    //this.router.navigateByUrl(['']);
  }
}
