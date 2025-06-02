import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { OurServicesComponent } from '../our-services/our-services.component';
import { PartnersComponent } from "../partners/partners.component";
import { DigitalPaymentSolutionComponent } from "../digital-payment-solution/digital-payment-solution.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ProcessIngineeringComponent } from "../process-ingineering/process-ingineering.component";
import { SirhNgombeComponent } from "../sirh-ngombe/sirh-ngombe.component";
import { FeaturesComponent } from "../features/features.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";
import { ContactComponent } from "../contact/contact.component";
import { LamainServiceComponent } from "../lamain-service/lamain-service.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    OurServicesComponent,
    HeroComponent,
    PartnersComponent,
    DigitalPaymentSolutionComponent,
    FontAwesomeModule,
    ProcessIngineeringComponent,
    SirhNgombeComponent,
    FeaturesComponent,
    AboutUsComponent,
    AnimateOnScrollDirective,
    ContactComponent,
    LamainServiceComponent
],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
