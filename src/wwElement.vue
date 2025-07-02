<template>
  <button 
    class="btn"
    :disabled="content.disabled"
    @click="handleClick"
  >
    {{ content.text || "Button" }}
  </button>
</template>

<script>
export default {
  props: {
    content: { 
      type: Object, 
      required: true 
    },
  },
  emits: ["trigger-event"],
  methods: {
    handleClick() {
      this.$emit("trigger-event", {
        name: "click",
        event: { value: this.content }
      });
    }
  }
}
</script>

<style>
.btn {
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn:hover {
  background: #0056b3;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
