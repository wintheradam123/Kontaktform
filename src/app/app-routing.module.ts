import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktformComponent } from './kontaktform/kontaktform.component';
import { BetalingAdresseComponent } from './betaling-adresse/betaling-adresse.component';

const routes: Routes = [
  { path: 'kontaktform', component:KontaktformComponent },
  { path: 'betalingadresse', component:BetalingAdresseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
