import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, OnInit } from '@angular/core';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,AnimateOnScrollDirective,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isOpen = false;
  activeSection: string = 'home';
  links = [
    {id: 1, anchor: 'home',name: 'Acceuil'},
    {id: 2, anchor: 'ingenierie',name: 'Ingénierie'},
    {id: 3, anchor: 'produits',name: 'Produits'},
    {id: 4, anchor: 'services',name: 'Services'},
    {id: 5, anchor: 'partners',name: 'Partenaires'},
    {id: 6, anchor: 'about-us',name: 'A propos'},
    {id: 7, anchor: 'contact',name: 'Contact'},
  ]

  private el = inject(ElementRef);
  ngOnInit(): void {
    this.checkActiveSection();
  }

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkActiveSection();
  }


  checkActiveSection(): void {
    const scrollPosition = window.scrollY + (window.innerHeight / 3); // Adjust offset as needed
    this.links.forEach(link => {
      let section: HTMLElement | null = null;
      section = document.getElementById(link.anchor); 
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.activeSection = link.anchor;
        }
      }
    });
  }

  isLinkActive(anchor: string): boolean {
    return this.activeSection === anchor;
  }

}
