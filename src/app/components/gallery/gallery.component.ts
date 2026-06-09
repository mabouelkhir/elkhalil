import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  images: GalleryImage[] = [
    {
      src: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=800&auto=format&fit=crop&q=80',
      title: 'Espace d\'accueil',
      category: 'Réception',
    },
    {
      src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&auto=format&fit=crop&q=80',
      title: 'Salle d\'analyse',
      category: 'Plateau technique',
    },
    {
      src: 'https://images.unsplash.com/photo-1579165466991-467135ad3110?w=800&auto=format&fit=crop&q=80',
      title: 'Équipements de pointe',
      category: 'Technologie',
    },
    {
      src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&auto=format&fit=crop&q=80',
      title: 'Tubes d\'analyse',
      category: 'Échantillons',
    },
    {
      src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&auto=format&fit=crop&q=80',
      title: 'Microscope',
      category: 'Microbiologie',
    },
    {
      src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      title: 'Salle de prélèvement',
      category: 'Confort patient',
    },
  ];
}
