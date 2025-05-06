import { Directive, ElementRef, HostBinding, inject, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements OnInit, OnDestroy{

  @Input() animationClass: string = 'fade-in'; //default animation class
  @Input() triggerOnce: boolean = true; // animate only once when in view
  @Input() threshold: number = 0.1; // percentage od element visible to trigger 
  @Input() delay: number = 0; // delay before adding the active class ( in ms)

  @HostBinding('class.active') isActive = false;
  // @HostBinding(`class.${this.animationClass}`) isActive = false;
  private observer: IntersectionObserver | null = null;
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);


  constructor() { }

  ngOnInit(): void {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          setTimeout(() => {
            this.isActive = true;
            if(this.triggerOnce && this.observer) {
              this.observer.unobserve(this.el.nativeElement);
            }
          },this.delay);
        }else if(!this.triggerOnce){
          this.isActive = false;
        }
      });
    },{
      threshold: this.threshold
    });
    this.observer.observe(this.el.nativeElement)
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }








//   this.observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         setTimeout(() => {
//           this.isActive = true;
//           if (this.triggerOnce && this.observer) {
//             this.observer.unobserve(this.el.nativeElement);
//           }
//         }, this.delay);
//       } else if (!this.triggerOnce) {
//         this.isActive = false; // Reset animation if not triggerOnce and out of view
//       }
//     });
//   }, {
//     threshold: this.threshold,
//   });

//   this.observer.observe(this.el.nativeElement);
// }
}
