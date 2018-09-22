import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsmPageComponent } from './fsm-page/fsm-page.component';
import { FsmRoutingModule } from './fsm-routing.module';




@NgModule({
  imports: [
    CommonModule,
    FsmRoutingModule
  ],
  declarations: [FsmPageComponent]
})
export class FsmModule { }
