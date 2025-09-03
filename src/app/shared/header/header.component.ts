import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;


    ngOnInit(): void {
     this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
      {
        label: 'Home',
        icon: 'pi pi-home'
      },
     ]
    }
}
