# Kivora.CI

Plateforme e-commerce ivoirienne conçue pour aider les boutiques, artisans et vendeurs locaux à présenter leurs produits.

## Aperçu

Cette première version est une base front-end statique, responsive et prête pour un déploiement sur Netlify.

## Structure du projet

```text
.
├── index.html
├── styles.css
├── script.js
├── netlify.toml
└── README.md
```

## Lancer le projet

Ouvrez `index.html` dans un navigateur ou lancez un serveur local :

```bash
python3 -m http.server 8080
```

Puis visitez `http://localhost:8080`.

## Déploiement Netlify

Connectez ce dépôt à Netlify. Aucun dossier de build n’est nécessaire :

- Commande de build : aucune
- Répertoire de publication : `.`

## Développements prévus

- Authentification vendeurs et clients
- Catalogue administrable
- Panier et paiement
- Recherche avancée
- Gestion des commandes
- API backend
