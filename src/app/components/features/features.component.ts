import { Component, OnInit } from '@angular/core';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBook, faChartBar, faComments, faFile, faSitemap, faUsers } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [AnimateOnScrollDirective,CommonModule,FontAwesomeModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss'
})
export class FeaturesComponent implements OnInit{

  onpousseUrl = "https://www.onpousse.com"
  
  ngOnInit() {
      // alert([1,6].includes(4))
  }

  features = [
    {
      id: 1 ,
      img: 'icons/personnel.png',
      alt: 'suivi du personnel',
      title: 'Suivi du personnel',
      icon: faUsers
    },
    {
      id: 2 ,
      img: 'icons/fourthArray.png',
      alt: 'Paie',
      title: 'Gestion de la paie',
      icon: faFile
    },
    {
      id: 3 ,
      img: 'icons/doubledSquare.png',
      alt: 'Organigrammes',
      title: 'Gestion des organigrammes',
      icon: faSitemap
    },
    {
      id: 4 ,
      img: 'icons/doubledSquare.png',
      alt: 'Evaluations',
      title: 'Gestion des evaluations',
      icon: faChartBar
    },
    {
      id: 5 ,
      img: 'icons/doubledSquare.png',
      alt: 'Formations',
      title: 'Gestion des formations',
      icon: faBook
    },
    {
      id: 6 ,
      img: 'icons/personnel.png',
      alt: 'Chat',
      title: 'Discussion / chat interne',
      icon: faComments
    }
  ]
  isEven = (id: number) => {
      return id%2 ==0 ;
  }

}
