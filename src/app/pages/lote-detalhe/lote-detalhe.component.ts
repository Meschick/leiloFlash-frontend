import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lote-detalhe',
  templateUrl: './lote-detalhe.component.html',
  styleUrls: ['./lote-detalhe.component.scss']
})
export class LoteDetalheComponent implements OnInit {

  responsiveOptions!: any[]
  images!: any[];
  displayBasic: boolean = false;

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '991px',
        numVisible: 4
      },
      {
        breakpoint: '767px',
        numVisible: 3
      },
      {
        breakpoint: '575px',
        numVisible: 1
      }
    ];

    this.images = [
      {
        // Foto aleatória, tamanho 640x480
        itemImageSrc: 'https://picsum.photos/id/1018/640/480',
        thumbnailImageSrc: 'https://picsum.photos/id/1018/100/75',
        alt: 'Imagem 1 - Frente do Fiat Cronos'
      },
      {
        // Foto aleatória diferente
        itemImageSrc: 'https://picsum.photos/id/1015/640/480',
        thumbnailImageSrc: 'https://picsum.photos/id/1015/100/75',
        alt: 'Imagem 2 - Interior do Fiat Cronos'
      },
      {
        // Caixa colorida de teste (tamanho 640x480)
        itemImageSrc: 'https://via.placeholder.com/640x480/007bff/ffffff?text=LATERAL+DO+VEÍCULO',
        thumbnailImageSrc: 'https://via.placeholder.com/100x75/007bff/ffffff?text=LAT',
        alt: 'Imagem 3 - Lateral do Cronos'
      },
      {
        // Outra foto aleatória
        itemImageSrc: 'https://picsum.photos/id/1019/640/480',
        thumbnailImageSrc: 'https://picsum.photos/id/1019/100/75',
        alt: 'Imagem 4 - Pneu e Roda'
      },
      {
        // Imagem 5
        itemImageSrc: 'https://picsum.photos/id/1020/640/480',
        thumbnailImageSrc: 'https://picsum.photos/id/1020/100/75',
        alt: 'Imagem 5 - Detalhe do Motor'
      }
    ];

  }


}
