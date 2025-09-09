import { NgModule } from "@angular/core";
import { CarroselAnunciosComponent } from "./componentes/carrosel-anuncios/carrosel-anuncios.component";
import { HeaderComponent } from "./componentes/header/header.component";
import { PrimengMaterialModule } from "../core/material/primeng/primeng-material.module";
import { PagesModule } from "../pages/pages.module";

@NgModule({
  declarations: [
    HeaderComponent,
    CarroselAnunciosComponent,
  ],
  imports: [
    PrimengMaterialModule,
  ],
  exports: [
    HeaderComponent,
    CarroselAnunciosComponent,
  ]
})
export class SharedModule {

}
