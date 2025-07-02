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
      const sizeClass = `shadcn-btn--size-${size}`;
      
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
/* ===== SHADCN UI BUTTON - SPECIFICATIONS EXACTES ===== */

/* Base styles identiques à Shadcn UI */
.shadcn-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border: 1px solid transparent;
  cursor: pointer;
  font-family: inherit;
  outline: none;
  text-decoration: none;
  gap: 0.5rem;
  --radius: 0.5rem;
}

/* Focus ring */
.shadcn-btn:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
  --ring: 222.2 84% 4.9%;
}

/* Disabled state */
.shadcn-btn:disabled {
  pointer-events: none;
  opacity: 0.5;
}

/* Icon styling */
.shadcn-btn .button-icon {
  flex-shrink: 0;
  width: 1rem;
  height: 1rem;
}

.shadcn-btn .button-text {
  flex: 1;
  text-align: center;
}

/* ===== VARIANTS (couleurs exactes Shadcn UI) ===== */

/* DEFAULT - Primary button */
.shadcn-btn--default {
  background-color: hsl(222.2 84% 4.9%);
  color: hsl(210 40% 98%);
  border-color: hsl(222.2 84% 4.9%);
}

.shadcn-btn--default:hover:not(:disabled) {
  background-color: hsl(222.2 84% 4.9% / 0.9);
}

.shadcn-btn--default:active:not(:disabled) {
  background-color: hsl(222.2 84% 4.9% / 0.8);
}

/* DESTRUCTIVE - Danger button */
.shadcn-btn--destructive {
  background-color: hsl(0 84.2% 60.2%);
  color: hsl(210 40% 98%);
  border-color: hsl(0 84.2% 60.2%);
}

.shadcn-btn--destructive:hover:not(:disabled) {
  background-color: hsl(0 84.2% 60.2% / 0.9);
}

.shadcn-btn--destructive:active:not(:disabled) {
  background-color: hsl(0 84.2% 60.2% / 0.8);
}

/* OUTLINE - Secondary button with border */
.shadcn-btn--outline {
  background-color: hsl(0 0% 100%);
  color: hsl(222.2 84% 4.9%);
  border-color: hsl(214.3 31.8% 91.4%);
}

.shadcn-btn--outline:hover:not(:disabled) {
  background-color: hsl(210 40% 96%);
  color: hsl(222.2 84% 4.9%);
}

.shadcn-btn--outline:active:not(:disabled) {
  background-color: hsl(210 40% 94%);
}

/* SECONDARY - Muted button */
.shadcn-btn--secondary {
  background-color: hsl(210 40% 96%);
  color: hsl(222.2 84% 4.9%);
  border-color: hsl(210 40% 96%);
}

.shadcn-btn--secondary:hover:not(:disabled) {
  background-color: hsl(210 40% 96% / 0.8);
}

.shadcn-btn--secondary:active:not(:disabled) {
  background-color: hsl(210 40% 96% / 0.7);
}

/* GHOST - Transparent button */
.shadcn-btn--ghost {
  background-color: transparent;
  color: hsl(222.2 84% 4.9%);
  border-color: transparent;
}

.shadcn-btn--ghost:hover:not(:disabled) {
  background-color: hsl(210 40% 96%);
  color: hsl(222.2 84% 4.9%);
}

.shadcn-btn--ghost:active:not(:disabled) {
  background-color: hsl(210 40% 94%);
}

/* LINK - Link-style button */
.shadcn-btn--link {
  background-color: transparent;
  color: hsl(222.2 84% 4.9%);
  border-color: transparent;
  text-decoration: underline;
  text-underline-offset: 4px;
  padding: 0;
  height: auto;
}

.shadcn-btn--link:hover:not(:disabled) {
  color: hsl(222.2 84% 4.9% / 0.8);
  text-decoration: underline;
}

.shadcn-btn--link:active:not(:disabled) {
  color: hsl(222.2 84% 4.9% / 0.7);
}

/* ===== SIZES (tailles exactes Shadcn UI) ===== */

/* Default size */
.shadcn-btn--size-default {
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

/* Small size */
.shadcn-btn--size-sm {
  height: 2.25rem;
  border-radius: calc(var(--radius) - 2px);
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-size: 0.875rem;
}

/* Large size */
.shadcn-btn--size-lg {
  height: 2.75rem;
  border-radius: calc(var(--radius) - 2px);
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 1rem;
}

/* Icon size - square button for icons only */
.shadcn-btn--size-icon {
  height: 2.5rem;
  width: 2.5rem;
  padding: 0;
}

/* ===== SPECIAL COMBINATIONS ===== */

/* Link variant doesn't need default padding when it's link */
.shadcn-btn--link.shadcn-btn--size-default,
.shadcn-btn--link.shadcn-btn--size-sm,
.shadcn-btn--link.shadcn-btn--size-lg {
  padding-left: 0;
  padding-right: 0;
  height: auto;
}

/* Icon variant should always be square regardless of size */
.shadcn-btn--size-icon {
  min-width: 2.5rem;
}

.shadcn-btn--size-icon.shadcn-btn--size-sm {
  height: 2.25rem;
  width: 2.25rem;
}

.shadcn-btn--size-icon.shadcn-btn--size-lg {
  height: 2.75rem;
  width: 2.75rem;
}

/* ===== DARK MODE SUPPORT ===== */
@media (prefers-color-scheme: dark) {
  .shadcn-btn--default {
    background-color: hsl(210 40% 98%);
    color: hsl(222.2 84% 4.9%);
  }
  
  .shadcn-btn--outline {
    background-color: hsl(222.2 84% 4.9%);
    color: hsl(210 40% 98%);
    border-color: hsl(217.2 32.6% 17.5%);
  }
  
  .shadcn-btn--secondary {
    background-color: hsl(217.2 32.6% 17.5%);
    color: hsl(210 40% 98%);
  }
  
  .shadcn-btn--ghost {
    color: hsl(210 40% 98%);
  }
  
  .shadcn-btn--link {
    color: hsl(210 40% 98%);
  }
}

/* ===== LOADING STATE (bonus) ===== */
.shadcn-btn[data-loading="true"] {
  color: transparent;
}

.shadcn-btn[data-loading="true"]::after {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  border: 2px solid currentColor;
  border-radius: 50%;
  border-right-color: transparent;
  animation: button-loading-spinner 1s linear infinite;
}

@keyframes button-loading-spinner {
  to {
    transform: rotate(360deg);
  }
}
</style>
