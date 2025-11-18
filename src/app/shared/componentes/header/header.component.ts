import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @ViewChild('userOverlay') userOverlay!: OverlayPanel;

  isLoggedIn = false;
  userEmail = '';
  userInitial = '';
  userItems: MenuItem[] = [];

  constructor(
    private authService: AuthService, private router: Router,

    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
    // Verifica se o token existe e não está expirado
    this.isLoggedIn = this.authService.isLoggeIn() && !this.authService.isTokenExpired();

    if (this.isLoggedIn) {
      const decoded = this.authService.getDecodedToken();

      const emailClaimKey = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress';
      const roleClaimKey = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role';

      this.userEmail = decoded?.[emailClaimKey] || 'Usuário';
      this.userInitial = this.userEmail.charAt(0).toUpperCase();

      this.userItems = [
        {
          label: 'Minha Conta',
          icon: 'pi pi-user',
          items: [
            {
              label: 'Arrematados',
              icon: 'pi pi-hammer',
              command: () => this.router.navigate(['/arrematados'])
            },
            {
              label: 'Sair',
              icon: 'pi pi-sign-out',
              command: () => this.logout()
            }
          ]
        }
      ];
    }
  }

  logout() {
    this.authService.userLogout();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    this.messageService.add({ severity: 'success', summary: 'Success', detail: "Você saiu da sua conta com sucesso." });

    if (this.userOverlay) this.userOverlay.hide();
  }
}
