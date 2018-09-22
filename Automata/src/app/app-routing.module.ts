import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'fsm', pathMatch: 'full'},
  {path: 'fsm', loadChildren: './modules/fsm/fsm.module#FsmModule'},
  {path: 'pda', loadChildren: './modules/pda/pda.module#PdaModule'},
  {path: 'turing', loadChildren: './modules/turing/turing.module#TuringModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
