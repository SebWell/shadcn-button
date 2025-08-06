export default {
  editor: {
    label: {
      en: "Shadcn UI Button",
      fr: "Bouton Shadcn UI"
    },
    icon: "fa-regular fa-square",
    bubble: {
      icon: "button",
      tooltip: { 
        en: "Shadcn UI Button Component", 
        fr: "Composant Bouton Shadcn UI" 
      }
    },
    customStylePropertiesOrder: [
      ["variant", "size"],
      ["primaryColor", "primaryForeground"],
      ["disabled", "loading"],
      ["showIcon", "iconName"]
    ],
    customSettingsPropertiesOrder: [
      "text",
      "variant", 
      "size",
      ["primaryColor", "primaryForeground"],
      ["destructiveColor", "destructiveForeground"], 
      ["secondaryColor", "secondaryForeground"],
      "borderColor",
      "showIcon",
      "iconName",
      "loading",
      "loadingText",
      "disabled"
    ]
  },
  options: {
    autoByContent: false,
    sizable: true,
    hyperlink: true
  },
  triggerEvents: [
    {
      name: "trigger-event",
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
      section: "content",
      options: {
        placeholder: "Click me"
      },
      bindable: true,
      defaultValue: "Button"
    },

    // ===== PALETTE COULEURS =====
    primaryColor: {
      label: { en: "Primary color", fr: "Couleur principale" },
      type: "Color",
      section: "style",
      defaultValue: "hsl(222.2, 47.4%, 11.2%)",
      bindable: true
    },

    primaryForeground: {
      label: { en: "Primary text color", fr: "Couleur texte principal" },
      type: "Color", 
      section: "style",
      defaultValue: "hsl(210, 40%, 98%)",
      bindable: true
    },

    destructiveColor: {
      label: { en: "Destructive color", fr: "Couleur destructive" },
      type: "Color",
      section: "style", 
      defaultValue: "hsl(0, 84.2%, 60.2%)",
      bindable: true
    },

    destructiveForeground: {
      label: { en: "Destructive text color", fr: "Couleur texte destructif" },
      type: "Color",
      section: "style",
      defaultValue: "hsl(210, 40%, 98%)",
      bindable: true
    },

    secondaryColor: {
      label: { en: "Secondary color", fr: "Couleur secondaire" },
      type: "Color",
      section: "style",
      defaultValue: "hsl(210, 40%, 96%)",
      bindable: true
    },

    secondaryForeground: {
      label: { en: "Secondary text color", fr: "Couleur texte secondaire" },
      type: "Color", 
      section: "style",
      defaultValue: "hsl(222.2, 84%, 4.9%)",
      bindable: true
    },

    borderColor: {
      label: { en: "Border color", fr: "Couleur bordure" },
      type: "Color",
      section: "style",
      defaultValue: "hsl(214.3, 31.8%, 91.4%)",
      bindable: true
    },

    // ===== STYLE =====
    variant: {
      label: { en: "Variant", fr: "Variante" },
      type: "TextSelect",
      section: "style",
      options: {
        options: [
          { value: "default", label: { en: "Default (Primary)", fr: "Par défaut (Principal)" } },
          { value: "destructive", label: { en: "Destructive (Danger)", fr: "Destructif (Danger)" } },
          { value: "outline", label: { en: "Outline (Border)", fr: "Contour (Bordure)" } },
          { value: "secondary", label: { en: "Secondary (Muted)", fr: "Secondaire (Sourd)" } },
          { value: "ghost", label: { en: "Ghost (Transparent)", fr: "Fantôme (Transparent)" } },
          { value: "link", label: { en: "Link (Underlined)", fr: "Lien (Souligné)" } },
          { value: "icon", label: { en: "Icon Only", fr: "Icône seule" } },
          { value: "loading", label: { en: "Loading State", fr: "État de chargement" } }
        ]
      },
      defaultValue: "default"
    },

    size: {
      label: { en: "Size", fr: "Taille" },
      type: "TextSelect",
      section: "style",
      options: {
        options: [
          { value: "sm", label: { en: "Small (36px)", fr: "Petit (36px)" } },
          { value: "default", label: { en: "Default (40px)", fr: "Par défaut (40px)" } },
          { value: "lg", label: { en: "Large (44px)", fr: "Grand (44px)" } }
        ]
      },
      defaultValue: "default"
    },

    // ===== LOADING STATE =====
    loading: {
      label: { en: "Loading state", fr: "État de chargement" },
      type: "OnOff",
      section: "behavior",
      bindable: true,
      defaultValue: false
    },

    loadingText: {
      label: { en: "Loading text", fr: "Texte de chargement" },
      type: "Text",
      section: "content",
      options: {
        placeholder: "Loading..."
      },
      bindable: true,
      defaultValue: "Loading...",
      hidden: content => !content.loading
    },

    // ===== ICÔNE LUCIDE =====
    showIcon: {
      label: { en: "Show icon", fr: "Afficher l'icône" },
      type: "OnOff",
      section: "content",
      defaultValue: false,
      bindable: true,
      hidden: content => content.loading
    },

    iconName: {
      label: { en: "Icon name", fr: "Nom de l'icône" },
      type: "Text",
      section: "content",
      options: {
        placeholder: "home, star, heart, trash, settings, search..."
      },
      bindable: true,
      hidden: content => !content.showIcon || content.loading
    },

    // ===== COMPORTEMENT =====
    disabled: {
      label: { en: "Disabled state", fr: "État désactivé" },
      type: "OnOff",
      section: "behavior",
      bindable: true,
      defaultValue: false
    }
  }
};