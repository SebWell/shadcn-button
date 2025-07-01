<template>
  <button 
    :class="computedClasses"
    :disabled="content.disabled"
    @click="handleClick"
    :type="content.type || 'button'"
  >
    <wwElement 
      v-if="content.leftIcon" 
      v-bind="content.leftIcon" 
      class="button-icon left-icon"
    />
    <span v-if="content.text" class="button-text">{{ content.text }}</span>
    <wwElement 
      v-if="content.rightIcon" 
      v-bind="content.rightIcon" 
      class="button-icon right-icon"
    />
  </button>
</template>

<script>
export default {
  name: "ShadcnButton",
  props: {
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
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
/* Shadcn Button - Version compatible Weweb */
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
  min-height: 2.5rem; /* 40px */
  padding: 0 1rem; /* 16px */
  
  /* Style par défaut */
  background-color: hsl(222.2, 47.4%, 11.2%);
  color: hsl(210, 40%, 98%);
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

/* VARIANTS */

/* Default variant */
.shadcn-btn--default {
  background-color: hsl(222.2, 47.4%, 11.2%);
  color: hsl(210, 40%, 98%);
  border-color: hsl(222.2, 47.4%, 11.2%);
}

.shadcn-btn--default:hover:not(:disabled) {
  background-color: hsl(222.2, 47.4%, 10%);
}

.shadcn-btn--default:active:not(:disabled) {
  background-color: hsl(222.2, 47.4%, 8%);
}

/* Destructive variant */
.shadcn-btn--destructive {
  background-color: hsl(0, 84.2%, 60.2%);
  color: hsl(210, 40%, 98%);
  border-color: hsl(0, 84.2%, 60.2%);
}

.shadcn-btn--destructive:hover:not(:disabled) {
  background-color: hsl(0, 84.2%, 55%);
}

.shadcn-btn--destructive:active:not(:disabled) {
  background-color: hsl(0, 84.2%, 50%);
}

/* Outline variant */
.shadcn-btn--outline {
  background-color: transparent;
  color: hsl(222.2, 84%, 4.9%);
  border-color: hsl(214.3, 31.8%, 91.4%);
}

.shadcn-btn--outline:hover:not(:disabled) {
  background-color: hsl(210, 40%, 96%);
  color: hsl(222.2, 84%, 4.9%);
}

.shadcn-btn--outline:active:not(:disabled) {
  background-color: hsl(210, 40%, 94%);
}

/* Secondary variant */
.shadcn-btn--secondary {
  background-color: hsl(210, 40%, 96%);
  color: hsl(222.2, 84%, 4.9%);
  border-color: hsl(210, 40%, 96%);
}

.shadcn-btn--secondary:hover:not(:disabled) {
  background-color: hsl(210, 40%, 92%);
}

.shadcn-btn--secondary:active:not(:disabled) {
  background-color: hsl(210, 40%, 88%);
}

/* Ghost variant */
.shadcn-btn--ghost {
  background-color: transparent;
  color: hsl(222.2, 84%, 4.9%);
  border-color: transparent;
}

.shadcn-btn--ghost:hover:not(:disabled) {
  background-color: hsl(210, 40%, 96%);
  color: hsl(222.2, 84%, 4.9%);
}

.shadcn-btn--ghost:active:not(:disabled) {
  background-color: hsl(210, 40%, 94%);
}

/* Link variant */
.shadcn-btn--link {
  background-color: transparent;
  color: hsl(222.2, 47.4%, 11.2%);
  border-color: transparent;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.shadcn-btn--link:hover:not(:disabled) {
  color: hsl(222.2, 47.4%, 20%);
  text-decoration: underline;
}

.shadcn-btn--link:active:not(:disabled) {
  color: hsl(222.2, 47.4%, 15%);
}

/* SIZES */

/* Small size */
.shadcn-btn--sm {
  height: 2.25rem; /* 36px */
  padding: 0 0.75rem; /* 12px */
  font-size: 0.875rem; /* 14px */
}

/* Default size - déjà défini dans .shadcn-btn */

/* Large size */
.shadcn-btn--lg {
  height: 2.75rem; /* 44px */
  padding: 0 2rem; /* 32px */
  font-size: 1rem; /* 16px */
}

/* Icon size */
.shadcn-btn--icon {
  height: 2.5rem; /* 40px */
  width: 2.5rem; /* 40px */
  padding: 0;
}
</style>