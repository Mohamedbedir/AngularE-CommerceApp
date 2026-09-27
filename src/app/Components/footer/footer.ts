import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {

  date=new Date().getUTCFullYear()

  obj={
    name:"mohamed",
    age:26
  }
}
