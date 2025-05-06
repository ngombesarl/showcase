import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [RouterModule,FontAwesomeModule,AnimateOnScrollDirective],
  templateUrl: './our-services.component.html',
  styles: ``
})
export class OurServicesComponent {
  services: any[] = [];
  private servicesService=inject(ServicesService);
  faArrowRight = faArrowRight;
  constructor() {}

  ngOnInit() {
    // Load all services
    this.services = this.servicesService.getAllServices();
  }
}
