# 🎨 Shadcn Button for Weweb

Ce projet contient plusieurs versions d'un composant **Shadcn Button** adapté pour [Weweb.io](https://www.weweb.io/).

## 🏆 **Version Recommandée : Structure Officielle Weweb**

### 📁 `shadcn-button-element/` ⭐
**Version créée avec l'outil officiel Weweb** `@weweb/create-component`

- ✅ **Structure 100% conforme** aux standards Weweb
- ✅ **6 Variantes Shadcn** : default, destructive, outline, secondary, ghost, link
- ✅ **4 Tailles** : sm (36px), default (40px), lg (44px), icon (40x40px)
- ✅ **Support complet** : icônes, états disabled, événements click
- ✅ **Couleurs exactes HSL** du système Shadcn UI
- ✅ **SCSS scoped** selon recommandations officielles
- ✅ **Props simplifiées** : juste `content` (pas de `wwEditorState`)

#### 🚀 Utilisation :
```bash
cd shadcn-button-element
npm install
npm run serve --port=3001
```
**URL de développement :** `https://localhost:8080`

---

## 📂 **Autres Versions (Historique)**

### 📁 `src/` & `ww-config.js`
Version initiale avec structure personnalisée

### 📁 `shadcn-button-official/`
Copie de sauvegarde

### 📁 Templates
- `template-wwElement.vue` - Template Vue propre
- `template-ww-config.js` - Configuration de base

---

## 🎯 **Integration dans Weweb**

1. **Lancer le serveur de développement :**
   ```bash
   cd shadcn-button-element
   npm run serve
   ```

2. **Dans l'éditeur Weweb :**
   - Ouvrir le popup **Developer**
   - Ajouter l'URL : `https://localhost:8080`
   - Le composant "Shadcn Button" apparaîtra avec toutes ses options

3. **Pour la production :**
   ```bash
   npm run build --name=shadcn-button
   ```

## 🎨 **Aperçu des Variantes**

- **Default** : Bouton principal sombre avec texte blanc
- **Destructive** : Bouton rouge pour actions dangereuses  
- **Outline** : Bouton transparent avec bordure
- **Secondary** : Bouton gris clair pour actions secondaires
- **Ghost** : Bouton transparent avec effet hover
- **Link** : Bouton style lien souligné

## 🔧 **Configuration Disponible**

- **Texte du bouton** (bindable)
- **Variante** (6 options)
- **Taille** (4 options)
- **État désactivé** (on/off)
- **Type HTML** (button/submit/reset)
- **Icône gauche** (ww-icon)
- **Icône droite** (ww-icon)

## 📝 **Historique du Projet**

Ce projet est le résultat d'une évolution pour créer un composant Shadcn Button parfaitement adapté à Weweb :

1. **Phase 1** : Adaptation manuelle avec structure personnalisée
2. **Phase 2** : Découverte de problèmes de rendu dans Weweb
3. **Phase 3** : Découverte de l'outil officiel `@weweb/create-component`
4. **Phase 4** : **Création de la version officielle** (recommandée)

## 🤝 **Contribution**

Contributions bienvenues ! La version `shadcn-button-element/` suit les standards officiels Weweb et est la base recommandée pour les améliorations.

---

**Repository :** [SebWell/shadcn-button](https://github.com/SebWell/shadcn-button)  
**Weweb :** [weweb.io](https://www.weweb.io/)  
**Shadcn UI :** [ui.shadcn.com](https://ui.shadcn.com/)
