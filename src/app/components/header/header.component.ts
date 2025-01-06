import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  links = [
    {anchor: 'home',name: 'Acceuil'},
    {anchor: 'ingenierie',name: 'Ingénierie'},
    {anchor: 'produits',name: 'Produits'},
    {anchor: 'services',name: 'Services'},
    {anchor: 'partners',name: 'Partenaires'},
    {anchor: 'about-us',name: 'A propos'},
    {anchor: 'contact',name: 'Contact'},
  ]
}
