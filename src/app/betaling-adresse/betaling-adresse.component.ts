import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-betaling-adresse',
  templateUrl: './betaling-adresse.component.html',
  styleUrls: ['./betaling-adresse.component.css']
})
export class BetalingAdresseComponent{
  useradresse: Object = {};
  
  onSubmitTemplateBased() {
    console.log(this.vm)
  }

}
