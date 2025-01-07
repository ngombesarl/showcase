import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  activities = [
    {name: `Identification des familles de processus : processus coeur, processus support, processus stratégique`},
    {name: `Cartographie des processus metiers en bpmn`},
    {name: `Cartographie des processus documentaires`},
    {name: `Cartographie des processus par couche métiers`},
    {name: `Mise en place de la collecte des données des processus`},
    {name: `Analyse prévisionelle des données`},
    {name: `Gouvernance des processus métiers`},
    {name: `Matrice des droits`},
    {name: `Mise en place du support - Norme ITIL`},
    {name: `Mise en place d'une organisation orientée processus`},
    {name: `Optimisation des processus et des activités dans les processus`},
    {name: `Automatisation des processus`},
    {name: `Gestion du changement orienté processus`},
    {name: `Gestion de la communication autour de processus `},
    {name: `Gestion de la connaissance`},
  ]

}
