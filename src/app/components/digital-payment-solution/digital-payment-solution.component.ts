import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartLine, faChartPie, faCoins, faGraduationCap, faHandHoldingUsd, faHandshake, faPalette, faPallet, faPiggyBank, faShoppingCart, faStore, faUsers, faWallet } from '@fortawesome/free-solid-svg-icons';
import { AnimateOnScrollDirective } from "../../directives/animate-on-scroll.directive";

@Component({
  selector: 'app-digital-payment-solution',
  standalone: true,
  imports: [FontAwesomeModule,AnimateOnScrollDirective],
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
  faMultiUsers = faUsers;

  services = [
    { title: 'Dépôt',image: 'icons/depot.png', description: 'Effectuez des dépôts rapides et sécurisés en toute simplicité.', icon: this.faPiggyBank },
    { title: 'Retrait',image: 'icons/retrait.png', description: 'Retirez votre argent instantanément à tout moment.', icon: this.faHandHoldingUsd },
    { title: 'Compte marchand',image: 'icons/compte-marchand.png', description: 'Gérez vos transactions professionnelles en toute sécurité.', icon: this.faStore},
    { title: 'Gestion de porte-monnaie électronique',image: 'icons/gestion-porte-monnaie.png', description: 'Un portefeuille numérique sécurisé pour toutes vos opérations.', icon: this.faWallet },
    { title: 'Reporting',image: 'icons/reporting.png', description: 'Suivez vos transactions avec des rapports détaillés et précis.', icon: this.faChartLine },
    { title: 'Gestion multicomptes',image: 'icons/multicomptes.png', description: 'Adaptez votre interface selon vos préférences.', icon: this.faMultiUsers },
    // { title: 'Achat de produits et services',image: 'icons/.png', description: 'Payez vos achats en ligne de manière fluide et sécurisée.', icon: this.faShopingCart},
    { title: 'Tontine électronique',image: 'icons/tontine.png', description: 'Participez à des tontines numériques et gérez vos cotisations.', icon: this.faHandShake },
    { title: 'Investissement',image: 'icons/investissement.png', description: 'Boostez votre épargne avec des options d’investissement intelligentes.', icon: this.faChartPie },
    { title: 'Épargne',image: 'icons/epargne.png', description: 'Mettez de côté vos économies en toute sécurité.', icon: this.faCoins},
    { title: 'Crédit scolaire',image: 'icons/credit.png', description: 'Accédez à des crédits pour financer vos études et formations.', icon: this.faGraduation}
  ];
  
  

}
