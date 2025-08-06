# CLAUDE.md

Ce fichier fournit des directives à Claude Code (claude.ai/code) pour travailler avec le code de ce repository.

## Vue d'ensemble du Projet

Ce composant WeWeb implémente un Button Shadcn UI pour la plateforme WeWeb. Ce composant fait partie d'un écosystème plus large de **48 composants Shadcn UI** développés pour WeWeb, chaque composant ayant son propre repository dédié sous https://github.com/SebWell.

Le projet fournit un composant button complet avec plusieurs variantes, tailles et états qui s'intègre avec l'éditeur et l'environnement d'exécution WeWeb.

## 🏆 ARCHITECTURE RÉVOLUTIONNAIRE - LA RECETTE QUI FONCTIONNE

**Après des dizaines de tentatives, nous avons trouvé LA solution pour contourner les styles inline écrasants de WeWeb** :

### Structure Template OBLIGATOIRE
```vue
<template>
    <div class="button-container" :style="colorVariables">  <!-- WeWeb écrase ce conteneur + variables couleurs -->
        <button 
            class="shadcn-button"
            :class="[content.variant || 'default', content.size || 'default']"
            type="button"
        >
            <!-- Contenu du bouton -->
        </button>
    </div>
</template>
```

**POURQUOI ÇA MARCHE** :
- ✅ **Conteneur WeWeb** : Reçoit les attributs WeWeb et les styles écrasants 
- ✅ **Bouton interne** : Échappe complètement aux styles WeWeb !
- ✅ **Pas de v-bind="wewebProps"** sur le bouton interne
- ✅ **CSS scoped** protège les styles

### CSS OBLIGATOIRE
```vue
<style scoped>
.button-container {
    display: inline-block;  /* Taille du contenu, PAS toute la largeur */
    padding: 0;
    box-sizing: border-box;
}

/* Styles de base d'abord */
.shadcn-button {
    /* Styles de base communs */
}

.shadcn-button.default {
    background-color: var(--custom-primary);  /* Variables CSS personnalisables */
    color: var(--custom-primary-foreground);
    border-color: var(--custom-primary);
}

/* Autres variants... */

/* Hover states À LA FIN pour surcharger */
.shadcn-button.default:hover:not(.disabled) {
    background-color: hsl(222.2 47.4% 10%);
}
</style>

<!-- Import globals.css pour les variables Shadcn -->
<style>
@import './globals.css';
</style>
```

### RÈGLES D'OR ABSOLUES

1. **JAMAIS d'!important** dans le CSS scoped
2. **CSS Variables personnalisables** injectées dans le conteneur
3. **TOUJOURS l'ordre** : Base → Sizes → Hover → Focus/Active  
4. **Classes simples** : `.shadcn-button.variant` pas `.ww-button.btn.variant-*`
5. **Conteneur transparent** : `display: inline-block`

## 🎨 PERSONNALISATION DES COULEURS

### Configuration des Couleurs (ww-config.js)
```javascript
properties: {
    // Palette couleurs complète
    primaryColor: {
        label: { en: "Primary color", fr: "Couleur principale" },
        type: "Color",
        section: "style",
        defaultValue: "hsl(222.2, 47.4%, 11.2%)",
        bindable: true
    },
    primaryForeground: {
        label: { en: "Primary text color", fr: "Couleur texte principal" },
        type: "Color", 
        section: "style",
        defaultValue: "hsl(210, 40%, 98%)",
        bindable: true
    },
    destructiveColor: {
        label: { en: "Destructive color", fr: "Couleur destructive" },
        type: "Color",
        section: "style", 
        defaultValue: "hsl(0, 84.2%, 60.2%)",
        bindable: true
    },
    // ... autres couleurs
}
```

### Injection des Variables CSS
```javascript
computed: {
    colorVariables() {
        return {
            '--custom-primary': this.content.primaryColor || 'hsl(222.2, 47.4%, 11.2%)',
            '--custom-primary-foreground': this.content.primaryForeground || 'hsl(210, 40%, 98%)',
            '--custom-destructive': this.content.destructiveColor || 'hsl(0, 84.2%, 60.2%)',
            '--custom-destructive-foreground': this.content.destructiveForeground || 'hsl(210, 40%, 98%)',
            '--custom-secondary': this.content.secondaryColor || 'hsl(210, 40%, 96%)',
            '--custom-secondary-foreground': this.content.secondaryForeground || 'hsl(222.2, 84%, 4.9%)',
            '--custom-border': this.content.borderColor || 'hsl(214.3, 31.8%, 91.4%)'
        };
    }
}
```

### Utilisation dans le CSS
```css
.shadcn-button.default {
    background-color: var(--custom-primary);
    color: var(--custom-primary-foreground);
    border-color: var(--custom-primary);
}

.shadcn-button.destructive {
    background-color: var(--custom-destructive);
    color: var(--custom-destructive-foreground);
    border-color: var(--custom-destructive);
}
```

## Structure du Repository

### Fichiers Principaux
- **src/wwElement.vue** : Composant Vue principal avec la structure conteneur+bouton
- **src/globals.css** : Variables CSS Shadcn universelles SEULEMENT
- **ww-config.js** : Configuration WeWeb (propriétés, événements)
- **package.json** : CRITIQUE pour le fonctionnement WeWeb
- **CLAUDE.md** : Ce fichier de documentation

### Variables CSS Standards (globals.css)
```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
    /* ... */
  }
}
```

## Pattern JavaScript WeWeb

### Structure Vue Recommandée
```javascript
export default {
    name: 'ShadcnButton', // Nom explicite
    props: {
        content: { type: Object, required: true },
        wwElementState: { type: Object, required: true },
        wwEditorState: { type: Object, required: true }, // Editor only
    },
    emits: ["trigger-event"],
    setup(props) {
        // WeWeb Link integration
        const { hasLink, linkProps, isEditing } = wwLib.wwElement.useLink({
            ...props,
            options: { linkable: true },
        });
        return { hasLink, linkProps, isEditing };
    },
    data() {
        return {
            isReallyFocused: false,
            isReallyActive: false,
        };
    },
    computed: {
        text() {
            return this.content.text || 'Button';
        }
    },
    methods: {
        handleClick(event) {
            if (this.content.disabled) return;
            
            this.$emit("trigger-event", {
                name: "click",
                event: { 
                    domEvent: event,
                    value: this.content.text || '',
                    variant: this.content.variant,
                    size: this.content.size
                }
            });
        }
    }
};
```

## Variants Shadcn Supportés

### Variants Standard
- **default** : Bouton principal bleu (`hsl(222.2 47.4% 11.2%)`)
- **destructive** : Bouton rouge danger (`hsl(0 84.2% 60.2%)`)
- **secondary** : Bouton gris secondaire (`hsl(210 40% 96%)`)
- **outline** : Bouton transparent avec bordure
- **ghost** : Bouton transparent sans bordure
- **link** : Style lien souligné
- **icon** : Bouton carré pour icône seule

### Tailles Standard
- **sm** : Petit (`6px 12px`, `12px` font)
- **default** : Standard (`8px 16px`, `14px` font)
- **lg** : Grand (`10px 24px`, `16px` font)

### États Supportés
- **disabled** : État désactivé
- **loading** : État de chargement avec spinner
- **focused** : État focus avec ring
- **active** : État actif avec scale

## Configuration WeWeb (ww-config.js)

### Propriétés Obligatoires
```javascript
export default {
    editor: {
        label: { en: "Shadcn UI Button", fr: "Bouton Shadcn UI" },
        icon: "fa-regular fa-square"
    },
    properties: {
        text: {
            label: { en: "Button text", fr: "Texte du bouton" },
            type: "Text",
            defaultValue: "Button",
            bindable: true
        },
        variant: {
            label: { en: "Variant", fr: "Variante" },
            type: "TextSelect",
            options: {
                options: [
                    { value: "default", label: { en: "Default", fr: "Par défaut" } },
                    { value: "destructive", label: { en: "Destructive", fr: "Destructif" } },
                    { value: "outline", label: { en: "Outline", fr: "Contour" } },
                    { value: "secondary", label: { en: "Secondary", fr: "Secondaire" } },
                    { value: "ghost", label: { en: "Ghost", fr: "Fantôme" } },
                    { value: "link", label: { en: "Link", fr: "Lien" } },
                    { value: "icon", label: { en: "Icon Only", fr: "Icône seule" } }
                ]
            },
            defaultValue: "default"
        },
        size: {
            label: { en: "Size", fr: "Taille" },
            type: "TextSelect",
            options: {
                options: [
                    { value: "sm", label: { en: "Small", fr: "Petit" } },
                    { value: "default", label: { en: "Default", fr: "Par défaut" } },
                    { value: "lg", label: { en: "Large", fr: "Grand" } }
                ]
            },
            defaultValue: "default"
        },
        disabled: {
            label: { en: "Disabled", fr: "Désactivé" },
            type: "OnOff",
            defaultValue: false,
            bindable: true
        }
    },
    triggerEvents: [
        {
            name: "trigger-event",
            label: { en: "On click", fr: "Au clic" },
            event: { value: "" },
            default: true
        }
    ]
};
```

## Intégration des Icônes

### Lucide Icons (Recommandé)
```vue
<template>
    <i 
        v-if="content.showIcon && content.iconName" 
        :data-lucide="content.iconName"
        class="button-icon"
    ></i>
</template>

<script>
mounted() {
    this.loadLucideIcons();
},
updated() {
    this.$nextTick(() => {
        if (window.lucide) {
            window.lucide.createIcons();
        }
    });
},
methods: {
    async loadLucideIcons() {
        if (window.lucide) return;
        
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/lucide@latest/dist/umd/lucide.js';
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }
}
</script>
```

## Erreurs Communes à Éviter

### ❌ Erreurs Critiques
1. **CSS Variables non définies** → Utiliser HSL direct
2. **!important dans scoped** → Jamais nécessaire avec notre architecture
3. **v-bind="wewebProps" sur bouton interne** → WeWeb l'écrasera
4. **Ordre CSS incorrect** → Base avant Hover
5. **Classes complexes** → Simplicité = stabilité
6. **Conteneur width: 100%** → `display: inline-block`

### ✅ Bonnes Pratiques
1. **Tester tous les variants** dans WeWeb
2. **Vérifier responsive** sur mobile
3. **Accessibilité** : focus, ARIA, keyboard
4. **Performance** : CSS scoped minimal
5. **Cohérence** : Même recette pour tous les composants

## Debugging WeWeb

### Inspection DOM
```html
<!-- Structure attendue -->
<div class="button-container ww-element" style="/* WeWeb écrase */">
    <button class="shadcn-button default sm">  <!-- Protégé ! -->
        <!-- Contenu -->
    </button>
</div>
```

### Signaux de Problème
- **Pas de styles** → CSS Variables manquantes ou ordre incorrect
- **Conteneur trop large** → `display: flex` au lieu de `inline-block`
- **Variants ne changent pas** → Ordre CSS ou classes incorrectes
- **Composant ne charge pas** → Erreurs JavaScript ou CSS invalide

## Migration vers Cette Architecture

### Pour Composants Existants
1. **Backup** : Sauvegarder la version actuelle
2. **Template** : Implémenter structure conteneur+élément interne
3. **CSS** : Passer en scoped avec HSL direct
4. **Test** : Vérifier tous variants/tailles/états
5. **Deploy** : Push et test en production WeWeb

### Scripts de Migration
```bash
# Test des variants
npm run build && npm run serve

# Vérification WeWeb
# (Tester manuellement dans l'éditeur WeWeb)
```

## Évolutions Futures

### Fonctionnalités Prévues
- **Dark mode** : Support automatique via CSS Variables
- **Animations** : Micro-interactions Shadcn
- **A11y** : Accessibilité complète
- **Types** : Support TypeScript

### Maintenance
- **Updates Shadcn** : Synchroniser les couleurs avec les nouvelles versions
- **WeWeb compatibility** : Surveiller les changements de l'éditeur
- **Performance** : Optimiser le CSS scoped

---

## Notes Importantes

**Cette architecture a nécessité plus de 50 itérations pour être découverte**. Elle contourne complètement les limitations de WeWeb qui écrase les styles inline. 

**NE PAS MODIFIER** cette architecture sans tests approfondis - elle est le résultat d'une analyse exhaustive des conflits entre Vue.js, WeWeb et Shadcn UI.

**RÉUTILISER** cette recette exacte pour les 47 autres composants Shadcn de l'écosystème.

---

*Dernière mise à jour : Décembre 2024 - Architecture révolutionnaire validée*