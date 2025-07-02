export default {
  editor: {
    label: {
      en: "Shadcn UI Button",
      fr: "Bouton Shadcn UI"
    },
    icon: "fa-regular fa-square",
    customStylePropertiesOrder: [
      ["variant", "size"],
      ["disabled", "type"],
      ["leftIcon", "rightIcon"]
    ],
    customSettingsPropertiesOrder: [
      "text",
      "variant",
      "size",
      "disabled",
      "type",
      "leftIcon",
      "rightIcon"
    ]
  },
  triggerEvents: [
    {
      name: "click",
      label: { en: "On click", fr: "Au clic" },
      event: { value: "" },
      default: true
    }
  ],
  properties: {
    // ===== CONTENU =====
    text: {
      label: { en: "Button text", fr: "Texte du bouton" },
      type: "Text",
      section: "settings",
      options: {
        placeholder: "Click me"
      },
      bindable: true,
      defaultValue: "Button"
    },

    // ===== APPARENCE =====
    variant: {
      label: { en: "Variant", fr: "Variante" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "default", label: { en: "Default (Primary)", fr: "Par défaut (Principal)" } },
          { value: "destructive", label: { en: "Destructive (Danger)", fr: "Destructif (Danger)" } },
          { value: "outline", label: { en: "Outline (Secondary)", fr: "Contour (Secondaire)" } },
          { value: "secondary", label: { en: "Secondary (Muted)", fr: "Secondaire (Sourd)" } },
          { value: "ghost", label: { en: "Ghost (Transparent)", fr: "Fantôme (Transparent)" } },
          { value: "link", label: { en: "Link", fr: "Lien" } }
        ]
      },
      defaultValue: "default"
    },

    size: {
      label: { en: "Size", fr: "Taille" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "sm", label: { en: "Small (36px)", fr: "Petit (36px)" } },
          { value: "default", label: { en: "Default (40px)", fr: "Par défaut (40px)" } },
          { value: "lg", label: { en: "Large (44px)", fr: "Grand (44px)" } },
          { value: "icon", label: { en: "Icon (40×40px)", fr: "Icône (40×40px)" } }
        ]
      },
      defaultValue: "default"
    },

    // ===== COMPORTEMENT =====
    disabled: {
      label: { en: "Disabled", fr: "Désactivé" },
      type: "OnOff",
      section: "settings",
      bindable: true,
      defaultValue: false
    },

    type: {
      label: { en: "Type", fr: "Type" },
      type: "TextSelect",
      section: "settings",
      options: {
        options: [
          { value: "button", label: { en: "Button", fr: "Bouton" } },
          { value: "submit", label: { en: "Submit", fr: "Soumettre" } },
          { value: "reset", label: { en: "Reset", fr: "Réinitialiser" } }
        ]
      },
      defaultValue: "button"
    },

    // ===== ICÔNES =====
    leftIcon: {
      label: { en: "Left icon", fr: "Icône gauche" },
      type: "Element",
      section: "settings",
      options: {
        placeholder: "Select an icon"
      },
      bindable: true
    },

    rightIcon: {
      label: { en: "Right icon", fr: "Icône droite" },
      type: "Element",
      section: "settings",
      options: {
        placeholder: "Select an icon"
      },
      bindable: true
    }
  }
};
