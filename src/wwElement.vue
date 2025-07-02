<template>
  <button
    :class="computedClasses"
    :disabled="content.disabled"
    :type="content.type || 'button'"
    @click="handleClick"
  >
    <!-- Icône gauche -->
    <wwElement 
      v-if="content.leftIcon" 
      v-bind="content.leftIcon" 
      class="button-icon left-icon"
    />
    
    <!-- Texte du bouton -->
    <span v-if="content.text" class="button-text">
      {{ content.text }}
    </span>
    
    <!-- Icône droite -->
    <wwElement 
      v-if="content.rightIcon" 
      v-bind="content.rightIcon" 
      class="button-icon right-icon"
    />
  </button>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
    wwEditorState: { type: Object, required: true }
  },
  emits: ["trigger-event"],
  computed: {
    computedClasses() {
      const variant = this.content.variant || 'default';
      const size = this.content.size || 'default';
      
      let classes = ['btn', `btn-${variant}`];
      
      // Ajouter la classe de taille seulement si ce n'est pas la taille par défaut
      if (size !== 'default') {
        classes.push(`btn-${size}`);
      }
      
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

<style scoped>
/* ===== SHADCN UI BUTTON - COULEURS EXACTES ===== */

/* Base button styles - EXACTEMENT comme Shadcn UI */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem; /* 6px - comme Shadcn UI */
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border: 1px solid transparent;
  cursor: pointer;
  outline: none;
  text-decoration: none;
  gap: 0.5rem;
  font-family: inherit;
}

/* Focus ring exact */
.btn:focus-visible {
  outline: 2px solid hsl(215 20.2% 65.1%);
  outline-offset: 2px;
}

/* Disabled state */
.btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Icon styling */
.btn .button-icon {
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

/* ===== VARIANTS SHADCN UI EXACTES ===== */

/* DEFAULT (Primary) */
.btn-default {
  background-color: hsl(222.2 47.4% 11.2%);
  color: hsl(210 40% 98%);
  border-color: hsl(222.2 47.4% 11.2%);
}

.btn-default:hover:not(:disabled) {
  background-color: hsl(222.2 47.4% 11.2% / 0.9);
}

.btn-default:active:not(:disabled) {
  background-color: hsl(222.2 47.4% 11.2% / 0.8);
}

/* DESTRUCTIVE */
.btn-destructive {
  background-color: hsl(0 100% 50%);
  color: hsl(210 40% 98%);
  border-color: hsl(0 100% 50%);
}

.btn-destructive:hover:not(:disabled) {
  background-color: hsl(0 100% 50% / 0.9);
}

.btn-destructive:active:not(:disabled) {
  background-color: hsl(0 100% 50% / 0.8);
}

/* OUTLINE */
.btn-outline {
  background-color: transparent;
  color: hsl(222.2 47.4% 11.2%);
  border-color: hsl(214.3 31.8% 91.4%);
}

.btn-outline:hover:not(:disabled) {
  background-color: hsl(210 40% 96.1%);
  color: hsl(222.2 47.4% 11.2%);
}

.btn-outline:active:not(:disabled) {
  background-color: hsl(210 40% 96.1% / 0.8);
}

/* SECONDARY */
.btn-secondary {
  background-color: hsl(210 40% 96.1%);
  color: hsl(222.2 47.4% 11.2%);
  border-color: hsl(210 40% 96.1%);
}

.btn-secondary:hover:not(:disabled) {
  background-color: hsl(210 40% 96.1% / 0.8);
}

.btn-secondary:active:not(:disabled) {
  background-color: hsl(210 40% 96.1% / 0.7);
}

/* GHOST */
.btn-ghost {
  background-color: transparent;
  color: hsl(222.2 47.4% 11.2%);
  border-color: transparent;
}

.btn-ghost:hover:not(:disabled) {
  background-color: hsl(210 40% 96.1%);
  color: hsl(222.2 47.4% 11.2%);
}

.btn-ghost:active:not(:disabled) {
  background-color: hsl(210 40% 96.1% / 0.8);
}

/* LINK */
.btn-link {
  background-color: transparent;
  color: hsl(222.2 47.4% 11.2%);
  border-color: transparent;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding: 0;
  height: auto;
  min-height: auto;
}

.btn-link:hover:not(:disabled) {
  color: hsl(222.2 47.4% 11.2% / 0.8);
}

.btn-link:active:not(:disabled) {
  color: hsl(222.2 47.4% 11.2% / 0.7);
}

/* ===== SIZES SHADCN UI EXACTES ===== */

/* Default size: 40px height */
.btn:not(.btn-sm):not(.btn-lg):not(.btn-icon) {
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Small: 36px height */
.btn-sm {
  height: 2.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
}

/* Large: 44px height */
.btn-lg {
  height: 2.75rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1rem;
}

/* Icon: square 40x40px */
.btn-icon {
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
}

/* Link ne doit pas avoir de padding/height fixe */
.btn-link.btn-sm,
.btn-link.btn-default,
.btn-link.btn-lg {
  padding-left: 0;
  padding-right: 0;
  height: auto;
}

/* Icon small/large variants */
.btn-icon.btn-sm {
  height: 2.25rem;
  width: 2.25rem;
}

.btn-icon.btn-lg {
  height: 2.75rem;
  width: 2.75rem;
}
</style>
