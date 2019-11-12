import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SomeCoreComponentComponent } from './some-core-component/some-core-component.component';

import { NgxElectronModule } from 'ngx-electron';

import { ServicioService } from './servicio.service';
@NgModule({
  declarations: [
    AppComponent,
    SomeCoreComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxElectronModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
