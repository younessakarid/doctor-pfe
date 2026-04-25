# Guide de Configuration et Déploiement - Doctor PFE

## 📋 Structure du Projet

```
doctor-pfe/
├── backend/              # API Express.js
│   ├── config/          # Configuration DB, Cloudinary, etc.
│   ├── controllers/      # Contrôleurs API
│   ├── middlewares/      # Authentification et upload
│   ├── models/          # Modèles MongoDB
│   ├── routes/          # Routes API
│   ├── .env.example     # Variables d'environnement (template)
│   ├── .env             # Variables d'environnement (local, jamais comitter)
│   └── server.js        # Point d'entrée
├── doctor-pfe/          # Frontend Patient (Vite + React)
│   ├── src/
│   └── .env             # Backend URL pour les patients
├── admin/               # Frontend Admin/Doctor (Vite + React)
│   ├── src/
│   └── .env             # Backend URL pour admin
└── .gitignore           # Fichiers à ignorer
```

## 🚀 Configuration Locale

### Backend (Node.js/Express)

1. **Installer les dépendances**
   ```bash
   cd backend
   npm install
   ```

2. **Configurer les variables d'environnement**
   ```bash
   cp .env.example .env
   ```
   
   Modifier `.env` avec vos valeurs réelles :
   - `MONGODB_URL` : Connexion MongoDB Atlas
   - `CLOUDINARY_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_SECRET_KEY` : Cloudinary
   - `ADMIN_EMAIL`, `ADMIN_PASSWORD` : Credentials admin par défaut
   - `JWT_SECRET` : Clé secrète pour les tokens JWT

3. **Démarrer en développement**
   ```bash
   npm run server
   ```
   
   Server écoute sur `http://localhost:4000`

### Frontend Patient (doctor-pfe)

1. **Installer les dépendances**
   ```bash
   cd doctor-pfe
   npm install
   ```

2. **Configurer l'URL backend**
   ```bash
   # .env
   VITE_BACKEND_URL = http://localhost:4000
   ```

3. **Développement**
   ```bash
   npm run dev
   ```
   
   Accessible sur `http://localhost:5173`

### Frontend Admin/Doctor (admin)

1. **Installer les dépendances**
   ```bash
   cd admin
   npm install
   ```

2. **Configurer l'URL backend**
   ```bash
   # .env
   VITE_CURRENCY = '$'
   VITE_BACKEND_URL = http://localhost:4000
   ```

3. **Développement**
   ```bash
   npm run dev
   ```
   
   Accessible sur `http://localhost:5174`

## 🌐 Déploiement en Production

### Backend - Railway

1. Créer une nouvelle application sur [Railway.app](https://railway.app)
2. Connecter le repository GitHub
3. Configurer les variables d'environnement dans Railway :
   - Copier les valeurs de `backend/.env`
4. Railway exécutera automatiquement :
   - Build : `cd backend && npm install`
   - Run : `cd backend && npm start` (via Procfile)

**Variables d'environnement à configurer sur Railway :**
```
MONGODB_URL=mongodb+srv://...
CLOUDINARY_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_SECRET_KEY=...
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password
JWT_SECRET=your_jwt_secret
```

### Frontend - Vercel

#### doctor-pfe (Patient App)
1. Créer une nouvelle application sur [Vercel](https://vercel.com)
2. Connecter le repository GitHub (select `doctor-pfe` folder)
3. Configurer les variables d'environnement :
   ```
   VITE_BACKEND_URL=https://your-railway-backend-url.railway.app
   ```

#### admin (Admin/Doctor App)
1. Même processus que doctor-pfe
2. Sélectionner le dossier `admin`
3. Variables d'environnement :
   ```
   VITE_CURRENCY=$
   VITE_BACKEND_URL=https://your-railway-backend-url.railway.app
   ```

## ⚠️ Points Importants

### Sécurité

- **Ne jamais committer `.env`** - Le `.gitignore` l'empêche automatiquement
- Utiliser `.env.example` comme template
- Régénérer `JWT_SECRET` en production (ne pas utiliser la valeur locale)
- Les credentials admin doivent être changés après le premier déploiement

### Variables d'Environnement

```bash
# Backend (.env)
MONGODB_URL='mongodb+srv://user:pass@cluster.mongodb.net'
CLOUDINARY_NAME='your_cloud_name'
CLOUDINARY_API_KEY='your_api_key'
CLOUDINARY_SECRET_KEY='your_secret_key'
ADMIN_EMAIL='admin@example.com'
ADMIN_PASSWORD='secure_password'
JWT_SECRET='random_secret_key'

# Frontend doctor-pfe (.env)
VITE_BACKEND_URL='https://api.yourdomain.com'

# Frontend admin (.env)
VITE_CURRENCY='$'
VITE_BACKEND_URL='https://api.yourdomain.com'
```

### API Endpoints

**Base URL (Production)** : `https://your-railway-backend-url.railway.app`

**Routes principales :**
- `POST /api/user/register` - Inscription patient
- `POST /api/user/login` - Connexion patient
- `POST /api/admin/login` - Connexion admin
- `POST /api/doctor/login` - Connexion médecin
- `GET /api/admin/all-doctors` - Liste des médecins (admin)
- `POST /api/admin/add-doctor` - Ajouter médecin (admin)

## 🔧 Troubleshooting

### Build failed sur Vercel
- Vérifier que les chemins des assets ont la bonne casse (minuscules)
- S'assurer que `VITE_BACKEND_URL` est configurée
- Vérifier que toutes les dépendances sont dans `package.json`

### Build failed sur Railway
- Vérifier que `Procfile` et `railway.json` sont à la racine
- S'assurer que `backend/server.js` existe et est le point d'entrée
- Vérifier les variables d'environnement (particulièrement `MONGODB_URL`)

### Problèmes de CORS
- S'assurer que le backend autorise les origines frontend
- Vérifier l'URL dans `VITE_BACKEND_URL`

## 📝 Commandes Utiles

```bash
# Backend
npm run server        # Développement avec nodemon
npm start            # Production
npm run dev          # Développement simple

# Frontend
npm run dev          # Développement (Vite)
npm run build        # Build production
npm run preview      # Prévisualiser le build
npm run lint         # ESLint check
```

## ✅ Checklist Pré-Déploiement

- [ ] Fichier `.env` configuré avec les bonnes valeurs
- [ ] `.env` n'est pas dans git (inclus dans `.gitignore`)
- [ ] `VITE_BACKEND_URL` pointe vers la bonne API
- [ ] Variables d'environnement configurées sur Railway et Vercel
- [ ] Tests locaux réussis (`npm run build` sans erreurs)
- [ ] Assets importés avec la bonne casse
- [ ] Pas de `console.log` de débogage en production
- [ ] JWT_SECRET changé en production

## 📞 Support

Pour les problèmes :
1. Vérifier les logs (Railway Dashboard, Vercel Dashboard)
2. Vérifier la configuration des variables d'environnement
3. S'assurer que les services externes (MongoDB, Cloudinary) sont accessibles
