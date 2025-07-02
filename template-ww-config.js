export default {
  // === INFORMATIONS DU COMPOSANT ===
  editor: {
    label: {
      en: "Button Component",
      fr: "Composant Bouton"
    },
    icon: "fontawesome/solid/mouse-pointer",
    bubble: {
      icon: "fontawesome/solid/mouse-pointer"
    }
  },

  // === ÉVÉNEMENTS DÉCLENCHABLES ===
  triggerEvents: [
    { 
      name: "click",
      label: { 
        en: "On click", 
        fr: "Au clic" 
      },
      event: { value: "click" },
    },
    // Ajouter d'autres événements si nécessaire :
    // { 
    //   name: "hover",
    //   label: { en: "On hover", fr: "Au survol" },
    //   event: { value: "hover" },
    // },
  ],

  // === PROPRIÉTÉS CONFIGURABLES ===
  properties: {
    
    // Texte du bouton
    text: {
      label: {
        en: "Button text",
        fr: "Texte du bouton"
      },
      type: "Text",
      bindable: true,
      defaultValue: "Click me",
      section: "settings"
    },

    // Variante du bouton (style)
    variant: {
      label: {
        en: "Variant",
        fr: "Variante"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "primary", label: { en: "Primary", fr: "Principal" } },
          { value: "secondary", label: { en: "Secondary", fr: "Secondaire" } },
          { value: "outline", label: { en: "Outline", fr: "Contour" } },
          // Ajouter d'autres variantes :
          // { value: "danger", label: { en: "Danger", fr: "Danger" } },
          // { value: "success", label: { en: "Success", fr: "Succès" } },
        ]
      },
      defaultValue: "primary",
      section: "settings"
    },

    // Taille du bouton
    size: {
      label: {
        en: "Size",
        fr: "Taille"
      },
      type: "TextSelect",
      options: {
        options: [
          { value: "small", label: { en: "Small", fr: "Petit" } },
          { value: "medium", label: { en: "Medium", fr: "Moyen" } },
          { value: "large", label: { en: "Large", fr: "Grand" } },
        ]
      },
      defaultValue: "medium",
      section: "settings"
    },

    // État désactivé
    disabled: {
      label: {
        en: "Disabled",
        fr: "Désactivé"
      },
      type: "OnOff",
      defaultValue: false,
      section: "settings"
    },

    // Type HTML du bouton
    type: {
      label: { 
        en: "Type", 
        fr: "Type" 
      },
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

    // Icône gauche
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

    // Icône droite
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

    // === PROPRIÉTÉS AVANCÉES (optionnelles) ===
    
    // URL de lien (si bouton = lien)
    // href: {
    //   label: {
    //     en: "Link URL",
    //     fr: "URL du lien"
    //   },
    //   type: "Text",
    //   bindable: true,
    //   section: "settings"
    // },

    // Target du lien
    // target: {
    //   label: {
    //     en: "Target",
    //     fr: "Cible"
    //   },
    //   type: "TextSelect",
    //   options: {
    //     options: [
    //       { value: "_self", label: { en: "Same window", fr: "Même fenêtre" } },
    //       { value: "_blank", label: { en: "New window", fr: "Nouvelle fenêtre" } },
    //     ]
    //   },
    //   defaultValue: "_self",
    //   section: "settings"
    // },
  }
}; 