import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { RouterModule, Routes } from '@angular/router';
import { environment as environmentParent  } from '../../../../src/environments/environment';
import { StoreModule, Store } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {AdminLibModule} from '../../../admin-lib/src/lib/admin-lib.module';
import {showHideReducer} from './store/showHideElement/hide-show.reducer';


const routes:Routes=[
  {
    path: '', component: SecondComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    AdminLibModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({}),
    StoreModule.forFeature('app2ShowHide', showHideReducer),
    !environment.production ? StoreDevtoolsModule.instrument()  :[]

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
