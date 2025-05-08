import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,AnimateOnScrollDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  links = [
    {id: 1, anchor: 'home',name: 'Acceuil'},
    {id: 2, anchor: 'ingenierie',name: 'Ingénierie'},
    {id: 3, anchor: 'produits',name: 'Produits'},
    {id: 4, anchor: 'services',name: 'Services'},
    {id: 5, anchor: 'partners',name: 'Partenaires'},
    {id: 6, anchor: 'about-us',name: 'A propos'},
    {id: 7, anchor: 'contact',name: 'Contact'},
  ]
}
