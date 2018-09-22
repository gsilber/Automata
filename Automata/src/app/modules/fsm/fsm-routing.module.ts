import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FsmPageComponent } from './fsm-page/fsm-page.component';

const routes: Routes = [
    {path: '', component: FsmPageComponent},
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FsmRoutingModule { }
