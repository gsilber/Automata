import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PdaPageComponent } from './pda-page/pda-page.component';
import { PdaRoutingModule } from './pda-routing.module';


@NgModule({
  imports: [
    CommonModule,
    PdaRoutingModule
  ],
  declarations: [PdaPageComponent]
})
export class PdaModule { }
