import { NgModule } from "@angular/core";
import { CarroselAnunciosComponent } from "./componentes/carrosel-anuncios/carrosel-anuncios.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { PrimengMaterialModule } from "../core/primeng-material/primeng-material.module";
import { PagesModule } from "../pages/pages.module";
import { ListLeilaoDestaqueComponent } from './componentes/list-leilao-destaque/list-leilao-destaque.component';
import { AppRoutingModule } from "../app-routing.module";
import { LoadingComponent } from './componentes/loading/loading.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CarroselAnunciosComponent,
    ListLeilaoDestaqueComponent,
    LoadingComponent,
  ],
  imports: [
    PrimengMaterialModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    CarroselAnunciosComponent,
    ListLeilaoDestaqueComponent,
    LoadingComponent,
  ]
})
export class SharedModule {

}
