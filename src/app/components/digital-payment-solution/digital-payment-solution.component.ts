import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine, faChartPie, faCoins, faGraduationCap, faHandHoldingUsd, faHandshake, faPalette, faPallet, faPiggyBank, faShoppingCart, faStore, faWallet } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-digital-payment-solution',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './digital-payment-solution.component.html',
  styleUrl: './digital-payment-solution.component.scss'
})
export class DigitalPaymentSolutionComponent {

  // faPyggiyBank  = faPygg
  faPiggyBank = faPiggyBank;
  faHandHoldingUsd = faHandHoldingUsd;
  faStore = faStore;
  faWallet = faWallet;
  faChartLine = faChartLine;
  faPalette = faPalette;
  faShopingCart = faShoppingCart;
  faHandShake = faHandshake;
  faChartPie = faChartPie;
  faGraduation = faGraduationCap;
  faCoins = faCoins;

  services = [
    { title: 'Dépôt', description: 'Effectuez des dépôts rapides et sécurisés en toute simplicité.', icon: this.faPiggyBank },
    { title: 'Retrait', description: 'Retirez votre argent instantanément à tout moment.', icon: this.faHandHoldingUsd },
    { title: 'Compte marchand', description: 'Gérez vos transactions professionnelles en toute sécurité.', icon: this.faStore},
    { title: 'Gestion de porte-monnaie électronique', description: 'Un portefeuille numérique sécurisé pour toutes vos opérations.', icon: this.faWallet },
    { title: 'Reporting', description: 'Suivez vos transactions avec des rapports détaillés et précis.', icon: this.faChartLine },
    { title: 'Gestion multicomptes', description: 'Adaptez votre interface selon vos préférences.', icon: this.faPalette },
    { title: 'Achat de produits et services', description: 'Payez vos achats en ligne de manière fluide et sécurisée.', icon: this.faShopingCart},
    { title: 'Tontine électronique', description: 'Participez à des tontines numériques et gérez vos cotisations.', icon: this.faHandShake },
    { title: 'Investissement', description: 'Boostez votre épargne avec des options d’investissement intelligentes.', icon: this.faChartPie },
    { title: 'Épargne', description: 'Mettez de côté vos économies en toute sécurité.', icon: this.faCoins},
    { title: 'Crédit scolaire', description: 'Accédez à des crédits pour financer vos études et formations.', icon: this.faGraduation}
  ];
  
  

}
