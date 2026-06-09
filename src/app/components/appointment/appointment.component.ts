import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {
  // Votre email, c'est tout. Pas de clé, pas de compte.
  private readonly EMAIL = 'mohamedabouelkhir34@gmail.com';

  form = {
    nom: '',
    telephone: '',
    email: '',
    date: '',
    heure: '',
    type: 'Au laboratoire',
    message: '',
  };

  submitting = false;
  submitted = false;
  errorMsg = '';

  steps = [
    { num: '01', title: 'Réservez', text: 'Choisissez votre créneau en quelques clics.' },
    { num: '02', title: 'Présentez-vous', text: 'À jeun si nécessaire, avec votre ordonnance.' },
    { num: '03', title: 'Recevez', text: 'Vos résultats sécurisés sous 24h en moyenne.' },
  ];

  async onSubmit(): Promise<void> {
    this.submitting = true;
    this.errorMsg = '';

    const formData = new FormData();
    formData.append('Nom complet', this.form.nom);
    formData.append('Téléphone', this.form.telephone);
    formData.append('E-mail', this.form.email);
    formData.append('Date souhaitée', this.form.date);
    formData.append('Heure', this.form.heure);
    formData.append('Type de prélèvement', this.form.type);
    formData.append('Message', this.form.message || '(aucun)');
    formData.append('_subject', `Nouveau RDV - ${this.form.nom}`);
    formData.append('_template', 'table');
    formData.append('_captcha', 'false');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${this.EMAIL}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const result = await response.json();

      if (result.success === 'true' || result.success === true) {
        this.submitted = true;
        this.submitting = false;

        setTimeout(() => {
          this.submitted = false;
          this.form = {
            nom: '', telephone: '', email: '', date: '', heure: '',
            type: 'Au laboratoire', message: '',
          };
        }, 5000);
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('FormSubmit error:', error);
      this.errorMsg = "Une erreur est survenue. Veuillez réessayer ou nous appeler au 05 22 52 62 52.";
      this.submitting = false;
    }
  }
}