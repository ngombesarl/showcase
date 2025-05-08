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

  onpousseUrl = "https://www.onpousse.com"

  features = [
    {
      id: 1 ,
      img: 'icons/personnel.svg',
      alt: 'suivi du personnel',
      title: 'Suivi du personnel'
    },
    {
      id: 2 ,
      img: 'icons/fourthArray.svg',
      alt: 'Paie',
      title: 'Gestion de la paie'
    },
    {
      id: 3 ,
      img: 'icons/doubledSquare.svg',
      alt: 'Organigrammes',
      title: 'Gestion des organigrammes'
    },
    {
      id: 4 ,
      img: 'icons/doubledSquare.svg',
      alt: 'Evaluations',
      title: 'Gestion des evaluations'
    },
    {
      id: 5 ,
      img: 'icons/doubledSquare.svg',
      alt: 'Formations',
      title: 'Gestion des formations'
    },
    {
      id: 6 ,
      img: 'icons/personnel.svg',
      alt: 'Chat',
      title: 'Discussion / chat interne'
    }
  ]

}
