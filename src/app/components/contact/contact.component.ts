import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faBuilding, faGlobe } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule,FormsModule],
  templateUrl: 'contact.component.html',
  styles: ``
})
export class ContactComponent {
  faLocation = faMapMarkerAlt;
  faEmail = faEnvelope;
  faPhone = faPhone;
  faBuilding = faBuilding;
  faGlobe = faGlobe;


  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Handle form submission logic here (e.g., send data to a service)
    console.log('Form submitted:', this.formData);
  }

}
