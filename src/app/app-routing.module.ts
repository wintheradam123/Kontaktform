import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KontaktformComponent } from './kontaktform/kontaktform.component';

const routes: Routes = [
  { path: 'kontaktform', component:KontaktformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
