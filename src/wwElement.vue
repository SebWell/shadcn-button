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
    <!-- Icône gauche (si activée et pas icon only) -->
    <i 
      v-if="hasLeftIcon && size !== 'icon'" 
      :class="leftIcon"
      class="shadcn-button__left-icon"
    ></i>
    
    <!-- Icône pour Icon Only -->
    <i 
      v-if="size === 'icon' && iconOnly" 
      :class="iconOnly"
      class="shadcn-button__icon-only"
    ></i>
    
    <!-- Texte (caché pour icon only) -->
    <span 
      v-if="size !== 'icon'"
      class="shadcn-button__text"
    >
      {{ text }}
    </span>
    
    <!-- Icône droite (si activée et pas icon only) -->
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
      const baseClass = 'shadcn-button';
      const variantClass = `${baseClass}--variant-${this.variant}`;
      const sizeClass = `${baseClass}--size-${this.size}`;
      
      const conditionalClasses = [];
      
      if (this.isDisabled) {
        conditionalClasses.push(`${baseClass}--disabled`);
      }
      
      if (this.isEditing) {
        conditionalClasses.push(`${baseClass}--editing`);
      }
      
      if (this.hasLeftIcon && this.size !== 'icon') {
        conditionalClasses.push(`${baseClass}--has-left-icon`);
      }
      
      if (this.hasRightIcon && this.size !== 'icon') {
        conditionalClasses.push(`${baseClass}--has-right-icon`);
      }
      
      if (this.size === 'icon') {
        conditionalClasses.push(`${baseClass}--icon-only`);
      }
      
      return [baseClass, variantClass, sizeClass, ...conditionalClasses];
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
  // Variables CSS Shadcn (design system)
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
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
  --ring: 222.2 84% 4.9%;

  // Reset minimal pour button HTML
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  margin: 0;
  font-family: inherit;
  text-decoration: none;
  
  // Structure de base Shadcn
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  outline: none;
  position: relative;
  
  // Tailles par défaut
  padding: 0.5rem 1rem;
  min-height: 2.5rem;
  
  // États focus
  &:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
    z-index: 10;
  }
  
  // État disabled
  &--disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  // === VARIANTS SHADCN ===
  
  // Default variant
  &--variant-default {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--primary) / 0.9);
    }
  }
  
  // Destructive variant
  &--variant-destructive {
    background-color: hsl(var(--destructive));
    color: hsl(var(--destructive-foreground));
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--destructive) / 0.9);
    }
  }
  
  // Outline variant
  &--variant-outline {
    border: 1px solid hsl(var(--border));
    background-color: hsl(var(--background));
    color: hsl(var(--foreground));
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  }
  
  // Secondary variant
  &--variant-secondary {
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--secondary) / 0.8);
    }
  }
  
  // Ghost variant
  &--variant-ghost {
    background-color: transparent;
    color: hsl(var(--foreground));
    
    &:hover:not(.shadcn-button--disabled) {
      background-color: hsl(var(--accent));
      color: hsl(var(--accent-foreground));
    }
  }
  
  // Link variant
  &--variant-link {
    background-color: transparent;
    color: hsl(var(--primary));
    text-decoration: underline;
    text-underline-offset: 4px;
    
    &:hover:not(.shadcn-button--disabled) {
      text-decoration: underline;
    }
  }

  // Icônes
  &__left-icon, &__right-icon, &__icon-only {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  
  &__left-icon {
    margin-right: 0.25rem;
  }
  
  &__right-icon {
    margin-left: 0.25rem;
  }
  
  &__icon-only {
    font-size: 1rem;
  }
  
  &__text {
    flex: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  // === TAILLES SHADCN ===
  
  &--size-sm {
    height: 2.25rem;
    padding: 0 0.75rem;
    font-size: 0.875rem;
    gap: 0.375rem;
    border-radius: 0.375rem;
    
    .shadcn-button__left-icon, .shadcn-button__right-icon, .shadcn-button__icon-only {
      font-size: 0.875rem;
      width: 0.875rem;
      height: 0.875rem;
    }
  }
  
  &--size-default {
    height: 2.5rem;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    gap: 0.5rem;
    border-radius: 0.375rem;
    
    .shadcn-button__left-icon, .shadcn-button__right-icon, .shadcn-button__icon-only {
      font-size: 1rem;
      width: 1rem;
      height: 1rem;
    }
  }
  
  &--size-lg {
    height: 2.75rem;
    padding: 0.5rem 2rem;
    font-size: 1rem;
    gap: 0.625rem;
    border-radius: 0.375rem;
    
    .shadcn-button__left-icon, .shadcn-button__right-icon, .shadcn-button__icon-only {
      font-size: 1.125rem;
      width: 1.125rem;
      height: 1.125rem;
    }
  }
  
  &--size-icon {
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
    min-width: 2.5rem;
    gap: 0;
    border-radius: 0.375rem;
    
    .shadcn-button__icon-only {
      font-size: 1rem;
      width: 1rem;
      height: 1rem;
    }
  }
  
  // États hover (améliorés)
  &:hover:not(.shadcn-button--disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  // États actifs
  &:active:not(.shadcn-button--disabled) {
    transform: translateY(0);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  // Mode édition spécifique
  &--editing {
    cursor: pointer;
    
    &:hover {
      outline: 2px dashed hsl(var(--primary));
      outline-offset: 2px;
    }
  }
}

// Mode sombre (respecte le design system Shadcn)
@media (prefers-color-scheme: dark) {
  .shadcn-button {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
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
    --ring: 212.7 26.8% 83.9%;
  }
}

// ✅ AJOUTÉ: Support responsive Weweb
@media (max-width: 768px) {
  .shadcn-button {
    &--size-lg {
      height: 2.5rem;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    }
  }
}
</style>