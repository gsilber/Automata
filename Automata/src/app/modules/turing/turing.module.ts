import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TuringPageComponent } from './turing-page/turing-page.component';

const routes: Routes = [
  {path: '', component: TuringPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TuringPageComponent]
})
export class TuringModule { }
