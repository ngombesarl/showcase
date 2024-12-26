import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faBuilding, faGlobe } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: 'contact.component.html',
  styles: ``
})
export class ContactComponent {
  faLocation = faMapMarkerAlt;
  faEmail = faEnvelope;
  faPhone = faPhone;
  faBuilding = faBuilding;
  faGlobe = faGlobe;

}
