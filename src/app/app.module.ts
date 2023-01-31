import { TriangleComponent } from './common-techniques/dynamic-components/triangle/triangle.component';
import { SquareComponent } from './common-techniques/dynamic-components/square/square.component';
import { CircleComponent } from './common-techniques/dynamic-components/circle/circle.component';
import { AboutPayrollComponent } from './common-techniques/about/about-payroll/about-payroll.component';
import { AboutVacationComponent } from './common-techniques/about/about-vacation/about-vacation.component';
import { AboutComponent } from './common-techniques/about/about.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { CommonTechniquesComponent } from './common-techniques/common-techniques.component';
import { RouteParamsComponent } from './common-techniques/route-params/route-params.component';
import { LoginComponent } from './login/login.component';
import { LazyModule } from './common-techniques/lazy-module/lazy-module.module';
import { DynamicComponents } from './common-techniques/dynamic-components/dynamic-components.component';
import { CustomInputComponent } from './common-techniques/custom-input/custom-input.component';
import { CustomControlComponent } from './common-techniques/custom-input/custom-control/custom-control.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    AboutComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    AboutVacationComponent,
    AboutPayrollComponent,
    CommonTechniquesComponent,
    RouteParamsComponent,
    LoginComponent,
    DynamicComponents,
    CircleComponent,
    SquareComponent,
    TriangleComponent,
    CustomInputComponent,
    CustomControlComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
