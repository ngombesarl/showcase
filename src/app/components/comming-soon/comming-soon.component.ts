import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faDatabase, faFileAlt, faUserPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';


interface AppFeature {
  id: number,
  title: string,
  description: string,
  icon: IconDefinition
}
@Component({
  selector: 'app-comming-soon',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './comming-soon.component.html',
  styleUrl: './comming-soon.component.scss'
})
export class CommingSoonComponent {
  faDatabase = faDatabase;
  faUserPlus = faUserPlus;
  faBriefCase = faBriefcase;
  faFileAlt = faFileAlt;


  features: AppFeature[] = [
    {
      id: 1,
      title: 'Talent pool',
      description : 'Accédez à une base de données dynamique et fiable pour mettre en relation les bons profils avec les bonnes opportunités.',
      icon: this.faDatabase
    },
    {
      id: 2,
      title: 'Employment opportunities',
      description : 'Trouvez des opportunités d’emploi adaptées à vos compétences grâce à notre plateforme dédiée.',
      icon: this.faBriefCase
    },
    {
      id: 3,
      title: 'Integration',
      description : 'Optimisez l’intégration de vos collaborateurs avec des processus fluides et bien structurés.',
      icon: this.faUserPlus
    },
    {
      id: 4,
      title: 'CV Maker',
      description : 'Créez et personnalisez des CV professionnels avec notre outil en ligne simple et rapide.',
      icon: this.faFileAlt
    }
  ]

}
