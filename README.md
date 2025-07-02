# 🎨 Shadcn Button for Weweb

**Composant Button Shadcn UI professionnel** pour [Weweb.io](https://www.weweb.io/) - Structure simplifiée et optimisée.

## 🏆 **Composant Prêt à l'Emploi**

**Version finale créée avec l'outil officiel Weweb** `@weweb/create-component`

✅ **Caractéristiques :**
- **6 Variantes Shadcn** : default, destructive, outline, secondary, ghost, link
- **4 Tailles** : sm (36px), default (40px), lg (44px), icon (40×40px)
- **Support complet** : icônes gauche/droite, états disabled, événements click
- **Couleurs exactes HSL** du système Shadcn UI
- **CSS optimisé** non-scoped pour Weweb
- **Configuration organisée** en sections (Content, Style, Icons, Behavior)
- **Props bindables** pour intégration dynamique

## 🚀 **Installation & Utilisation**

### 1. **Développement Local :**
```bash
npm install
npm run serve
```
**URL de développement :** `https://localhost:8080`

### 2. **Import dans Weweb :**
1. Ouvrir l'éditeur Weweb
2. Popup **Developer** → Ajouter l'URL : `https://localhost:8080`
3. Drag & drop le composant "Shadcn Button"
4. Configurer : texte, variante, taille, icônes

### 3. **Build Production :**
```bash
npm run build
```

## 🎨 **Aperçu des Variantes**

| Variante | Description | Usage |
|----------|-------------|-------|
| **Default** | Bouton sombre primaire | Actions principales |
| **Destructive** | Bouton rouge | Actions dangereuses (supprimer) |
| **Outline** | Transparent avec bordure | Actions secondaires |
| **Secondary** | Gris clair | Alternatives |
| **Ghost** | Transparent avec hover | Actions subtiles |
| **Link** | Style lien souligné | Navigation |

## 🔧 **Configuration Disponible**

### **📝 Content**
- **Button text** (bindable) - Texte du bouton

### **🎨 Style** 
- **Variant** - 6 options avec descriptions (Default (Dark), etc.)
- **Size** - 4 tailles avec dimensions exactes

### **🎯 Icons**
- **Left Icon** (bindable) - Icône gauche via ww-icon
- **Right Icon** (bindable) - Icône droite via ww-icon

### **⚙️ Behavior**
- **Disabled** (bindable) - État désactivé conditionnel
- **HTML Type** - button, submit, reset

## 🧪 **Test Local**

Ouvrir `test-local.html` pour voir :
- ✅ Toutes les variantes avec couleurs exactes
- ✅ Toutes les tailles (36px → 44px)
- ✅ Support icônes et états
- ✅ Combinaisons avancées

## 📂 **Structure du Projet**

```
shadcn-button/
├── README.md                    # 📖 Documentation
├── package.json                 # 📦 Dépendances Weweb
├── ww-config.js                 # ⚙️ Configuration Weweb
├── src/
│   └── wwElement.vue            # 🎯 Composant Vue principal
├── test-local.html              # 🧪 Tests en local
└── .gitignore                   # 🚫 Fichiers ignorés
```

## 🔄 **Historique & Évolution**

Ce projet a évolué à travers plusieurs phases pour atteindre une version optimale :

1. **Phase 1** : Adaptation manuelle avec structure personnalisée
2. **Phase 2** : Problèmes de rendu et incompatibilités CSS
3. **Phase 3** : Découverte de l'outil officiel `@weweb/create-component`
4. **Phase 4** : Version finale avec structure officielle et optimisations
5. **Phase 5** : **Simplification structure** - Tous fichiers à la racine

## 🤝 **Contribution**

Contributions bienvenues ! Le composant suit les standards officiels Weweb et le système de design Shadcn UI.

## 📱 **Compatibilité**

- ✅ **Weweb Editor** - Import via URL de développement
- ✅ **Production** - Build optimisé
- ✅ **Responsive** - Adaptatif toutes tailles
- ✅ **Accessibilité** - Focus, disabled, ARIA
- ✅ **Dark/Light Mode** - Couleurs HSL adaptatives

---

**🎯 Prêt à utiliser dans vos projets Weweb !**

**Repository :** [SebWell/shadcn-button](https://github.com/SebWell/shadcn-button)  
**Weweb :** [weweb.io](https://www.weweb.io/)  
**Shadcn UI :** [ui.shadcn.com](https://ui.shadcn.com/)
