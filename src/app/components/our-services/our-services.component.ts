import { Component, inject } from '@angular/core';
import { ServicesService } from '../../services/services.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule,RouterModule,FontAwesomeModule],
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
