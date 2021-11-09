import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktformComponent } from './kontaktform/kontaktform.component';
import { BetalingsformComponent } from './betalingsform/betalingsform.component';
import { ProduktinformationComponent } from './produktinformation/produktinformation.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktformComponent,
    BetalingsformComponent,
    ProduktinformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
