export default {
  editor: {
    label: {
      en: "Simple Button",
      fr: "Bouton Simple"
    },
    icon: "cursor-pointer"
  },
  triggerEvents: [
    { 
      name: "click",
      label: { en: "On click", fr: "Au clic" },
      event: { value: "click" }
    }
  ],
  properties: {
    text: {
      label: {
        en: "Button text",
        fr: "Texte du bouton"
      },
      type: "Text",
      bindable: true,
      defaultValue: "Button"
    },
    disabled: {
      label: {
        en: "Disabled",
        fr: "Désactivé"
      },
      type: "OnOff",
      defaultValue: false,
      bindable: true
    }
  }
};
