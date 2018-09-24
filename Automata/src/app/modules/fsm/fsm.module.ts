import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsmPageComponent } from './fsm-page/fsm-page.component';
import { FsmRoutingModule } from './fsm-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FsmViewComponent } from './fsm-editor/fsm-view/fsm-view.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FsmRoutingModule,
  ],
  declarations: [FsmPageComponent, FsmViewComponent]
})
export class FsmModule { }
