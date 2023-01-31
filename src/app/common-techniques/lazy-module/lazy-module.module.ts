import { MaterialModule } from './../../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { LazyModuleComponent } from './lazy-module.component';


@NgModule({
  declarations: [LazyModuleComponent],
  imports: [
    CommonModule,
    LazyModuleRoutingModule,
    MaterialModule
  ]
})
export class LazyModule { }
