import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: `footer.component.html`,
  styles: ``
})
export class FooterComponent {

  email: string = '';

  subscribe() {
    if (this.email) {
      console.log('Subscribing with email:', this.email);
      // In a real application, you would send this email to your backend
      alert(`Merci de vous être abonné avec l'email : ${this.email}`);
      this.email = ''; // Clear the input after submission
    } else {
      alert('Veuillez entrer votre adresse email.');
    }
  }
}
