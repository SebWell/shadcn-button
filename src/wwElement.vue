<template>
  <button 
    :class="computedClasses"
    :disabled="content.disabled"
    @click="handleClick"
    :type="content.type || 'button'"
  >
    <wwElement 
      v-if="content.leftIcon" 
      v-bind="content.leftIcon" 
      class="button-icon left-icon"
    />
    <span v-if="content.text" class="button-text">{{ content.text }}</span>
    <wwElement 
      v-if="content.rightIcon" 
      v-bind="content.rightIcon" 
      class="button-icon right-icon"
    />
  </button>
</template>

<script>
console.log('🚀 SHADCN BUTTON SCRIPT LOADED!');

export default {
  name: "ShadcnButton",
  props: {
    content: { type: Object, required: true },
    /* wwEditor:start */
    wwEditorState: { type: Object, required: true },
    /* wwEditor:end */
  },
  emits: ["trigger-event"],
  created() {
    console.log('🎯 SHADCN BUTTON CREATED!', this.content);
  },
  computed: {
    computedClasses() {
      const variant = this.content.variant || 'default';
      const size = this.content.size || 'default';
      
      const baseClasses = ['shadcn-btn'];
      const variantClass = `shadcn-btn--${variant}`;
      const sizeClass = `shadcn-btn--${size}`;
      
      return [
        ...baseClasses,
        variantClass,
        sizeClass
      ].join(' ');
    }
  },
  methods: {
    handleClick() {
      this.$emit("trigger-event", {
        name: "click",
        event: { value: this.content }
      });
    }
  }
};
</script>

<style>
/* DEBUG: CSS LOADED */
.shadcn-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 40px;
  padding: 0 16px;
  background-color: #1a1a1a !important;
  color: white !important;
  border: 1px solid #1a1a1a;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s;
}

/* Debug styles - minimum pour voir si ça marche */
.shadcn-btn--destructive {
  background-color: #dc2626 !important;
}

.shadcn-btn--outline {
  background-color: transparent !important;
  border: 2px solid #1a1a1a !important;
  color: #1a1a1a !important;
}
</style>