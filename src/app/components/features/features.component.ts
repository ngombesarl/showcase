import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [AnimateOnScrollDirective],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent {

  features = [
    {
      id: 1 ,
      img: 'icons/personnel.png',
      alt: 'suivi du personnel',
      title: 'Suivi du personnel'
    },
    {
      id: 2 ,
      img: 'icons/personnel.png',
      alt: 'Paie',
      title: 'Gestion de la paie'
    },
    {
      id: 3 ,
      img: 'icons/personnel.png',
      alt: 'Organigrammes',
      title: 'Gestion des organigrammes'
    },
    {
      id: 4 ,
      img: 'icons/personnel.png',
      alt: 'Evaluations',
      title: 'Gestion des evaluations'
    },
    {
      id: 5 ,
      img: 'icons/personnel.png',
      alt: 'Formations',
      title: 'Gestion des formations'
    },
    {
      id: 6 ,
      img: 'icons/personnel.png',
      alt: 'Chat',
      title: 'Discussion / chat interne'
    }
  ]

}
