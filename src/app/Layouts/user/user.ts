import { Component } from '@angular/core';
import { Navbar } from '../../Components/navbar/navbar';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../Components/footer/footer';

@Component({
  imports: [Navbar, RouterOutlet, Footer],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {}
