import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {AdminLibModule} from '../../../admin-lib/src/lib/admin-lib.module';
import {StoreModule} from '@ngrx/store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';

const routes: Routes = [
  { path: '', component: FirstComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    CommonModule,
    AdminLibModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('app1ShowHide', showHideReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App1Module { }