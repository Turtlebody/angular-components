import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './components/test/test.component';


export const DEMO_ROUTES = [
  TestComponent
];
const routes: Routes = [
  { path: 'test', component: TestComponent },

  { path: '**', redirectTo: 'test' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
