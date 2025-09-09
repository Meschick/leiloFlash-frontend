import { NgModule } from "@angular/core";
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';


@NgModule({
  imports: [
    Toast,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    OverlayBadgeModule,
    Carousel,
    Tag,
    GalleriaModule
  ],
  exports: [
    Toast,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    OverlayBadgeModule,
    Carousel,
    Tag,
    GalleriaModule
  ]
})
export class PrimengMaterialModule { }
