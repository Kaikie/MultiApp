import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SomeCoreComponentComponent} from './some-core-component/some-core-component.component';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: () => import('../../projects/app1/src/app/app.module-exports').then(m => m.App1Module),
  },

  {
    path: 'somecoreroute',
    component: SomeCoreComponentComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
