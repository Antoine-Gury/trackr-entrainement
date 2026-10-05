# Trackr - dépôt d'entraînement (séance 4)

Trackr est une application **fictive** de suivi de colis, en React + TypeScript (Vite).
Ce dépôt sert à l'entraînement de la séance 4 du module *Travail collaboratif & documentation technique* (Bachelor 2, Ynov Val d'Europe). Chaque étudiant en crée sa propre copie : il ne dépend d'aucun dépôt d'équipe.

## Installation

Prérequis : Git et Node.js LTS (20 ou plus).

```bash
git clone https://github.com/<votre-pseudo>/trackr-entrainement-<votre-nom>.git
cd trackr-entrainement-<votre-nom>
npm install
npm run dev
```

Résultat attendu : l'application s'ouvre sur http://localhost:5173 et affiche 6 colis.

Vérifier que le projet se construit : `npm run build` (aucune erreur).

## Ce que contient ce dépôt

| Élément | Sert à l'étape du livret |
|---|---|
| Branches `feat/date-inconnue` et `style/date-en-gras` | Étape 2 - Résoudre un conflit de merge |
| Branche `feat/surligner-recherche` | Étape 3 - Décrire et relire une Pull Request |
| `exercices/issue-floue.md` et `exercices/message-de-blocage.md` | Étape 4 - Issue claire et blocage actionnable |
| `.github/` : gabarits d'issue et de PR | Étapes 3 et 4 |
| `docs/adr/0000-gabarit-adr.md` | Rappel : gabarit d'ADR |

## Architecture

```
src/
├── App.tsx               état de la recherche, assemblage de la page
├── components/           BarreRecherche, ListeColis, CarteColis, BadgeStatut
├── data/colis.ts         6 colis de démonstration
├── utils/                recherche (normalisation de la saisie), dates
└── types.ts              Colis, Statut, EtapeSuivi
```

## Contribuer

Le workflow de contribution est décrit dans `CONTRIBUTING.md` (vous l'écrivez à l'étape 5).
