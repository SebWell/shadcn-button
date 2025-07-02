export default {
  editor: {
    label: {
      en: "Shadcn Button",
      fr: "Bouton Shadcn"
    },
    icon: "fontawesome/solid/mouse-pointer",
    bubble: {
      icon: "fontawesome/solid/mouse-pointer"
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
      section: "settings"
    },
    variant: {
      label: {
        en: "Variant",
        fr: "Variante"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "destructive", label: { en: "Destructive", fr: "Destructeur" } },
          { value: "outline", label: { en: "Outline", fr: "Contour" } },
          { value: "secondary", label: { en: "Secondary", fr: "Secondaire" } },
          { value: "ghost", label: { en: "Ghost", fr: "Fantôme" } },
          { value: "link", label: { en: "Link", fr: "Lien" } },
        ]
      },
      defaultValue: "default",
      section: "settings"
    },
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "sm", label: { en: "Small", fr: "Petit" } },
          { value: "default", label: { en: "Default", fr: "Par défaut" } },
          { value: "lg", label: { en: "Large", fr: "Grand" } },
          { value: "icon", label: { en: "Icon", fr: "Icône" } },
        ]
      },
      defaultValue: "default",
      section: "settings"
    },
    disabled: {
      label: {
        en: "Disabled",
        fr: "Désactivé"
      },
      type: "OnOff",
      defaultValue: false,
      section: "settings"
    },
    type: {
      label: { en: "Type", fr: "Type" },
      type: "TextSelect",
      options: {
        options: [
          { value: "button", label: { en: "Button", fr: "Bouton" } },
          { value: "submit", label: { en: "Submit", fr: "Soumettre" } },
          { value: "reset", label: { en: "Reset", fr: "Réinitialiser" } },
        ],
      },
      defaultValue: "button",
      section: "settings"
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
      section: "design"
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
      section: "design"
    },
  }
};
