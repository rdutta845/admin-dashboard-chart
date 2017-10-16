import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanActivateGuard, LayoutsAuthComponent } from 'ngx-admin-lte';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNumComponent } from './pages/page-num/page-num.component';
import { ChartComponent } from './pages/chart/chart.component';
import { DashComponent } from './pages/dashboard/dashboard.component';
// Components
import { AppComponent } from './app.component';

const routes: Routes = [
  // logged routes
  {
    canActivate: [CanActivateGuard],
    children: [
    { path: '', redirectTo: 'page/home', pathMatch: 'full' },
      {
        canActivate: [CanActivateGuard],
        component: HomeComponent,
        path: 'home'
      },
      {
        canActivate: [CanActivateGuard],
        component: PageNumComponent,
        path: 'page/:id'
      },
      {
        canActivate: [CanActivateGuard],
        component: ChartComponent,
        path: 'chart'
      },
      {
        canActivate: [CanActivateGuard],
        component: DashComponent,
        path: 'dashboard'
      }
    ],
    component: LayoutsAuthComponent,
    path: ''
    
  },
  // not logged routes
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
