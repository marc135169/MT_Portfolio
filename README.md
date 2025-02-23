# MT_Portfolio

Bienvenue dans le code source de **MT_Portfolio**, le portfolio personnel de Marc Tetart. Ce projet est conçu pour présenter mes compétences, mes projets et mon parcours professionnel de manière interactive et moderne.

## Table des Matières

- [Aperçu](#aperçu)
- [Technologies Utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Fonctionnalités](#fonctionnalités)
- [Scripts Disponibles](#scripts-disponibles)
- [Structure du Projet](#structure-du-projet)

## Aperçu

**MT_Portfolio** est une application web qui sert de vitrine pour mes compétences en développement web et jeux vidéo. Elle est conçue pour être rapide, réactive et facile à utiliser, offrant une expérience utilisateur fluide et engageante (je l'espère).

## Technologies Utilisées

- **React** : Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques.
- **TypeScript** : Superset de JavaScript qui ajoute des types statiques pour une meilleure maintenabilité du code.
- **Vite** : Outil de build rapide pour les projets modernes, optimisant le temps de développement.
- **React Router** : Gestion des routes pour une navigation fluide entre les différentes sections du portfolio.
- **Framer Motion** : Bibliothèque pour des animations fluides et interactives.
- **Tailwind CSS** : Framework CSS utilitaire pour un design rapide et réactif.
- **ESLint** : Outil de linting pour maintenir un code propre et cohérent.
- **Animate.css** : Pour des animations CSS simples et efficaces.

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/marc135169/MT_Portfolio
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd MT_Portfolio
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Démarrez le serveur de développement :

   ```bash
   npm run dev
   ```

5. Ouvrez votre navigateur et accédez à `http://localhost:3000`.

## Fonctionnalités

- **Présentation Personnelle** : Section dédiée à mon parcours et mes compétences.
- **Projets** : Galerie de projets avec détails et technologies utilisées.
- **CV Téléchargeable** : Accès à mon CV au format PDF.
- **Formulaire de Contact** : Modal de contact intégré pour faciliter la communication.
- **Animations et Effets Visuels** : Utilisation de Framer Motion enrichir et d'animation pour enrichir l'expérience utilisateur.
- **Responsive Design** : Adaptation à toutes les tailles d'écran grâce à Tailwind CSS.

## Scripts Disponibles

- `npm run dev` : Démarre le serveur de développement.
- `npm run build` : Construit l'application pour la production.
- `npm run lint` : Exécute ESLint pour vérifier le code.

## Structure du Projet

```
MT_Portfolio/
├── public/
│   └── img/                # Images publiques accessibles
├── src/
│   ├── components/         # Composants React
│   ├── pages/              # Pages de l'application
│   ├── data/               # Données statiques ou JSON
│   ├── interfaces/         # Interfaces TypeScript
│   ├── fonts/              # Fichiers de polices
│   ├── styles/             # Fichiers CSS ou SCSS
│   ├── utils/              # Fonctions utilitaires
│   ├── App.tsx             # Composant principal de l'application
│   └── main.tsx            # Point d'entrée de l'application
├── package.json            # Fichier de configuration npm
└── vite.config.ts          # Configuration de Vite
```
