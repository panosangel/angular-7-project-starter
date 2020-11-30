import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {SharedModule} from './modules/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import {CoreModule} from './modules/core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
