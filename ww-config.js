export default {
  editor: {
    label: {
      en: 'Shadcn/UI Button',
      fr: 'Bouton Shadcn/UI',
    },
    icon: 'cursor-pointer',
    customStylePropertiesOrder: [
      'variant',
      'size',
      ['hasLeftIcon', 'leftIcon'],
      ['hasRightIcon', 'rightIcon'],
      'iconOnly',
      'disabled',
      'buttonType',
    ],
    customSettingsPropertiesOrder: [
      'text',
      'link',
      'value',
    ],
  },
  options: {
    displayAllowedValues: ['flex', 'inline-flex'],
  },
  states: ['focus', 'hover', 'active', 'disabled'],
  
  // ✅ CORRIGÉ: Événements simplifiés (standard Weweb)
  triggerEvents: [
    { 
      name: 'click', 
      label: { en: 'On Click', fr: 'Au clic' }, 
      event: { value: '' },
      default: true 
    }
  ],
  
  properties: {
    // ✅ OPTIMISÉ: Texte avec validation
    text: {
      label: { en: 'Button Text', fr: 'Texte du bouton' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'Button',
      options: {
        placeholder: 'Enter button text...',
      },
    },
    
    // ✅ OPTIMISÉ: Variantes avec descriptions
    variant: {
      label: { en: 'Variant', fr: 'Variante' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { 
            value: 'default', 
            label: { en: 'Default', fr: 'Par défaut' },
            icon: 'cursor-pointer'
          },
          { 
            value: 'destructive', 
            label: { en: 'Destructive', fr: 'Destructif' },
            icon: 'trash'
          },
          { 
            value: 'outline', 
            label: { en: 'Outline', fr: 'Contour' },
            icon: 'border-style'
          },
          { 
            value: 'secondary', 
            label: { en: 'Secondary', fr: 'Secondaire' },
            icon: 'cursor-pointer'
          },
          { 
            value: 'ghost', 
            label: { en: 'Ghost', fr: 'Fantôme' },
            icon: 'ghost'
          },
          { 
            value: 'link', 
            label: { en: 'Link', fr: 'Lien' },
            icon: 'link'
          },
        ],
      },
      defaultValue: 'default',
    },
    
    // ✅ OPTIMISÉ: Tailles avec icônes
    size: {
      label: { en: 'Size', fr: 'Taille' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { 
            value: 'sm', 
            label: { en: 'Small', fr: 'Petit' },
            icon: 'minimize'
          },
          { 
            value: 'default', 
            label: { en: 'Default', fr: 'Par défaut' },
            icon: 'square'
          },
          { 
            value: 'lg', 
            label: { en: 'Large', fr: 'Grand' },
            icon: 'maximize'
          },
          { 
            value: 'icon', 
            label: { en: 'Icon Only', fr: 'Icône seule' },
            icon: 'image'
          },
        ],
      },
      defaultValue: 'default',
    },
    
    // ✅ OPTIMISÉ: Type de bouton avec descriptions
    buttonType: {
      label: { en: 'Button Type', fr: 'Type de bouton' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { 
            value: 'button', 
            label: { en: 'Button', fr: 'Bouton' },
            description: { en: 'Regular button', fr: 'Bouton normal' }
          },
          { 
            value: 'submit', 
            label: { en: 'Submit', fr: 'Soumettre' },
            description: { en: 'Submit form', fr: 'Soumettre le formulaire' }
          },
          { 
            value: 'reset', 
            label: { en: 'Reset', fr: 'Réinitialiser' },
            description: { en: 'Reset form', fr: 'Réinitialiser le formulaire' }
          },
        ],
      },
      defaultValue: 'button',
    },
    
    // ✅ État désactivé
    disabled: {
      label: { en: 'Disabled', fr: 'Désactivé' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: false,
    },
    
    // ✅ OPTIMISÉ: Icône gauche avec meilleure UX
    hasLeftIcon: {
      label: { en: 'Left Icon', fr: 'Icône gauche' },
      type: 'OnOff',
      section: 'style',
      defaultValue: false,
    },
    leftIcon: {
      label: { en: 'Left Icon Class', fr: 'Classe icône gauche' },
      type: 'Icon',
      section: 'style',
      bindable: true,
      defaultValue: 'wwi wwi-add-circle',
      hidden: (content) => !content.hasLeftIcon,
      options: {
        placeholder: 'e.g., wwi wwi-add-circle or fas fa-plus',
      },
    },
    
    // ✅ OPTIMISÉ: Icône droite
    hasRightIcon: {
      label: { en: 'Right Icon', fr: 'Icône droite' },
      type: 'OnOff',
      section: 'style',
      defaultValue: false,
    },
    rightIcon: {
      label: { en: 'Right Icon Class', fr: 'Classe icône droite' },
      type: 'Icon',
      section: 'style',
      bindable: true,
      defaultValue: 'wwi wwi-arrow-right',
      hidden: (content) => !content.hasRightIcon,
      options: {
        placeholder: 'e.g., wwi wwi-arrow-right or fas fa-arrow-right',
      },
    },
    
    // ✅ OPTIMISÉ: Icône seule (pour size='icon')
    iconOnly: {
      label: { en: 'Icon Only Class', fr: 'Classe icône seule' },
      type: 'Icon',
      section: 'style',
      bindable: true,
      defaultValue: 'wwi wwi-edit',
      hidden: (content) => content.size !== 'icon',
      options: {
        placeholder: 'e.g., wwi wwi-edit or fas fa-edit',
      },
    },
    
    // ✅ Lien/Action
    link: {
      label: { en: 'Link', fr: 'Lien' },
      type: 'Link',
      section: 'settings',
      bindable: true,
    },
    
    // ✅ OPTIMISÉ: Valeur personnalisée
    value: {
      label: { en: 'Custom Value', fr: 'Valeur personnalisée' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      options: {
        placeholder: 'Optional custom value for events',
      },
    },
  },
};