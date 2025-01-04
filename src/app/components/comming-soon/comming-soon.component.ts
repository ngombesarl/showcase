import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBriefcase, faDatabase, faFileAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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

}
