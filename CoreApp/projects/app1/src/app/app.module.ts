import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Route, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { environment as environmentParent  } from '../../../../src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AdminLibModule } from 'projects/admin-lib/src/public-api';
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
    BrowserModule,
    AdminLibModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature('app1ShowHide', showHideReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
