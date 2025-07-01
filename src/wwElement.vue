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

<style lang="scss">
/* Shadcn Button - Version simplifiée et fonctionnelle */
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

  &:focus-visible {
    outline: 2px solid hsl(222.2, 84%, 4.9%);
    outline-offset: 2px;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Icons styling */
  .button-icon {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
  }

  .button-text {
    flex: 1;
    text-align: center;
  }

  /* VARIANTS - Couleurs exactes Shadcn */
  
  /* Default variant - Dark primary */
  &--default {
    background-color: hsl(222.2, 47.4%, 11.2%); /* Shadcn primary */
    color: hsl(210, 40%, 98%); /* Shadcn primary-foreground */
    border-color: hsl(222.2, 47.4%, 11.2%);

    &:hover:not(:disabled) {
      background-color: hsl(222.2, 47.4%, 10%); /* Darker */
    }

    &:active:not(:disabled) {
      background-color: hsl(222.2, 47.4%, 8%);
    }
  }

  /* Destructive variant - Red */
  &--destructive {
    background-color: hsl(0, 84.2%, 60.2%); /* Shadcn destructive */
    color: hsl(210, 40%, 98%); /* Shadcn destructive-foreground */
    border-color: hsl(0, 84.2%, 60.2%);

    &:hover:not(:disabled) {
      background-color: hsl(0, 84.2%, 55%);
    }

    &:active:not(:disabled) {
      background-color: hsl(0, 84.2%, 50%);
    }
  }

  /* Outline variant */
  &--outline {
    background-color: transparent;
    color: hsl(222.2, 84%, 4.9%); /* Shadcn foreground */
    border-color: hsl(214.3, 31.8%, 91.4%); /* Shadcn input */

    &:hover:not(:disabled) {
      background-color: hsl(210, 40%, 96%); /* Shadcn accent */
      color: hsl(222.2, 84%, 4.9%); /* Shadcn accent-foreground */
    }

    &:active:not(:disabled) {
      background-color: hsl(210, 40%, 94%);
    }
  }

  /* Secondary variant */
  &--secondary {
    background-color: hsl(210, 40%, 96%); /* Shadcn secondary */
    color: hsl(222.2, 84%, 4.9%); /* Shadcn secondary-foreground */
    border-color: hsl(210, 40%, 96%);

    &:hover:not(:disabled) {
      background-color: hsl(210, 40%, 92%);
    }

    &:active:not(:disabled) {
      background-color: hsl(210, 40%, 88%);
    }
  }

  /* Ghost variant */
  &--ghost {
    background-color: transparent;
    color: hsl(222.2, 84%, 4.9%); /* Shadcn foreground */
    border-color: transparent;

    &:hover:not(:disabled) {
      background-color: hsl(210, 40%, 96%); /* Shadcn accent */
      color: hsl(222.2, 84%, 4.9%); /* Shadcn accent-foreground */
    }

    &:active:not(:disabled) {
      background-color: hsl(210, 40%, 94%);
    }
  }

  /* Link variant */
  &--link {
    background-color: transparent;
    color: hsl(222.2, 47.4%, 11.2%); /* Shadcn primary */
    border-color: transparent;
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover:not(:disabled) {
      color: hsl(222.2, 47.4%, 20%); /* Plus visible */
      text-decoration: underline;
    }

    &:active:not(:disabled) {
      color: hsl(222.2, 47.4%, 15%);
    }
  }

  /* SIZES - Tailles exactes Shadcn */
  
  /* Small size */
  &--sm {
    height: 2.25rem; /* 36px */
    padding: 0 0.75rem; /* 12px */
    border-radius: 0.375rem; /* 6px */
    font-size: 0.875rem; /* 14px */
  }

  /* Default size */
  &--default {
    height: 2.5rem; /* 40px */
    padding: 0 1rem; /* 16px */
  }

  /* Large size */
  &--lg {
    height: 2.75rem; /* 44px */
    padding: 0 2rem; /* 32px */
    border-radius: 0.375rem; /* 6px */
    font-size: 1rem; /* 16px */
  }

  /* Icon size */
  &--icon {
    height: 2.5rem; /* 40px */
    width: 2.5rem; /* 40px */
    padding: 0;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .shadcn-btn {
    /* Ajuste les couleurs pour le mode sombre si nécessaire */
    &--outline {
      color: hsl(210, 40%, 98%);
      border-color: hsl(217.2, 32.6%, 17.5%);

      &:hover:not(:disabled) {
        background-color: hsl(217.2, 32.6%, 17.5%);
        color: hsl(210, 40%, 98%);
      }
    }

    &--ghost {
      color: hsl(210, 40%, 98%);

      &:hover:not(:disabled) {
        background-color: hsl(217.2, 32.6%, 17.5%);
        color: hsl(210, 40%, 98%);
      }
    }

    &--secondary {
      background-color: hsl(217.2, 32.6%, 17.5%);
      color: hsl(210, 40%, 98%);
      border-color: hsl(217.2, 32.6%, 17.5%);

      &:hover:not(:disabled) {
        background-color: hsl(217.2, 32.6%, 20%);
      }
    }
  }
}
</style>