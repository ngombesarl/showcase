import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="bg-blue-600 text-white py-8">
    <div class="container mx-auto text-center">
      <img src="logos/ngombe.jpg" alt="Ngombe SARL" class="h-10 mx-auto mb-4">
      <div>
        <p>NGOMBE SARL</p>
        <p>Nous et le plus grand nombre</p>
      </div>
      <p>&copy; 2024 Ngombe SARL. Tous droits réservés.</p>
    </div>
  </footer>
  `,
  styles: ``
})
export class FooterComponent {

}
