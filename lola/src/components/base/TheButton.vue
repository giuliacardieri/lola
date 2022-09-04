<template>
  <a
    v-if="href"
    :class="[outline ? 'lola-button--outline' : '', 'lola-button']"
    :disabled="disabled"
    :href="href"
    :target="target"
  >
    {{ label }}
  </a>
  <button
    v-else
    :class="[outline ? 'lola-button--outline' : '', 'lola-button']"
    :disabled="disabled"
    :type="type"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  outline: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  href: { type: String },
  target: { type: String, default: "_self" },
  type: { type: String, default: "button" },
  label: { type: String, required: true },
});
</script>

<style scoped>
.lola-button {
  border: 2px solid var(--primary);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 1rem;
  line-height: 1.25;
  padding: 0.75rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
}

.lola-button:not(:disabled) {
  cursor: pointer;
}

.lola-button:disabled {
  opacity: 0.5;
}

.lola-button:not(.lola-button--outline) {
  background-color: var(--primary);
  color: var(--light);
}

.lola-button:not(.lola-button--outline):not(:disabled):hover,
.lola-button:not(:disabled):not(.lola-button--outline):focus {
  background-color: var(--primary-light);
  border-color: var(--primary-light);
}

.lola-button--outline {
  background-color: var(--light);
  border-color: 2px solid var(--primary);
  color: var(--primary);
  font-weight: bold;
}

.lola-button--outline:hover:not(:disabled),
.lola-button--outline:focus:not(:disabled) {
  border-style: dashed;
}
</style>
