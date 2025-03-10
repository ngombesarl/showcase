import { AfterViewInit, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faDatabase, faFileAlt, faUserPlus, IconDefinition, 
  faUsers, // Suivi du personnel
  faMoneyBill, // Gestion de la paie
  faSitemap, // Gestion des organigrammes
  faStar, // Gestion des évaluations
  faGraduationCap, // Gestion des formations
  faCommentDots, // Discussion / Chat,
} from '@fortawesome/free-solid-svg-icons';

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

  faUsers = faUsers;
  faMoneyBill = faMoneyBill;
  faSitemap = faSitemap;
  faStar = faStar;
  faGraduationCap = faGraduationCap;
  faCommentDots = faCommentDots;
  
  


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

  commingSoonFeatures: AppFeature[] = [
    // ... fonctionnalités existantes
    {
      id: 5,
      title: 'Suivi du personnel',
      description:
        'Gérez efficacement les informations de vos employés et suivez leurs performances.',
      icon: this.faUsers,
    },
    {
      id: 6,
      title: 'Gestion de la paie',
      description:
        'Simplifiez la gestion de la paie avec des calculs précis et des rapports détaillés.',
      icon: this.faMoneyBill,
    },
    {
      id: 7,
      title: 'Gestion des organigrammes',
      description:
        'Visualisez et organisez la structure de votre entreprise avec des organigrammes personnalisables.',
      icon: this.faSitemap,
    },
    {
      id: 8,
      title: 'Gestion des évaluations',
      description:
        'Évaluez les performances de vos employés et suivez leur développement professionnel.',
      icon: this.faStar,
    },
    {
      id: 9,
      title: 'Gestion des formations',
      description:
        'Planifiez et suivez les formations de vos employés pour améliorer leurs compétences.',
      icon: this.faGraduationCap,
    },
    {
      id: 10,
      title: 'Discussion / Chat interne',
      description:
        'Facilitez la communication et la collaboration entre vos employés avec un chat interne.',
      icon: this.faCommentDots,
    },
  ];

}
