import { Routes } from '@angular/router';
import { Home } from './Components/home/home';
import { Products } from './Components/products/products';
import { Contact } from './Components/contact/contact';
import { About } from './Components/about/about';
import { User } from './Layouts/user/user';
import { Admin } from './Layouts/admin/admin';
import { Dashboard } from './Components/dashboard/dashboard';
import { Error } from './Components/error/error';
import { Categories } from './Components/categories/categories';
import { Brands } from './Components/brands/brands';
import { ProductDetails } from './Components/product-details/product-details';
import { DeliveryMethods } from './Components/delivery-methods/delivery-methods';
import { Login } from './Components/login/login';
import { Register } from './Components/register/register';
import { userGuard } from './Guards/user-guard';
import { adminGuard } from './Guards/admin-guard';

export const routes: Routes = [
  {
    path: '',
    component: User,
    canActivateChild:[userGuard],
    children: [
      { path: '', component: Home, title: 'Home' },

      { path: 'products', component: Products, title: 'Products' },
      { path: 'products/:id', component: ProductDetails, title: 'ProductDetails' },
      { path: 'categories', component: Categories, title: 'Categories' },
      { path: 'brands', component: Brands, title: 'Brands' },
      { path: 'deliverymethods', component: DeliveryMethods, title: 'DeliveryMethods' },
      { path: 'contact', component: Contact, title: 'Contact' },

      { path: 'about', component: About, title: 'About' },
      //{ path: '**', component: Error, },
    ],
  },

  {
    path: 'admin',
    component: Admin,
    canActivateChild:[adminGuard],
    children: [
      { path: '', component: Dashboard },

      { path: 'products', component: Products },
      { path: 'products/:id', component: ProductDetails, title: 'ProductDetails' },

      { path: 'categories', component: Categories },
      { path: 'brands', component: Brands },
      { path: '**', component: Error },
      /*
      {
        path: 'orders',
        component: Orders
      },

      {
        path: 'customers',
        component: Customers
      },

      {
        path: 'statistics',
        component: Statistics
      }
*/
    ],
  },
  { path: 'auth/login', component: Login,title:'Login'  },
  { path: 'auth/register', component: Register,title:'Register'  },
    
  {
    path: '**',
    component: Error,
  },
];
// { path: '**', redirectTo: '' },
