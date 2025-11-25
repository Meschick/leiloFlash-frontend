import { inject, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { Noir } from '../styles';
import { ConfirmationService, MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { PrimengMaterialModule } from './core/primeng-material/primeng-material.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Toast } from 'primeng/toast';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';
import { LoadingService } from './core/services/loading/loading.service';
import { PipeModule } from './core/pipes/pipe-module.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    SharedModule,
    PipeModule,
    CommonModule,
    ReactiveFormsModule,
    Toast,
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        LoadingInterceptor
      ])
    ),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: Noir,
        options: {
          darkModeSelector: '.my-app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng'
          }
        }
      }
    }),
    provideAnimations(),
    MessageService,
    ConfirmationService

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

