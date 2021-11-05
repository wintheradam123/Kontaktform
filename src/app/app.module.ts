import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KontaktformComponent } from './kontaktform/kontaktform.component';
import { BetalingAdresseComponent } from './betaling-adresse/betaling-adresse.component';

@NgModule({
  declarations: [
    AppComponent,
    KontaktformComponent,
    BetalingAdresseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
