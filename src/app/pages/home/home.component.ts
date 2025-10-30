import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  leiloes!: any[];

  ngOnInit(): void {
    this.leiloes = [
      {
        id: 1,
        nome: 'Leilão de Carros Seminovos',
        dataHora: '2025-12-01T15:00:00',
        lotes: [
          {
            id: 1,
            nome: 'Toyota Corolla 2020',
            modelo: 'XEI 2.0 Automático',
            lanceAtual: 89000,
            uf: 'SP',
            imagem:
              'https://cdn.motor1.com/images/mgl/6Z7o3/s1/toyota-corolla-2020.jpg',
            fotos: ['f1', 'f2'],
          },
          {
            id: 2,
            nome: 'Honda Civic 2019',
            modelo: 'Touring 1.5 Turbo',
            lanceAtual: 91000,
            uf: 'RJ',
            imagem:
              'https://cdn.motor1.com/images/mgl/02y6B/s1/honda-civic-2019.jpg',
            fotos: ['f1', 'f2', 'f3'],
          },
          {
            id: 3,
            nome: 'Jeep Compass 2021',
            modelo: 'Limited 2.0 Diesel',
            lanceAtual: 128000,
            uf: 'MG',
            imagem:
              'https://cdn.motor1.com/images/mgl/v77qP/s1/jeep-compass-2021.jpg',
            fotos: ['f1'],
          },
          {
            id: 4,
            nome: 'Volkswagen T-Cross 2022',
            modelo: 'Comfortline 1.0 TSI',
            lanceAtual: 115000,
            uf: 'PR',
            imagem:
              'https://cdn.motor1.com/images/mgl/6bMZo/s1/vw-t-cross-2022.jpg',
            fotos: ['f1', 'f2'],
          },
        ],
      },
      {
        id: 2,
        nome: 'Leilão de Motos Esportivas',
        dataHora: '2025-11-15T09:00:00',
        lotes: [
          {
            id: 1,
            nome: 'Yamaha R3 2020',
            modelo: 'ABS',
            lanceAtual: 29000,
            uf: 'SP',
            imagem:
              'https://cdn.motor1.com/images/mgl/MkZjb/s1/yamaha-yzf-r3.jpg',
            fotos: ['f1'],
          },
          {
            id: 2,
            nome: 'Kawasaki Ninja 400',
            modelo: 'Verde Edição Especial',
            lanceAtual: 33000,
            uf: 'RJ',
            imagem:
              'https://cdn.motor1.com/images/mgl/pnJoB/s1/kawasaki-ninja-400.jpg',
            fotos: ['f1', 'f2'],
          },
        ],
      },
    ];
  }
}
