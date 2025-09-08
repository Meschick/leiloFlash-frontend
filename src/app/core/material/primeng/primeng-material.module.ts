import { NgModule } from "@angular/core";
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@NgModule({
    imports:[
        Toast,
        ButtonModule,
        MenubarModule,
        AvatarModule,
        OverlayBadgeModule
    ], 
    exports: [
        Toast,
        ButtonModule,
        MenubarModule,
        AvatarModule,
        OverlayBadgeModule
    ]
})
export class PrimengMaterialModule {}