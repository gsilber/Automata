import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsmPageComponent } from './fsm-page/fsm-page.component';
import { FsmRoutingModule } from './fsm-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FsmViewComponent } from './fsm-editor/fsm-view/fsm-view.component';
import { FsmEditComponent } from './fsm-editor/fsm-edit/fsm-edit.component';
import { FsmPropertiesComponent } from './fsm-editor/fsm-properties/fsm-properties.component';
import { FsmStatusComponent } from './fsm-editor/fsm-status/fsm-status.component';
import { FsmToolbarComponent } from './fsm-editor/fsm-toolbar/fsm-toolbar.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FsmRoutingModule,
  ],
  declarations: [FsmPageComponent, FsmViewComponent, FsmEditComponent, FsmPropertiesComponent, FsmStatusComponent, FsmToolbarComponent]
})
export class FsmModule { }
