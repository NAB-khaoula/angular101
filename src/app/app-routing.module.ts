import { RouteParamsComponent } from './common-techniques/route-params/route-params.component';
import { AboutVacationComponent } from './common-techniques/about/about-vacation/about-vacation.component';
import { AboutPayrollComponent } from './common-techniques/about/about-payroll/about-payroll.component';
import { AboutComponent } from './common-techniques/about/about.component';
import { CommonTechniquesComponent } from './common-techniques/common-techniques.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { ProtectedRouteComponent } from './common-techniques/protected-route/protected-route.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  {
    path: 'example',
    component: CommonTechniquesComponent,
    children: [
      {
        path: 'child',
        component: AboutComponent,
        children: [
          { path: 'payroll', component: AboutPayrollComponent },
          { path: 'vacation', component: AboutVacationComponent },
        ],
      },
      { path: 'routeParams', component: RouteParamsComponent },
      { path: 'routeParams/:id', component: RouteParamsComponent },
      {path: 'protectedRoute', component: ProtectedRouteComponent},
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
