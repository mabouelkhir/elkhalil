import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  number: string;
  title: string;
  description: string;
  items: string[];
  iconType: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services: Service[] = [
    {
      number: '01',
      title: 'Hématologie',
      iconType: 'hema',
      description: 'Numération formule sanguine, vitesse de sédimentation, bilans complets.',
      items: ['NFS / Hémogramme', 'VS, CRP', 'Coagulation (TP, TCA)', 'Groupe sanguin'],
    },
    {
      number: '02',
      title: 'Biochimie',
      iconType: 'biochem',
      description: 'Analyses biochimiques sanguines et urinaires pour un diagnostic précis.',
      items: ['Bilan lipidique', 'Glycémie & HbA1c', 'Bilan rénal & hépatique', 'Ionogramme'],
    },
    {
      number: '03',
      title: 'Hormonologie',
      iconType: 'hormone',
      description: 'Exploration des fonctions endocriniennes — thyroïde, fertilité, grossesse.',
      items: ['TSH, T3, T4', 'Bêta-HCG', 'Œstradiol, Progestérone', 'Testostérone, Cortisol'],
    },
    {
      number: '04',
      title: 'Microbiologie',
      iconType: 'micro',
      description: 'Identification des agents infectieux, bactéries, parasites et levures.',
      items: ['ECBU', 'Coprologie', 'Prélèvements vaginaux', 'Antibiogramme'],
    },
    {
      number: '05',
      title: 'Sérologie & Immunologie',
      iconType: 'sero',
      description: 'Dépistage des maladies infectieuses et explorations immunologiques.',
      items: ['VIH, Hépatites B/C', 'TORCH', 'Marqueurs tumoraux', 'Auto-immunité'],
    },
    {
      number: '06',
      title: 'Prélèvement à domicile',
      iconType: 'home',
      description: 'Service de prélèvement à votre domicile pour patients alités ou occupés.',
      items: ['Sur Casablanca', 'Sur rendez-vous', 'Personnel diplômé', 'Matériel stérile'],
    },
  ];
}
