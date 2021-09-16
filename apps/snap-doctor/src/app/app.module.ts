import { MaterialModule } from './modules/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
