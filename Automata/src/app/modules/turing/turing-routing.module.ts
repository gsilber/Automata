import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TuringPageComponent } from './turing-page/turing-page.component';

const routes: Routes = [
    {path: '', component: TuringPageComponent},
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TuringRoutingModule { }
