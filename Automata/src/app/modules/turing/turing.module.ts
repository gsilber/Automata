import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TuringPageComponent } from './turing-page/turing-page.component';
import { TuringRoutingModule } from './turing-routing.module';


@NgModule({
  imports: [
    CommonModule,
    TuringRoutingModule
  ],
  declarations: [TuringPageComponent]
})
export class TuringModule { }
