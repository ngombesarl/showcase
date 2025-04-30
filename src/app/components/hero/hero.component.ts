import { Component } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faCalendar, faMailBulk } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './hero.component.html',
  // template: `
  //   <section class="relative h-screen flex items-center justify-center bg-cover bg-center" style="background-image: url('images/hero-4.jpg');">
  //   <div class="glass py-10 md:p-10 min-h-[50%] flex flex-col items-center text-center rounded-lg text-white">
  //     <h2 class="text-2xl md:text-5xl font-bold mb-4">Des Solutions Complètes pour Tous Vos Besoins</h2>
  //     <p class="text-lg mb-6">Avec Ngombe SARL, trouvez des solutions adaptées à tous vos secteurs d’activité.</p>
  //     <a href="/#services" class="bg-primary py-3 px-6 rounded text-white hover:bg-blue-700">Explorez Nos Services</a>
  //   </div>
  // </section>
  // `,
  styles: `
  .feature-tag {
    backdrop-filter: blur(20);
    background : hsla(0, 0%, 100%, 0.8);
    color: hsla(0, 0%, 35%, 1);
  }
      
  `
})
export class HeroComponent {


  faProcessus = faBars;
  faIng = faCalendar;
  faSirh = faCalendar;
  faMessage = faMailBulk;

}
