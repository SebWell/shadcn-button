<template>
  <button
    :class="buttonClasses"
    :disabled="isDisabled"
    :aria-disabled="isDisabled.toString()"
    :type="buttonType"
    :style="wwElementStyle"
    @click="handleClick"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
  >
    <!-- ✅ CORRIGÉ: Icône gauche avec gap automatique -->
    <i 
      v-if="hasLeftIcon && size !== 'icon'" 
      :class="leftIcon"
      class="shadcn-button__left-icon"
    ></i>
    
    <!-- ✅ CORRIGÉ: Icône pour Icon Only -->
    <i 
      v-if="size === 'icon' && iconOnly" 
      :class="iconOnly"
      class="shadcn-button__icon-only"
    ></i>
    
    <!-- ✅ CORRIGÉ: Texte (avec line-height optimisé) -->
    <span 
      v-if="size !== 'icon' && text"
      class="shadcn-button__text"
    >
      {{ text }}
    </span>
    
    <!-- ✅ CORRIGÉ: Icône droite avec gap automatique -->
    <i 
      v-if="hasRightIcon && size !== 'icon'" 
      :class="rightIcon"
      class="shadcn-button__right-icon"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'ShadcnButton',
  
  // ✅ CORRIGÉ: Structure props Weweb standard
  props: {
    content: { type: Object, default: () => ({}) },
    uid: { type: String, default: '' },
    wwElementState: { type: Object, default: () => ({}) },
    wwEditorState: { type: Object, default: () => ({}) },
    wwFrontState: { type: Object, default: () => ({}) },
  },
  
  computed: {
    // ✅ CORRIGÉ: Mode édition detection standard Weweb
    isEditing() {
      return this.wwEditorState.editMode === wwLib.wwEditorHelper.EDIT_MODES.EDITION;
    },
    
    // ✅ CORRIGÉ: Style Weweb natif
    wwElementStyle() {
      return {
        ...this.wwElementState.style,
        // Préserver les styles custom si nécessaire
      };
    },
    
    // Texte du bouton
    text() {
      return this.content.text || 'Button';
    },
    
    // Variante Shadcn
    variant() {
      return this.content.variant || 'default';
    },
    
    // Taille Shadcn
    size() {
      return this.content.size || 'default';
    },
    
    // Type de bouton
    buttonType() {
      return this.content.buttonType || 'button';
    },
    
    // Gestion des icônes
    hasLeftIcon() {
      return this.content.hasLeftIcon === true;
    },
    
    leftIcon() {
      return this.content.leftIcon || 'wwi wwi-add-circle';
    },
    
    hasRightIcon() {
      return this.content.hasRightIcon === true;
    },
    
    rightIcon() {
      return this.content.rightIcon || 'wwi wwi-arrow-right';
    },
    
    iconOnly() {
      return this.content.iconOnly || 'wwi wwi-edit';
    },
    
    // Classes CSS dynamiques
    buttonClasses() {
      const classes = [
        'shadcn-button',
        `shadcn-button--variant-${this.variant}`,
        `shadcn-button--size-${this.size}`,
      ];
      
      if (this.isDisabled) {
        classes.push('shadcn-button--disabled');
      }
      
      if (this.isEditing) {
        classes.push('shadcn-button--editing');
      }
      
      return classes;
    },
    
    // Gestion disabled
    isDisabled() {
      if (this.isEditing) return false; // Jamais disabled en mode édition
      return this.content.disabled === true;
    },
    
    // Gestion lien
    hasLink() {
      const link = this.content.link;
      return !!(link && (link.href || link.type));
    },
  },
  
  methods: {
    // ✅ CORRIGÉ: Gestion click standard Weweb
    handleClick(event) {
      if (this.isDisabled) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      
      // Émission événement click Weweb standard
      this.$emit('trigger-event', {
        name: 'click',
        event: {
          domEvent: event,
          value: this.content.value || this.text,
        },
      });

      // ✅ CORRIGÉ: Navigation avec wwLib standard
      if (this.hasLink && !this.isEditing) {
        wwLib.wwLang.executeWorkflow(this.content.link);
      }
    },
    
    // ✅ SIMPLIFIÉS: Événements optionnels (uniquement si nécessaires)
    handleMouseEnter(event) {
      if (this.isDisabled) return;
      
      this.$emit('trigger-event', {
        name: 'mouseenter',
        event: {
          domEvent: event,
          value: this.content.value || this.text,
        },
      });
    },
    
    handleMouseLeave(event) {
      if (this.isDisabled) return;
      
      this.$emit('trigger-event', {
        name: 'mouseleave',
        event: {
          domEvent: event,
          value: this.content.value || this.text,
        },
      });
    },
    
    handleFocus(event) {
      if (this.isDisabled) return;
      
      this.$emit('trigger-event', {
        name: 'focus',
        event: {
          domEvent: event,
          value: this.content.value || this.text,
        },
      });
    },
    
    handleBlur(event) {
      if (this.isDisabled) return;
      
      this.$emit('trigger-event', {
        name: 'blur',
        event: {
          domEvent: event,
          value: this.content.value || this.text,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.shadcn-button {
  // ✅ CORRIGÉ: Variables CSS avec fallbacks robustes
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  --secondary: 210 40% 96%;
  --secondary-foreground: 222.2 84% 4.9%;
  --muted: 210 40% 96%;
  --muted-foreground: 215.4 16.3% 46.9%;
  --accent: 210 40% 96%;
  --accent-foreground: 222.2 84% 4.9%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;
  --border: 214.3 31.8% 91.4%;
  --input: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;

  // ✅ CORRIGÉ: Reset exact Shadcn + normalize
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
  padding: 0;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  text-decoration: none;
  box-sizing: border-box;
  
  // ✅ CORRIGÉ: Structure exacte Shadcn (design tokens)
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875rem;
  font-weight: 500;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  cursor: pointer;
  outline: none;
  position: relative;
  user-select: none;
  
  // ✅ CORRIGÉ: Taille par défaut exacte
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  
  // ✅ CORRIGÉ: Focus ring exacte Shadcn
  &:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
  }
  
  // ✅ CORRIGÉ: État disabled exact
  &--disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  // === VARIANTS SHADCN EXACTES AVEC FALLBACKS ===
  
  // ✅ CORRIGÉ: Default variant avec fallbacks de couleur
  &--variant-default {
    background-color: hsl(var(--primary));
    background-color: #3b82f6; /* Fallback si HSL custom properties ne marchent pas */
    color: hsl(var(--primary-foreground));
    color: white; /* Fallback */
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--primary) / 0.9);
      background-color: #2563eb; /* Fallback hover */
    }
    
    &:active:not(.shadcn-button--disabled) {
      background-color: hsl(var(--primary) / 0.95);
      background-color: #1d4ed8; /* Fallback active */
    }
  }
  
  // ✅ CORRIGÉ: Destructive variant avec fallbacks
  &--variant-destructive {
    background-color: hsl(var(--destructive));
    background-color: #ef4444; /* Fallback rouge */
    color: hsl(var(--destructive-foreground));
    color: white; /* Fallback */
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--destructive) / 0.9);
      background-color: #dc2626; /* Fallback hover rouge */
    }
    
    &:active:not(.shadcn-button--disabled) {
      background-color: hsl(var(--destructive) / 0.95);
      background-color: #b91c1c; /* Fallback active rouge */
    }
  }
  
  // ✅ CORRIGÉ: Outline variant avec border exacte
  &--variant-outline {
    border: 1px solid hsl(var(--border));
    border: 1px solid #e5e7eb; /* Fallback border */
    background-color: hsl(var(--background));
    background-color: white; /* Fallback */
    color: hsl(var(--foreground));
    color: #111827; /* Fallback text */
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--accent));
      background-color: #f9fafb; /* Fallback hover */
      color: hsl(var(--accent-foreground));
      color: #111827; /* Fallback */
    }
    
    &:active:not(.shadcn-button--disabled) {
      background-color: hsl(var(--accent) / 0.8);
      background-color: #f3f4f6; /* Fallback active */
    }
  }
  
  // ✅ CORRIGÉ: Secondary variant exacte
  &--variant-secondary {
    background-color: hsl(var(--secondary));
    background-color: #f1f5f9; /* Fallback gris clair */
    color: hsl(var(--secondary-foreground));
    color: #0f172a; /* Fallback text sombre */
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--secondary) / 0.8);
      background-color: #e2e8f0; /* Fallback hover */
    }
    
    &:active:not(.shadcn-button--disabled) {
      background-color: hsl(var(--secondary) / 0.9);
      background-color: #cbd5e1; /* Fallback active */
    }
  }
  
  // ✅ CORRIGÉ: Ghost variant exacte
  &--variant-ghost {
    background-color: transparent;
    color: hsl(var(--foreground));
    color: #111827; /* Fallback */
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--accent));
      background-color: #f9fafb; /* Fallback hover */
      color: hsl(var(--accent-foreground));
      color: #111827; /* Fallback */
    }
    
    &:active:not(.shadcn-button--disabled) {
      background-color: hsl(var(--accent) / 0.8);
      background-color: #f3f4f6; /* Fallback active */
    }
  }
  
  // ✅ CORRIGÉ: Link variant exacte
  &--variant-link {
    background-color: transparent;
    color: hsl(var(--primary));
    color: #3b82f6; /* Fallback bleu */
    text-decoration: underline;
    text-underline-offset: 4px;
    height: auto;
    padding: 0;
    
    &:hover:not(.shadcn-button--disabled) {
      color: hsl(var(--primary) / 0.9);
      color: #2563eb; /* Fallback hover */
    }
    
    &:active:not(.shadcn-button--disabled) {
      color: hsl(var(--primary) / 0.8);
      color: #1d4ed8; /* Fallback active */
    }
  }

  // ✅ CORRIGÉ: Icônes exactes
  &__left-icon, &__right-icon, &__icon-only {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1rem;
    height: 1rem;
  }
  
  &__text {
    flex: none;
    line-height: 1;
  }

  // === TAILLES SHADCN EXACTES ===
  
  // ✅ CORRIGÉ: Small size exacte
  &--size-sm {
    height: 2.25rem;
    border-radius: calc(var(--radius) - 2px);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    
    .shadcn-button__left-icon, .shadcn-button__right-icon, .shadcn-button__icon-only {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
  
  // ✅ CORRIGÉ: Default size exacte
  &--size-default {
    height: 2.5rem;
    border-radius: calc(var(--radius) - 2px);
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    
    .shadcn-button__left-icon, .shadcn-button__right-icon, .shadcn-button__icon-only {
      width: 1rem;
      height: 1rem;
    }
  }
  
  // ✅ CORRIGÉ: Large size exacte
  &--size-lg {
    height: 2.75rem;
    border-radius: calc(var(--radius) - 2px);
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 1rem;
    
    .shadcn-button__left-icon, .shadcn-button__right-icon, .shadcn-button__icon-only {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
  
  // ✅ CORRIGÉ: Icon size exacte
  &--size-icon {
    height: 2.5rem;
    width: 2.5rem;
    border-radius: calc(var(--radius) - 2px);
    padding: 0;
    
    .shadcn-button__icon-only {
      width: 1rem;
      height: 1rem;
    }
  }
  
  // Mode édition Weweb
  &--editing {
    cursor: pointer;
    
    &:hover {
      outline: 2px dashed hsl(var(--ring));
      outline: 2px dashed #3b82f6; /* Fallback */
      outline-offset: 2px;
    }
  }
}

// ✅ CORRIGÉ: Mode sombre avec fallbacks
@media (prefers-color-scheme: dark) {
  .shadcn-button {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 84% 4.9%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 94.1%;
    
    // Fallbacks pour mode sombre
    &--variant-default {
      background-color: #60a5fa; /* Fallback primary dark */
      color: #1e293b; /* Fallback text dark */
      
      &:hover:not(.shadcn-button--disabled) {
        background-color: #3b82f6; /* Fallback hover dark */
      }
    }
    
    &--variant-destructive {
      background-color: #dc2626; /* Fallback destructive dark */
      color: #f8fafc; /* Fallback text light */
      
      &:hover:not(.shadcn-button--disabled) {
        background-color: #b91c1c; /* Fallback hover dark */
      }
    }
    
    &--variant-outline {
      border-color: #374151; /* Fallback border dark */
      background-color: #111827; /* Fallback bg dark */
      color: #f9fafb; /* Fallback text light */
      
      &:hover:not(.shadcn-button--disabled) {
        background-color: #1f2937; /* Fallback hover dark */
      }
    }
    
    &--variant-secondary {
      background-color: #374151; /* Fallback secondary dark */
      color: #f9fafb; /* Fallback text light */
      
      &:hover:not(.shadcn-button--disabled) {
        background-color: #4b5563; /* Fallback hover dark */
      }
    }
  }
}

// Support responsive
@media (max-width: 768px) {
  .shadcn-button {
    &--size-lg {
      height: 2.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      font-size: 0.875rem;
    }
  }
}
</style>