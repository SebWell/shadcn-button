<template>
  <!-- Template du bouton - Structure HTML de base -->
  <button 
    :class="buttonClasses"
    :disabled="content.disabled"
    :type="content.type || 'button'"
    @click="handleClick"
  >
    <!-- Icône gauche (optionnelle) -->
    <wwElement 
      v-if="content.leftIcon" 
      v-bind="content.leftIcon" 
      class="btn-icon btn-icon--left"
    />
    
    <!-- Texte du bouton -->
    <span v-if="content.text" class="btn-text">
      {{ content.text }}
    </span>
    
    <!-- Icône droite (optionnelle) -->
    <wwElement 
      v-if="content.rightIcon" 
      v-bind="content.rightIcon" 
      class="btn-icon btn-icon--right"
    />
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  
  // Props obligatoires pour Weweb
  props: {
    content: { 
      type: Object, 
      required: true 
    },
    /* wwEditor:start */
    wwEditorState: { 
      type: Object, 
      required: true 
    },
    /* wwEditor:end */
  },
  
  // Events émis par le composant
  emits: ["trigger-event"],
  
  // Propriétés calculées
  computed: {
    buttonClasses() {
      // Logique pour calculer les classes CSS du bouton
      const classes = ['btn'];
      
      // Ajouter la classe de variante
      if (this.content.variant) {
        classes.push(`btn--${this.content.variant}`);
      }
      
      // Ajouter la classe de taille
      if (this.content.size) {
        classes.push(`btn--${this.content.size}`);
      }
      
      return classes.join(' ');
    }
  },
  
  // Méthodes du composant
  methods: {
    handleClick() {
      // Émettre l'événement pour Weweb
      this.$emit("trigger-event", {
        name: "click",
        event: { value: this.content }
      });
    }
  }
};
</script>

<style>
/* === STYLES DE BASE === */
.btn {
  /* Styles de base du bouton */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.2s ease;
  gap: 8px;
  
  /* Taille par défaut */
  min-height: 40px;
  padding: 0 16px;
  font-size: 14px;
}

.btn:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* === VARIANTES === */
.btn--primary {
  background-color: #0066cc;
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background-color: #0052a3;
}

.btn--secondary {
  background-color: #6c757d;
  color: white;
}

.btn--secondary:hover:not(:disabled) {
  background-color: #545b62;
}

.btn--outline {
  background-color: transparent;
  border: 1px solid #0066cc;
  color: #0066cc;
}

.btn--outline:hover:not(:disabled) {
  background-color: #0066cc;
  color: white;
}

/* === TAILLES === */
.btn--small {
  min-height: 32px;
  padding: 0 12px;
  font-size: 12px;
}

.btn--large {
  min-height: 48px;
  padding: 0 24px;
  font-size: 16px;
}

/* === ICÔNES === */
.btn-icon {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.btn-text {
  flex: 1;
}
</style> 