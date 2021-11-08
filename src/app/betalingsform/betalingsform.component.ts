import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-betalingsform',
  templateUrl: './betalingsform.component.html',
  styleUrls: ['./betalingsform.component.css']
})
export class BetalingsformComponent {
  title ='Betalingsinformation';
  formGroup;

  constructor(
    private formBuilder : FormBuilder
  ) {
    this.formGroup = this.formBuilder.group({
      forNavn: '',
      efterNavn: '',
      adresse1: '',
      adresse2: '',
      land: '',
      by: '',
      postnummer: '',
      telefon: '',
    });
  }

  onSubmit(formData){
    console.log(formData)
  }

}
