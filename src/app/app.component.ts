import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

//Angular kan hverken sende mails, eller gemme dataen der bliver skrevet i en form i en JSON fil på serveren. Dette betyder at den måde vi har stillet det op på, vil ikke give mening.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
}
