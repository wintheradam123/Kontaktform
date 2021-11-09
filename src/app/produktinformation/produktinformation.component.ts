import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Produkt } from './Produkt';

@Component({
  selector: 'app-produktinformation',
  templateUrl: './produktinformation.component.html',
  styleUrls: ['./produktinformation.component.css']
})
export class ProduktinformationComponent implements OnInit {
  produkt;
  produktnavn;
  pris;
  desc;
  image;
  image2;
  image3;
  constructor () {
    this.produktnavn = Produkt.produktnavn;
    this.pris = Produkt.pris;
    this.desc = Produkt.desc;
    this.image = Produkt.image;
    this.image2 = Produkt.image2;
    this.image3 = Produkt.image3;
  }
  ngOnInit(): void {
    let modelen =
      Produkt.modeller.map(function(element) {
        return '<option value="' + element + '">' + element
      });
      document.querySelector('#model').innerHTML = modelen.join('\n');
    }
  }