export default {
  editor: {
    label: {
      en: "Shadcn Button",
      fr: "Bouton Shadcn"
    },
    icon: "fontawesome/solid/cursor-pointer",
    bubble: {
      icon: "fontawesome/solid/cursor-pointer"
    }
  },
  triggerEvents: [
    { 
      name: "click",
      label: { en: "On click", fr: "Au clic" },
      event: { value: "click" },
    },
  ],
  properties: {
    text: {
      label: {
        en: "Button text",
        fr: "Texte du bouton"
      },
      type: "Text",
      bindable: true,
      defaultValue: "Button",
      section: "content"
    },
    variant: {
      label: {
        en: "Variant",
        fr: "Variante"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "default", label: { en: "Default (Dark)", fr: "Par défaut (Sombre)" } },
          { value: "destructive", label: { en: "Destructive (Red)", fr: "Destructeur (Rouge)" } },
          { value: "outline", label: { en: "Outline (Border)", fr: "Contour (Bordure)" } },
          { value: "secondary", label: { en: "Secondary (Gray)", fr: "Secondaire (Gris)" } },
          { value: "ghost", label: { en: "Ghost (Transparent)", fr: "Fantôme (Transparent)" } },
          { value: "link", label: { en: "Link (Underlined)", fr: "Lien (Souligné)" } },
        ]
      },
      defaultValue: "default",
      section: "style"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "sm", label: { en: "Small (36px)", fr: "Petit (36px)" } },
          { value: "default", label: { en: "Default (40px)", fr: "Par défaut (40px)" } },
          { value: "lg", label: { en: "Large (44px)", fr: "Grand (44px)" } },
          { value: "icon", label: { en: "Icon only (40×40px)", fr: "Icône seule (40×40px)" } },
        ]
      },
      defaultValue: "default",
      section: "style"
    },
    disabled: {
      label: {
        en: "Disabled",
        fr: "Désactivé"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true,
      section: "behavior"
    },
    type: {
      label: { en: "HTML Type", fr: "Type HTML" },
      type: "TextSelect",
      options: {
        options: [
          { value: "button", label: { en: "Button (Default)", fr: "Bouton (Par défaut)" } },
          { value: "submit", label: { en: "Submit (Form)", fr: "Soumettre (Formulaire)" } },
          { value: "reset", label: { en: "Reset (Form)", fr: "Réinitialiser (Formulaire)" } },
        ],
      },
      defaultValue: "button",
      section: "behavior"
    },
    leftIcon: {
      label: {
        en: "Left Icon",
        fr: "Icône gauche"
      },
      type: "wwObject",
      options: {
        types: ["ww-icon"],
      },
      bindable: true,
      section: "icons"
    },
    rightIcon: {
      label: {
        en: "Right Icon",
        fr: "Icône droite"
      },
      type: "wwObject",
      options: {
        types: ["ww-icon"],
      },
      bindable: true,
      section: "icons"
    },
  }
};
