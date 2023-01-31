import { CustomInputComponent } from './common-techniques/custom-input/custom-input.component';
import { DynamicComponents } from './common-techniques/dynamic-components/dynamic-components.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './common/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RouteParamsComponent } from './common-techniques/route-params/route-params.component';
import { AboutVacationComponent } from './common-techniques/about/about-vacation/about-vacation.component';
import { AboutPayrollComponent } from './common-techniques/about/about-payroll/about-payroll.component';
import { AboutComponent } from './common-techniques/about/about.component';
import { CommonTechniquesComponent } from './common-techniques/common-techniques.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProtectedRouteComponent } from './common-techniques/protected-route/protected-route.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'example',
    component: CommonTechniquesComponent,
    children: [
      {
        path: 'child',
        component: AboutComponent,
        children: [
          {
            path: 'payroll',
            component: AboutPayrollComponent,
          },
          {
            path: 'vacation',
            component: AboutVacationComponent,
          },
        ],
        canActivate: [AuthGuard],
      },
      {
        path: 'routeParams',
        component: RouteParamsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'routeParams/:id',
        component: RouteParamsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'protectedRoute',
        component: ProtectedRouteComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'lazyModule',
        loadChildren: () =>
          import('./common-techniques/lazy-module/lazy-module.module').then(
            (m) => m.LazyModule
          ),
      },
      {
        path: 'dynamic-components',
        component: DynamicComponents,
        canActivate: [AuthGuard]
      },
      {
        path: 'custom-input',
        component: CustomInputComponent,
        canActivate: [AuthGuard]
      }
    ],
  },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [
      ProtectedRouteComponent
    ]
})
export class AppRoutingModule { }
