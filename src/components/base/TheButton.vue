<template>
  <a
    v-if="href"
    :class="[outline ? 'lola-button--outline' : '', 
      color ? `lola-button--${color}` : 'lola-button--primary', 
      'lola-button'
    ]"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
    :href="href"
    :target="target"
  >
    {{ label }}
  </a>
  <button
    v-else
    :class="[outline ? 'lola-button--outline' : '',
      color ? `lola-button--${color}` : 'lola-button--primary', 
      'lola-button'
    ]"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
    :type="type"
    @click="doSomething()"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  ariaLabel: { type: String },
  color: { type: String },
  disabled: { type: Boolean, default: false },
  href: { type: String },
  label: { type: String, required: true },
  outline: { type: Boolean, default: false },
  target: { type: String, default: "_self" },
  type: { type: String, default: "button" },
});

function doSomething(): void {
  console.log("button clicked");
}
</script>

<style scoped>
.lola-button {
  border: 2px solid var(--primary);
  border-radius: var( --border-radius);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: inline-block;
  font-size: 1rem;
  line-height: 1.25;
  padding: .5rem .75rem;
  max-width: 100%;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  text-transform: uppercase;
  transition: 0.5s ease-in-out;
  white-space: nowrap;
}

.lola-button--primary:not(.lola-button--outline) {
  background-color: var(--primary);
}

.lola-button--primary:not(.lola-button--outline):not([aria-disabled="true"]):hover,
.lola-button--primary:not([aria-disabled="true"]):not(.lola-button--outline):focus {
  background-color: var(--primary-light);
  border-color: var(--primary-light);
}

.lola-button--success:not(.lola-button--outline) {
  background-color: var(--success);
  border: 2px solid var(--success);
}

.lola-button--success:not(.lola-button--outline):hover,
.lola-button--success:not(.lola-button--outline):focus {
  background-color: var(--success-dark);
  border: 2px solid var(--success-dark);
}

.lola-button--error:not(.lola-button--outline) {
  background-color: var(--error);
  border: 2px solid var(--error);
}

.lola-button--error:not(.lola-button--outline):hover,
.lola-button--error:not(.lola-button--outline):focus {
  background-color: var(--error-dark);
  border: 2px solid var(--error-dark);
}

.lola-button:not([aria-disabled="true"]) {
  cursor: pointer;
}

.lola-button[aria-disabled="true"] {
  opacity: 0.5;
}

.lola-button:not(.lola-button--outline) {
  color: var(--light);
}

.lola-button--outline {
  background-color: var(--light);
  border-color: 2px solid var(--primary);
  color: var(--primary);
  font-weight: bold;
}

.lola-button--outline:hover:not([aria-disabled="true"]),
.lola-button--outline:focus:not([aria-disabled="true"]) {
  border-style: dashed;
}
</style>
