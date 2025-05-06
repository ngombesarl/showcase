import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ServicesService } from '../../services/services.service';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  service: any;

  private route = inject(ActivatedRoute);
  private servicesService = inject(ServicesService);
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.service = this.servicesService.getServiceById(id);
  }

}
