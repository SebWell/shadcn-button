<template>
  <button 
    :class="'test-btn test-btn--' + (content.variant || 'default')"
    :disabled="content.disabled"
    @click="handleClick"
  >
    <span v-if="content.text">{{ content.text }}</span>
  </button>
</template>

<script>
export default {
  props: {
    content: { type: Object, required: true },
  },
  emits: ["trigger-event"],
  methods: {
    handleClick() {
      console.log("Button clicked in test mode:", this.content);
      this.$emit("trigger-event", {
        name: "click",
        event: { value: this.content }
      });
    }
  }
};
</script>

<style>
.test-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f5f5f5;
  color: #333;
  cursor: pointer;
  font-family: Arial, sans-serif;
}

.test-btn--default {
  background: #000;
  color: #fff;
  border-color: #000;
}

.test-btn--destructive {
  background: #dc2626;
  color: #fff;
  border-color: #dc2626;
}

.test-btn--outline {
  background: transparent;
  color: #000;
  border-color: #ccc;
}

.test-btn:hover {
  opacity: 0.8;
}

.test-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
