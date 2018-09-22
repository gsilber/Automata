import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent }
  {path: 'fsm', loadChildren: './modules/fsm/fsm.module#FsmModule'},
  {path: 'pda', loadChildren: './modules/pda/pda.module#PdaModule'},
  {path: 'turing', loadChildren: './modules/turing/turing.module#TuringModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
