import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestAnimComponent } from './test-anim/test-anim.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'anim',
  pathMatch: 'full'
},
{
  path: 'anim',
  component: TestAnimComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
