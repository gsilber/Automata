import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PdaPageComponent } from './pda-page/pda-page.component';


const routes: Routes = [
  {path: '', component: PdaPageComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PdaPageComponent]
})
export class PdaModule { }
