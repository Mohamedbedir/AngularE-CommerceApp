import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {
  isCollapsed = false;

  @Output()
  sidebarToggle = new EventEmitter<boolean>();

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;

    this.sidebarToggle.emit(this.isCollapsed);
  }

  menuItems = [
    { title: 'Dashboard', icon: 'bi-grid', route: '/admin' },
    { title: 'Products', icon: 'bi-box-seam', route: '/admin/products' },
    { title: 'Categories', icon: 'bi-box-seam', route: '/admin/categories' },
    { title: 'Brands', icon: 'bi-box-seam', route: '/admin/brands' },
    { title: 'Orders', icon: 'bi-bag', route: '/admin/orders' },
    { title: 'Customers', icon: 'bi-people', route: '/admin/customers' },
    { title: 'Statistics', icon: 'bi-bar-chart', route: '/admin/statistics' },
    { title: 'Reviews', icon: 'bi-chat-left-text', route: '/admin/reviews' },
    { title: 'Transactions', icon: 'bi-arrow-left-right', route: '/admin/transactions' },
    { title: 'Settings', icon: 'bi-gear', route: '/admin/settings' },
  ];
}
