import { CommonModule } from "@angular/common";
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";

@Component({
  selector: 'app-lamain-service',
  standalone: true,
  imports: [CommonModule,AnimateOnScrollDirective],
  templateUrl: './lamain-service.component.html',
  styleUrl: './lamain-service.component.scss'
})
export class LamainServiceComponent {
  // services = [
  //   { id: 1, name: 'Cuisinière et four' },
  //   { id: 2, name: 'Climatisation domestique et industrielle' },
  //   { id: 3, name: 'Maintenance appareil électronique' },
  //   { id: 4, name: 'Plomberie et installation sanitaire' },
  //   { id: 5, name: 'Maintenance appareils biomédicaux' },
  // ];

  services = [
    { id: 1, name: 'Cuisinière et four', icon: 'appliance' }, // You'd map these to actual SVG icons or components
    { id: 2, name: 'Climatisation domestique et industrielle', icon: 'ac' },
    { id: 3, name: 'Maintenance appareil électronique', icon: 'electronics' },
    { id: 4, name: 'Plomberie et installation sanitaire', icon: 'plumbing' },
    { id: 5, name: 'Maintenance appareils biomédicaux', icon: 'biomedical' },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
