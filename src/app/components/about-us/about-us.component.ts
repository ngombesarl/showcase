import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone, faBuilding, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { ContactComponent } from "../contact/contact.component";


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, ContactComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  aboutUs = [
    {
      id: "01",
      label: "Notre mission",
      description: "Offrir des solutions innovantes et adaptées pour optimiser les processus métiers de nos clients."
    },
    {
      id: "02",
      label: "Notre mission",
      description: "Devenir le leader en ingénierie des processus métiers au service de la performance organisationnelle."
    },
    {
      id: "03",
      label: "Nos Valeurs",
      description: "Passion de la performance et engagement à proposer des solutions innovantes et responsables."
    },

  ];

  formData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit() {
    // Handle form submission logic here (e.g., send data to a service)
    console.log('Form submitted:', this.formData);
  }


    faLocation = faMapMarkerAlt;
    faEmail = faEnvelope;
    faPhone = faPhone;
    faBuilding = faBuilding;
    faGlobe = faGlobe;

}
