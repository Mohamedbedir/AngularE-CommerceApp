import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../Services/auth-service';
import { PayloadService } from '../../Services/payload-service';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  constructor(
    private authService: AuthService,
    private payloadService: PayloadService,
    private router: Router,
  ) {}

  get isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  get userDisplayName(): string {
    return  this.payloadService.getEmail() || 'Account';
  }

  logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login');
  }
}
