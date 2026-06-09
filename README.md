# Laboratoire EL Khalil — Site web officiel (v2)

Site web professionnel pour le Laboratoire d'analyses médicales **EL Khalil**, Casablanca.
Conçu en **Angular 17** (standalone components), entièrement en **français**.

---

## 🎨 Nouvelle palette médicale

| Couleur | Hex | Usage |
|---|---|---|
| **Bleu marine profond** | `#0a3d62` | Titres, autorité médicale |
| **Bleu primaire** | `#1e6091` | Couleur dominante, boutons |
| **Bleu clinique** | `#3282b8` | Variations |
| **Bleu pâle** | `#e8f4fa` | Fonds doux |
| **Cyan accent** | `#0fb9b1` | Touches modernes, surlignage |
| **Blanc pur** | `#ffffff` | Hygiène, clarté |
| **Vert sauge** | `#87a878` | Petites touches (icônes) |
| **Terre douce** | `#a89078` | Petites touches (icônes) |

**Polices :**
- **Plus Jakarta Sans** (titres) — moderne, professionnelle
- **Inter** (corps de texte) — référence des interfaces médicales

---

## 📋 Prérequis

- **Node.js** ≥ **18.13** ([télécharger](https://nodejs.org/))
- **npm** (livré avec Node.js)

Vérifiez :
```bash
node --version
npm --version
```

---

## 🚀 Installation et lancement

### Si c'est votre première installation

```bash
cd el-khalil
npm install
npm start
```

### Si vous mettez à jour la v1 vers la v2

1. Supprimez l'ancien dossier `src/`
2. Remplacez `package.json` et `angular.json` par les nouveaux
3. Copiez le nouveau dossier `src/`
4. Relancez :
```bash
rmdir /s /q node_modules
del package-lock.json
npm install
npm start
```

Le site s'ouvrira sur **http://localhost:4200/**

### Compiler pour la production

```bash
npm run build
```

Fichiers générés dans `dist/el-khalil/` — déployables sur tout hébergement statique (Netlify, Vercel, OVH, Apache/Nginx).

---

## 📁 Structure du projet

```
el-khalil/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/         → Navigation
│   │   │   ├── hero/           → Section d'accueil
│   │   │   ├── about/          → À propos (avec photos)
│   │   │   ├── services/       → 6 catégories d'analyses
│   │   │   ├── gallery/        → 🆕 Galerie photos du labo
│   │   │   ├── team/           → Équipe (avec photos)
│   │   │   ├── appointment/    → Formulaire RDV
│   │   │   ├── contact/        → Coordonnées + carte
│   │   │   └── footer/         → Pied de page
│   │   └── app.component.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css              → Variables CSS globales
├── angular.json
├── package.json
└── README.md
```

---

## 📸 Photos du laboratoire

Les photos actuelles proviennent d'**Unsplash** (libres de droits, haute qualité).
Pour les remplacer par les vraies photos du laboratoire :

### Option 1 : Photos en local

1. Placez vos photos dans le dossier `public/` (créez-le s'il n'existe pas)
   Exemple : `public/lab-1.jpg`, `public/equipe-aminata.jpg`
2. Dans les fichiers `.ts`, remplacez les URLs Unsplash par `/lab-1.jpg`, etc.

**Fichiers à éditer :**
- `src/app/components/gallery/gallery.component.ts` (galerie principale)
- `src/app/components/team/team.component.ts` (photos d'équipe)
- `src/app/components/about/about.component.html` (collage About)
- `src/app/components/hero/hero.component.html` (image hero)
- `src/app/components/appointment/appointment.component.html` (background)

### Option 2 : Garder les URLs en ligne

Remplacez simplement les URLs Unsplash par d'autres URLs d'images sur le web.

---

## ✏️ Personnalisation rapide

### Modifier les couleurs
Toutes définies en variables CSS dans `src/styles.css` (bloc `:root`).

### Modifier les coordonnées
- `src/app/components/contact/contact.component.html`
- `src/app/components/footer/footer.component.html`
- `src/app/components/header/header.component.html`

### Modifier l'équipe
`src/app/components/team/team.component.ts` → tableau `team`

### Modifier les services
`src/app/components/services/services.component.ts` → tableau `services`

### Modifier les photos de la galerie
`src/app/components/gallery/gallery.component.ts` → tableau `images`

---

## 🌐 Données du laboratoire

| Information | Valeur |
|---|---|
| **Adresse** | 244 Angle boulevard El Khalil et, Bd Taza, Casablanca |
| **Téléphone** | 05 22 52 62 52 |
| **Lun–Ven** | 07:30 – 18:30 |
| **Samedi** | 08:00 – 13:00 |
| **Dimanche** | Fermé |

---

## ✅ Sections du site

1. **Hero** — Image principale + statistiques
2. **À propos** — Collage de photos + 4 valeurs
3. **Services** — 6 catégories (Hématologie, Biochimie, Hormonologie, Microbiologie, Sérologie, Domicile)
4. **Galerie** — 6 photos du laboratoire (style masonry)
5. **Équipe** — 4 membres avec photos
6. **Rendez-vous** — Formulaire interactif
7. **Contact** — Carte Google Maps + horaires
8. **Footer** — Liens, contact, horaires

---

## 🛠️ Brancher le formulaire à un vrai backend

Le formulaire dans `appointment.component.ts` simule l'envoi.
Pour le rendre fonctionnel :

- **EmailJS** (envoi par e-mail sans backend) — le plus simple
- **Formspree** (formulaire vers e-mail)
- API custom Node/PHP avec `HttpClient`

---

Bon développement ! 🩺
