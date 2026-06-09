import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {
  team = [
    {
      name: 'Dr. Aminata Benali',
      role: 'Biologiste · Directrice',
      bio: 'Spécialiste en biologie clinique, plus de 20 ans d\'expérience.',
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Dr. Youssef Kabbaj',
      role: 'Microbiologiste',
      bio: 'Expert en microbiologie médicale, formé à l\'Institut Pasteur.',
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Dr. Salma Naciri',
      role: 'Hormonologie',
      bio: 'Spécialiste en endocrinologie biologique et fertilité.',
      photo: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=80',
    },
    {
      name: 'Hassan Mernissi',
      role: 'Cadre infirmier',
      bio: 'Responsable du pôle prélèvement, équipe formée à l\'accueil.',
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop&q=80',
    },
  ];
}
