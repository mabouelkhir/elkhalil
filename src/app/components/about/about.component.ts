import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  values = [
    {
      icon: 'precision',
      title: 'Précision',
      text: 'Des protocoles rigoureux et un contrôle qualité quotidien pour des résultats fiables.',
    },
    {
      icon: 'human',
      title: 'Humanité',
      text: "Une équipe à l'écoute, qui prend le temps de rassurer et d'expliquer chaque étape.",
    },
    {
      icon: 'speed',
      title: 'Réactivité',
      text: 'Des résultats remis dans les meilleurs délais, accessibles en ligne ou par e-mail.',
    },
    {
      icon: 'shield',
      title: 'Confidentialité',
      text: 'Vos données et résultats restent strictement protégés selon le secret médical.',
    },
  ];
}
