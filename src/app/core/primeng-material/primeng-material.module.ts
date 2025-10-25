import { NgModule } from "@angular/core";
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Carousel } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { CheckboxModule } from 'primeng/checkbox';
import { IconField, IconFieldModule } from 'primeng/iconfield';
import { InputIcon, InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  imports: [
    Toast,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    OverlayBadgeModule,
    Carousel,
    Tag,
    GalleriaModule,
    IconField,
    IconFieldModule,
    CheckboxModule,
    InputIcon,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    SelectButtonModule

  ],
  exports: [
    Toast,
    ButtonModule,
    MenubarModule,
    AvatarModule,
    OverlayBadgeModule,
    Carousel,
    Tag,
    GalleriaModule,
    IconField,
    IconFieldModule,
    CheckboxModule,
    InputIcon,
    InputIconModule,
    InputTextModule,
    PasswordModule,
    SelectButtonModule



  ]
})
export class PrimengMaterialModule { }
