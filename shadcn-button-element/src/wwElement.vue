<template>
  <button 
    :class="buttonClasses"
    :disabled="content.disabled"
    :type="content.type || 'button'"
    @click="handleClick"
  >
    <!-- Icône gauche -->
    <wwElement 
      v-if="content.leftIcon" 
      v-bind="content.leftIcon" 
      class="btn-icon btn-icon--left"
    />
    
    <!-- Texte du bouton -->
    <span v-if="content.text" class="btn-text">
      {{ content.text }}
    </span>
    
    <!-- Icône droite -->
    <wwElement 
      v-if="content.rightIcon" 
      v-bind="content.rightIcon" 
      class="btn-icon btn-icon--right"
    />
  </button>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  emits: ["trigger-event"],
  computed: {
    buttonClasses() {
      const classes = ['shadcn-btn'];
      
      // Ajouter la variante (default, destructive, outline, etc.)
      const variant = this.content.variant || 'default';
      classes.push(`shadcn-btn--${variant}`);
      
      // Ajouter la taille (sm, default, lg, icon)
      const size = this.content.size || 'default';
      classes.push(`shadcn-btn--${size}`);
      
      return classes.join(' ');
    }
  },
  methods: {
    handleClick() {
      this.$emit("trigger-event", {
        name: "click",
        event: { value: this.content }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
// Shadcn Button - Structure officielle Weweb
.shadcn-btn {
  // Base styles identiques à Shadcn
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem; // 6px
  font-size: 0.875rem; // 14px
  font-weight: 500;
  line-height: 1.25;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, 
              border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  outline: none;
  text-decoration: none;
  gap: 0.5rem; // 8px
  min-height: 2.5rem; // 40px
  padding: 0 1rem; // 16px

  &:focus-visible {
    outline: 2px solid hsl(222.2, 84%, 4.9%);
    outline-offset: 2px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  // === VARIANTES ===
  
  // Default variant - Noir Shadcn
  &--default {
    background-color: hsl(222.2, 47.4%, 11.2%);
    color: hsl(210, 40%, 98%);
    border-color: hsl(222.2, 47.4%, 11.2%);

    &:hover:not(:disabled) {
      background-color: hsl(222.2, 47.4%, 10%);
    }
  }

  // Destructive variant - Rouge
  &--destructive {
    background-color: hsl(0, 84.2%, 60.2%);
    color: hsl(210, 40%, 98%);
    border-color: hsl(0, 84.2%, 60.2%);

    &:hover:not(:disabled) {
      background-color: hsl(0, 84.2%, 55%);
    }
  }

  // Outline variant - Bordure
  &--outline {
    background-color: transparent;
    color: hsl(222.2, 84%, 4.9%);
    border-color: hsl(214.3, 31.8%, 91.4%);

    &:hover:not(:disabled) {
      background-color: hsl(210, 40%, 96%);
      color: hsl(222.2, 84%, 4.9%);
    }
  }

  // Secondary variant - Gris clair
  &--secondary {
    background-color: hsl(210, 40%, 96%);
    color: hsl(222.2, 84%, 4.9%);
    border-color: hsl(210, 40%, 96%);

    &:hover:not(:disabled) {
      background-color: hsl(210, 40%, 92%);
    }
  }

  // Ghost variant - Transparent
  &--ghost {
    background-color: transparent;
    color: hsl(222.2, 84%, 4.9%);
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: hsl(210, 40%, 96%);
      color: hsl(222.2, 84%, 4.9%);
    }
  }

  // Link variant - Lien souligné
  &--link {
    background-color: transparent;
    color: hsl(222.2, 47.4%, 11.2%);
    border-color: transparent;
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover:not(:disabled) {
      color: hsl(222.2, 47.4%, 20%);
    }
  }

  // === TAILLES ===
  
  // Small size
  &--sm {
    height: 2.25rem; // 36px
    padding: 0 0.75rem; // 12px
    font-size: 0.875rem; // 14px
  }

  // Large size
  &--lg {
    height: 2.75rem; // 44px
    padding: 0 2rem; // 32px
    font-size: 1rem; // 16px
  }

  // Icon size
  &--icon {
    height: 2.5rem; // 40px
    width: 2.5rem; // 40px
    padding: 0;
  }

  // === ICÔNES ===
  .btn-icon {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  .btn-text {
    flex: 1;
    text-align: center;
  }
}
</style>
