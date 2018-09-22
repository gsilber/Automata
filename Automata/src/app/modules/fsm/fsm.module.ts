import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FsmPageComponent } from './fsm-page/fsm-page.component';



const routes: Routes = [
  {path: '', component: FsmPageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FsmPageComponent]
})
export class FsmModule { }
