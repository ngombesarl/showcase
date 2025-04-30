import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { CommingSoonComponent } from "../comming-soon/comming-soon.component";
import { PartnersComponent } from "../partners/partners.component";
import { DigitalPaymentSolutionComponent } from "../digital-payment-solution/digital-payment-solution.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faCalendar, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { ProcessIngineeringComponent } from "../process-ingineering/process-ingineering.component";
import { SirhNgombeComponent } from "../sirh-ngombe/sirh-ngombe.component";
import { FeaturesComponent } from "../features/features.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    OurServicesComponent,
    ContactComponent,
    HomeComponent,
    CommingSoonComponent,
    HeroComponent,
    PartnersComponent,
    DigitalPaymentSolutionComponent,
    FontAwesomeModule,
    ProcessIngineeringComponent,
    SirhNgombeComponent,
    FeaturesComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
