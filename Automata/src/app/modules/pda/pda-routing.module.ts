import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdaPageComponent } from './pda-page/pda-page.component';

const routes: Routes = [
    {path: '', component: PdaPageComponent},
  ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdaRoutingModule { }
