import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCalendarAlt, faFile, faUsers } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-process-ingineering',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './process-ingineering.component.html',
  styleUrl: './process-ingineering.component.scss'
})
export class ProcessIngineeringComponent {
  
  processingSteps = [
    {
      id: 1,
      icon: faFile,
      description: 'Identification des familles de processus'
    },
    {
      id: 2,
      icon: faCalendarAlt,
      description: 'Cartographie des processus documentaires'
    },
    {
      id: 3,
      icon: faUsers,
      description: 'Mise en place et collecte des données des processus'
    },
    {
      id: 4,
      icon: faUsers,
      description: 'Cartographie des processus metier bpmn'
    }
  ]

}
