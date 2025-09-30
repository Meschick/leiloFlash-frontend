import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  leiloes!: any[];


  ngOnInit(): void {
    this.leiloes = [
      {
        id: 1,
        nome: 'Leilão de equipamentos eletrônicos',
        localizaocao: 'Pátio Centra/Go',
        dataHora: '2023-10-15',
        lotes: [
          {
            id: 1,
            lote: 1,
            nome: 'Smartphone Samsung Galaxy S21',
            cor: 'Preto',
            descricao: 'Smartphone usado, em bom estado, com carregador original.',
            leilaoId: 1
          }
        ]
      },
      {
        id: 1,
        nome: 'Leilão de equipamentos eletrônicos',
        localizaocao: 'Pátio Centra/Go',
        dataHora: '2023-10-15',
        lotes: [
          {
            id: 1,
            lote: 1,
            nome: 'Smartphone Samsung Galaxy S21',
            cor: 'Preto',
            descricao: 'Smartphone usado, em bom estado, com carregador original.',
            leilaoId: 1
          }
        ]
      },
      {
        id: 1,
        nome: 'Leilão de equipamentos eletrônicos',
        localizaocao: 'Pátio Centra/Go',
        dataHora: '2023-10-15',
        lotes: [
          {
            id: 1,
            lote: 1,
            nome: 'Smartphone Samsung Galaxy S21',
            cor: 'Preto',
            descricao: 'Smartphone usado, em bom estado, com carregador original.',
            leilaoId: 1
          }
        ]
      },
      {
        id: 1,
        nome: 'Leilão de equipamentos eletrônicos',
        localizaocao: 'Pátio Centra/Go',
        dataHora: '2023-10-15',
        lotes: [
          {
            id: 1,
            lote: 1,
            nome: 'Smartphone Samsung Galaxy S21',
            cor: 'Preto',
            descricao: 'Smartphone usado, em bom estado, com carregador original.',
            leilaoId: 1
          }
        ]
      },

    ]
  }

}
