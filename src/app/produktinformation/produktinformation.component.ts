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
  lagerantal;

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
    this.getProdukter(); //Kalder nedenstående metode
  }


    private getProdukter() { //Indsætter værdierne fra produkt.ts til dette scope. Burde nemt kunne ændres til at tage værdier fra en db
    this.produktnavn = Produkt.produktnavn;
    this.pris = Produkt.pris;
    this.desc = Produkt.desc;
    this.image = Produkt.image;
    this.image2 = Produkt.image2;
    this.image3 = Produkt.image3;
    this.lagerantal = Produkt.lagerantal;

    this.ligproduktnavn1 = LigProdukt1.produktnavn;
    this.ligpris1 = LigProdukt1.pris;
    this.ligdesc1 = LigProdukt1.desc;
    this.ligimage1 = LigProdukt1.image;


    this.ligproduktnavn2 = LigProdukt2.produktnavn;
    this.ligpris2 = LigProdukt2.pris;
    this.ligdesc2 = LigProdukt2.desc;
    this.ligimage2 = LigProdukt2.image;


    this.ligproduktnavn3 = LigProdukt3.produktnavn;
    this.ligpris3 = LigProdukt3.pris;
    this.ligdesc3 = LigProdukt3.desc;
    this.ligimage3 = LigProdukt3.image;

  }

  ngOnInit(): void {
    let modelen =
      Produkt.modeller.map(function(element) {
        return '<option value="' + element + '">' + element
      });
      document.querySelector('#model').innerHTML = modelen.join('\n');

      getStars();

    function getStars() {
      let i = 0;
      let stjerner = Produkt.stjerner;
      while (i < stjerner) {
        document.getElementById("stjerner").innerHTML += "<img style=\"width: 25px\" class=\"stjerneimg\" src=\"assets/img/star.png\" />";
        i++;
      }

      getLigStars();

      function getLigStars() {
        i = 0;
        while (i < LigProdukt1.stjerner) {
          document.getElementById("ligimg1").innerHTML += "<img style=\"width: 15px; padding-bottom=\"5px\"\" class=\"stjerneimg\" src=\"assets/img/star.png\" />";
          i++;
        }
        i = 0;
        while (i < LigProdukt2.stjerner) {
          document.getElementById("ligimg2").innerHTML += "<img style=\"width: 15px; padding-bottom=\"5px\"\" class=\"stjerneimg\" src=\"assets/img/star.png\" />";
          i++;
        }
        i = 0;
        while (i < LigProdukt3.stjerner) {
          document.getElementById("ligimg3").innerHTML += "<img style=\"width: 15px; padding-bottom=\"5px\"\" class=\"stjerneimg\" src=\"assets/img/star.png\" />";
          i++;
        }
      }
    }
  }
}