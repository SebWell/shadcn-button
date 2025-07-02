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
  },
  emits: ["trigger-event"],
  computed: {
    computedClasses() {
      const variant = this.content.variant || 'default';
      const size = this.content.size || 'default';
      
      const baseClasses = ['shadcn-btn'];
      const variantClass = `shadcn-btn--${variant}`;
      const sizeClass = `shadcn-btn--${size}`;
      
      return [
        ...baseClasses,
        variantClass,
        sizeClass
      ].join(' ');
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

<style>
/* CSS du composant Shadcn (version non-scoped pour Weweb) */
.shadcn-btn {
  /* Base styles - identiques à Shadcn */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 0.375rem; /* 6px */
  font-size: 0.875rem; /* 14px */
  font-weight: 500;
  line-height: 1.25;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  outline: none;
  text-decoration: none;
  gap: 0.5rem; /* 8px */
  height: 2.5rem; /* 40px */
  padding: 0 1rem; /* 16px */
}

.shadcn-btn:focus-visible {
  outline: 2px solid hsl(222.2, 84%, 4.9%);
  outline-offset: 2px;
}

.shadcn-btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Icons styling */
.shadcn-btn .button-icon {
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.shadcn-btn .button-text {
  flex: 1;
  text-align: center;
}

/* VARIANTS - Couleurs exactes Shadcn */

/* Default variant - Dark primary */
.shadcn-btn.shadcn-btn--default {
  background-color: hsl(222.2, 47.4%, 11.2%); /* Shadcn primary */
  color: hsl(210, 40%, 98%); /* Shadcn primary-foreground */
  border-color: hsl(222.2, 47.4%, 11.2%);
}

.shadcn-btn.shadcn-btn--default:hover:not(:disabled) {
  background-color: hsl(222.2, 47.4%, 10%); /* Darker */
}

.shadcn-btn.shadcn-btn--default:active:not(:disabled) {
  background-color: hsl(222.2, 47.4%, 8%);
}

/* Destructive variant - Red */
.shadcn-btn.shadcn-btn--destructive {
  background-color: hsl(0, 84.2%, 60.2%); /* Shadcn destructive */
  color: hsl(210, 40%, 98%); /* Shadcn destructive-foreground */
  border-color: hsl(0, 84.2%, 60.2%);
}

.shadcn-btn.shadcn-btn--destructive:hover:not(:disabled) {
  background-color: hsl(0, 84.2%, 55%);
}

.shadcn-btn.shadcn-btn--destructive:active:not(:disabled) {
  background-color: hsl(0, 84.2%, 50%);
}

/* Outline variant */
.shadcn-btn.shadcn-btn--outline {
  background-color: transparent;
  color: hsl(222.2, 84%, 4.9%); /* Shadcn foreground */
  border-color: hsl(214.3, 31.8%, 91.4%); /* Shadcn input */
}

.shadcn-btn.shadcn-btn--outline:hover:not(:disabled) {
  background-color: hsl(210, 40%, 96%); /* Shadcn accent */
  color: hsl(222.2, 84%, 4.9%); /* Shadcn accent-foreground */
}

.shadcn-btn.shadcn-btn--outline:active:not(:disabled) {
  background-color: hsl(210, 40%, 94%);
}

/* Secondary variant */
.shadcn-btn.shadcn-btn--secondary {
  background-color: hsl(210, 40%, 96%); /* Shadcn secondary */
  color: hsl(222.2, 84%, 4.9%); /* Shadcn secondary-foreground */
  border-color: hsl(210, 40%, 96%);
}

.shadcn-btn.shadcn-btn--secondary:hover:not(:disabled) {
  background-color: hsl(210, 40%, 92%);
}

.shadcn-btn.shadcn-btn--secondary:active:not(:disabled) {
  background-color: hsl(210, 40%, 88%);
}

/* Ghost variant */
.shadcn-btn.shadcn-btn--ghost {
  background-color: transparent;
  color: hsl(222.2, 84%, 4.9%); /* Shadcn foreground */
  border-color: transparent;
}

.shadcn-btn.shadcn-btn--ghost:hover:not(:disabled) {
  background-color: hsl(210, 40%, 96%); /* Shadcn accent */
  color: hsl(222.2, 84%, 4.9%); /* Shadcn accent-foreground */
}

.shadcn-btn.shadcn-btn--ghost:active:not(:disabled) {
  background-color: hsl(210, 40%, 94%);
}

/* Link variant */
.shadcn-btn.shadcn-btn--link {
  background-color: transparent;
  color: hsl(222.2, 47.4%, 11.2%); /* Shadcn primary */
  border-color: transparent;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.shadcn-btn.shadcn-btn--link:hover:not(:disabled) {
  color: hsl(222.2, 47.4%, 9%);
}

.shadcn-btn.shadcn-btn--link:active:not(:disabled) {
  color: hsl(222.2, 47.4%, 7%);
}

/* SIZES - Tailles exactes Shadcn */

/* Small size */
.shadcn-btn.shadcn-btn--sm {
  height: 2.25rem; /* 36px */
  padding: 0 0.75rem; /* 12px */
  border-radius: 0.375rem; /* 6px */
  font-size: 0.875rem; /* 14px */
}

/* Large size */
.shadcn-btn.shadcn-btn--lg {
  height: 2.75rem; /* 44px */
  padding: 0 2rem; /* 32px */
  border-radius: 0.375rem; /* 6px */
  font-size: 1rem; /* 16px */
}

/* Icon size */
.shadcn-btn.shadcn-btn--icon {
  height: 2.5rem; /* 40px */
  width: 2.5rem; /* 40px */
  padding: 0;
}
</style>
