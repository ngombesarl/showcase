import { SlicePipe } from "@angular/common";
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCalendarAlt, faFile, faUsers } from "@fortawesome/free-solid-svg-icons";
import { interval, Subscription } from "rxjs";

@Component({
  selector: 'app-process-ingineering',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './process-ingineering.component.html',
  styleUrl: './process-ingineering.component.scss'
})
export class ProcessIngineeringComponent implements AfterViewInit, OnDestroy {
  
  processingSteps = [
    {
      id: 1,
      icon: faFile,
      description: 'Identification des familles de processus',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 2,
      icon: faCalendarAlt,
      description: 'Cartographie des processus documentaires',
      bgClass: 'bg-[#f48d06]'
    },
    {
      id: 3,
      icon: faUsers,
      description: 'Mise en place et collecte des données des processus',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 4,
      icon: faUsers,
      description: 'Cartographie des processus metier bpmn',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 5,
      icon: faUsers,
      description: 'Mise en place du support - Norme ITIL',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 6,
      icon: faUsers,
      description: 'Mise en place d\'une organisation orientée processus',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 7,
      icon: faUsers,
      description: 'Optimisation des processus et des activités dans les processus',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 8,
      icon: faUsers,
      description: 'Automatisation des processus',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 9,
      icon: faUsers,
      description: 'Gestion du changement orienté processus',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 10,
      icon: faUsers,
      description: 'Gestion de la communication autour de processus',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 11,
      icon: faUsers,
      description: 'Gestion de la connaissance',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 12,
      icon: faUsers,
      description: 'Cartographie des processus par couche métiers',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 13,
      icon: faUsers,
      description: 'Analyse prévisionelle des données',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 14,
      icon: faUsers,
      description: 'Gouvernance des processus métiers',
      bgClass: 'bg-[#00b2fa]'
    },
    {
      id: 15,
      icon: faUsers,
      description: 'Matrice des droits',
      bgClass: 'bg-[#00b2fa]'
    }
  ]


  @ViewChild('scrollableContainer') scrollableContainer!: ElementRef;
  private scrollIntervalSubscription!: Subscription;
  private scrollSpeed = 4; // Adjust the scrolling speed as needed

  ngAfterViewInit(): void {
    this.startAutoScroll();
    // console.log('ngAfterViewInit called', this.scrollableContainer);

  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  startAutoScroll(): void {
    this.scrollIntervalSubscription = interval(50) // Adjust the interval for speed
      .subscribe(() => {
        if (this.scrollableContainer && this.scrollableContainer.nativeElement) {
          this.scrollableContainer.nativeElement.scrollLeft += this.scrollSpeed;
          // Optional: Reset scroll position when it reaches the end
          if (this.scrollableContainer.nativeElement.scrollLeft > (this.scrollableContainer.nativeElement.scrollWidth - this.scrollableContainer.nativeElement.clientWidth)) {
            this.scrollableContainer.nativeElement.scrollLeft = 0;
          }
        }
      });
  }

  stopAutoScroll(): void {
    if (this.scrollIntervalSubscription) {
      this.scrollIntervalSubscription.unsubscribe();
    }
  }
}
