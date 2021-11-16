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
    this.formGroup = this.formBuilder.group({     //Laver et objekt for dataen i formen den får fra html
      firstname: '',
      lastname: '',
      address: '',
      address2: '',
      country: '',
      city: '',
      zip: '',
      phone: '',
      delivery: '',
    });
  }

  onSubmit(formData){     //Når submit knappen bliver trykket i html, kører det nedenstående
    console.log(formData)
  }

}
