export default {
  editor: {
    label: {
      en: 'Shadcn Button',
      fr: 'Bouton Shadcn',
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
    text: {
      label: { en: 'Button Text', fr: 'Texte du bouton' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'Button',
    },
    variant: {
      label: { en: 'Variant', fr: 'Variante' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'destructive', label: { en: 'Destructive', fr: 'Destructif' } },
          { value: 'outline', label: { en: 'Outline', fr: 'Contour' } },
          { value: 'secondary', label: { en: 'Secondary', fr: 'Secondaire' } },
          { value: 'ghost', label: { en: 'Ghost', fr: 'Fantôme' } },
          { value: 'link', label: { en: 'Link', fr: 'Lien' } },
        ],
      },
      defaultValue: 'default',
    },
    size: {
      label: { en: 'Size', fr: 'Taille' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'sm', label: { en: 'Small', fr: 'Petit' } },
          { value: 'default', label: { en: 'Default', fr: 'Par défaut' } },
          { value: 'lg', label: { en: 'Large', fr: 'Grand' } },
          { value: 'icon', label: { en: 'Icon Only', fr: 'Icône seule' } },
        ],
      },
      defaultValue: 'default',
    },
    buttonType: {
      label: { en: 'Button Type', fr: 'Type de bouton' },
      type: 'TextSelect',
      section: 'settings',
      options: {
        options: [
          { value: 'button', label: { en: 'Button', fr: 'Bouton' } },
          { value: 'submit', label: { en: 'Submit', fr: 'Soumettre' } },
          { value: 'reset', label: { en: 'Reset', fr: 'Réinitialiser' } },
        ],
      },
      defaultValue: 'button',
    },
    disabled: {
      label: { en: 'Disabled', fr: 'Désactivé' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: false,
    },
    hasLeftIcon: {
      label: { en: 'Left Icon', fr: 'Icône gauche' },
      type: 'OnOff',
      section: 'style',
      defaultValue: false,
    },
    leftIcon: {
      label: { en: 'Left Icon Class', fr: 'Classe icône gauche' },
      type: 'Text',
      section: 'style',
      bindable: true,
      defaultValue: 'wwi wwi-add-circle',
      hidden: (content) => !content.hasLeftIcon,
    },
    hasRightIcon: {
      label: { en: 'Right Icon', fr: 'Icône droite' },
      type: 'OnOff',
      section: 'style',
      defaultValue: false,
    },
    rightIcon: {
      label: { en: 'Right Icon Class', fr: 'Classe icône droite' },
      type: 'Text',
      section: 'style',
      bindable: true,
      defaultValue: 'wwi wwi-arrow-right',
      hidden: (content) => !content.hasRightIcon,
    },
    iconOnly: {
      label: { en: 'Icon Only Class', fr: 'Classe icône seule' },
      type: 'Text',
      section: 'style',
      bindable: true,
      defaultValue: 'wwi wwi-edit',
      hidden: (content) => content.size !== 'icon',
    },
    link: {
      label: { en: 'Link', fr: 'Lien' },
      type: 'Link',
      section: 'settings',
      bindable: true,
    },
    value: {
      label: { en: 'Value', fr: 'Valeur' },
      type: 'Text',
      section: 'settings',
      bindable: true,
    },
  },
};