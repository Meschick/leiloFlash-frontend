import { ApiResponseInterface } from './../../interfaces/apiResponse.interface';
import { Component, OnInit } from '@angular/core';
import { LeilaoService } from '../../core/services/leilao/leilao.service';
import { LeilaoListInterface } from '../../interfaces/leilaoList.interface';
import { Observable } from 'rxjs';
import { LeilaoInterface } from '../../interfaces/leilao.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  leiloes!: LeilaoInterface[];

  constructor(
    private readonly _leilaoService: LeilaoService
  ) { }


  ngOnInit(): void {
    this.obterLeiloes();
  }

  obterLeiloes() {

    this._leilaoService.getAll().subscribe((response) => {
      this.leiloes = response.data;
    })

  }
}
