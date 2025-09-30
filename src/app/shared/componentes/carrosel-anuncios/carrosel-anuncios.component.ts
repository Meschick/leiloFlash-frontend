import { Component } from '@angular/core';


@Component({
  selector: 'app-carrosel-anuncios',
  templateUrl: './carrosel-anuncios.component.html',
  styleUrls: ['./carrosel-anuncios.component.scss']
})
export class CarroselAnunciosComponent {

 responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
];


  products: any | undefined;


  ngOnInit() {
    this.dadosMock();
  }

  dadosMock() {
    this.products = [
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        image: 'assets/anuncio3.png'
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        image: 'assets/anuncio2.png'
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        image: 'assets/anuncio1.png'
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        image: 'https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg'
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        image: 'https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg'
      },
      {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        image: 'https://images.pexels.com/photos/5086489/pexels-photo-5086489.jpeg'
      },

    ]
  }
}
