import { CommonModule, SlicePipe } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faArrowDown, faArrowLeft, faArrowRight, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [FontAwesomeModule,SlicePipe,CommonModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.scss'
})
export class PartnersComponent{
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;
  faArrowLeft  = faArrowLeft;
  partners = [
    { name: 'Maatic Sarl', logo: 'images/partners/maatic_sarl.jpeg' },
    { name: 'CFC', logo: 'images/partners/cfc.jpeg' },
    { name: 'Cooperative Falah', logo: 'images/partners/cooperative_falah.jpeg' },
    { name: 'Dynamique Citoyenne', logo: 'images/partners/dynamique_citoyenne.jpeg' },
    { name: 'Elemate', logo: 'images/partners/elemate.jpeg' },
    { name: 'IBN Group', logo: 'images/partners/ibn_group.jpeg' },
    { name: 'Khepri TV', logo: 'images/partners/khepri_tv.jpeg' },
    { name: 'Page Conseil', logo: 'images/partners/page_conseil.jpeg' },
    { name: 'Use Case Group', logo: 'images/partners/use_case_group.jpeg' }
  ];

  initialDisplayedCount = 6;
  displayedPartnersCount = this.initialDisplayedCount;
  showMoreCount = 6;

  isExpanded = false; // Used to control animation state

  showMore() {
    this.displayedPartnersCount += this.showMoreCount;
    this.isExpanded = true;
  }

  showLess() {
    this.displayedPartnersCount = this.initialDisplayedCount;
    this.isExpanded = false;
  }
  @ViewChild('partnersContainer', { static: false }) partnersContainer!: ElementRef;

  scrollPartners(direction: 'left' | 'right') {
    const container = this.partnersContainer.nativeElement;
    const scrollAmount = 300; // Adjust the scroll distance
    if (direction === 'right') {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  }

}