import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {faCalendarAlt, faChartBar, faCheck, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule,AnimateOnScrollDirective],
  templateUrl: './hero.component.html',
  styles: `
  .feature-tag {
    backdrop-filter: blur(20);
  background : hsla(0, 0%, 100%, 0.8);
    color: hsla(0, 0%, 35%, 1);
  }
      
  `
})
export class HeroComponent {


  faProcessus = faChartBar;
  faIng = faCheck;
  faSirh = faCalendarAlt;
  faMessage = faMailBulk;

}
