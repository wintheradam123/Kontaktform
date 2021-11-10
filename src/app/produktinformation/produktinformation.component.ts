import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LigProdukt1, Produkt, LigProdukt2, LigProdukt3 } from './Produkt';

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
  stjerner;

  ligproduktnavn1;
  ligpris1;
  ligdesc1;
  ligimage1;
  ligstjerner1;

  ligproduktnavn2;
  ligpris2;
  ligdesc2;
  ligimage2;
  ligstjerner2;

  ligproduktnavn3;
  ligpris3;
  ligdesc3;
  ligimage3;
  ligstjerner3;

  constructor () {
    this.getProdukter();
  }

  private getProdukter() {
    this.produktnavn = Produkt.produktnavn;
    this.pris = Produkt.pris;
    this.desc = Produkt.desc;
    this.image = Produkt.image;
    this.image2 = Produkt.image2;
    this.image3 = Produkt.image3;
    this.stjerner = Produkt.stjerner;

    this.ligproduktnavn1 = LigProdukt1.produktnavn;
    this.ligpris1 = LigProdukt1.pris;
    this.ligdesc1 = LigProdukt1.desc;
    this.ligimage1 = LigProdukt1.image;
    this.ligstjerner1 = LigProdukt1.stjerner;

    this.ligproduktnavn2 = LigProdukt2.produktnavn;
    this.ligpris2 = LigProdukt2.pris;
    this.ligdesc2 = LigProdukt2.desc;
    this.ligimage2 = LigProdukt2.image;
    this.ligstjerner2 = LigProdukt2.stjerner;

    this.ligproduktnavn3 = LigProdukt3.produktnavn;
    this.ligpris3 = LigProdukt3.pris;
    this.ligdesc3 = LigProdukt3.desc;
    this.ligimage3 = LigProdukt3.image;
    this.ligstjerner3 = LigProdukt3.stjerner;
  }

  ngOnInit(): void {
    let modelen =
      Produkt.modeller.map(function(element) {
        return '<option value="' + element + '">' + element
      });
      document.querySelector('#model').innerHTML = modelen.join('\n');
    }
  }