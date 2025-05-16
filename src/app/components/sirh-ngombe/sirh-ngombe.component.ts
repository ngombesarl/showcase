import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";

@Component({
  selector: 'app-sirh-ngombe',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './sirh-ngombe.component.html',
  styleUrl: './sirh-ngombe.component.scss'
})
export class SirhNgombeComponent {
  features = [
    {
      id: 1,
      title: "TALENT TOOLS",
      description: "Accédez à notre base de données dynamique pour booster la mobilité interne et bien positionner les bons profils aux bonnes opportunités.",
      image: "images/talent-tools.jpg",
      alt: "Talent Tools"
    },
    {
      id: 2,
      title: "EMPLOYMENT OPPORTUNITY",
      description: "Accédez à notre base de données dynamique pour booster la mobilité interne et bien positionner les bons profils aux bonnes opportunités.",
      image: "images/employment-opportunity.jpg",
      alt: "Employment Opportunity"
    },
    {
      id: 3,
      title: "INTÉGRATION",
      description: "Optimisez l'intégration de vos collaborateurs grâce à des processus fluides et efficaces.",
      image: "images/hands-together2.jpg",
      alt: "Integration"
    },
    {
      id: 4,
      title: "CV MARKER",
      description: "Créez et personnalisez votre CV rapidement grâce à notre outil en ligne simple et rapide.",
      image: "images/cv-maker.jpg",
      alt: "CV Marker"
    }
  ]

}
