import { NgModule } from "@angular/core";
import { Toast } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
    imports:[
        Toast,
        ButtonModule,
        MenubarModule
    ], 
    exports: [
        Toast,
        ButtonModule,
        MenubarModule
    ]
})
export class PrimengMaterialModule {}