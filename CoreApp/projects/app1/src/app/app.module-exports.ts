import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AdminLibModule} from '../../../admin-lib/src/lib/admin-lib.module';

const routes: Routes = [
  { path: '', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    AdminLibModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class App1Module { }