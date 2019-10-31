import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SecondComponent} from './second/second.component';
import {AdminLibModule} from '../../../admin-lib/src/lib/admin-lib.module';
import {StoreModule} from '@ngrx/store';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';

const routes: Routes = [
  { path: '', component: SecondComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    AdminLibModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('app2ShowHide', showHideReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App2Module { }