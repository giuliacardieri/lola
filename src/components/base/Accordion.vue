<template>
  <div :class="[ state.isOpen ? 'lola-accordion--open' : '', 'lola-accordion']">
    <button class="lola-accordion__button" 
      :aria-expanded="state.isOpen ? true : false"
      @click="toggleAccordion"
    >
      {{ title }}
      <font-awesome-icon class="lola-accordion__icon"
        icon="fa-solid fa-chevron-up"
      />
    </button>
    <div v-if="state.isOpen" class="lola-accordion__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, reactive } from "vue";
  
  defineProps({
    title: { type: String }
  });

  const state = reactive({ isOpen: false});

  function toggleAccordion() {
    state.isOpen = !state.isOpen
  }
</script>

<style scoped>
.lola-accordion {
  border: 2px dashed transparent;
  border-radius: var(--border-radius);
  max-width: 400px;
  transition: border .3s ease-in-out;
}

.lola-accordion + .lola-accordion {
  margin-top: 1rem;
}

.lola-accordion:hover,
.lola-accordion:focus {
  border: 2px dashed var(--primary);
}

.lola-accordion--open {
  box-shadow: 1px 2px 4px rgba(34, 34, 34, 0.25);
  border: 2px dashed var(--primary);
}


.lola-accordion--open .lola-accordion__icon {
  transform: rotate(180deg);
}

.lola-accordion__icon {
  transition: transform .3s ease-in-out;
}

.lola-accordion__button {
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--primary);
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  justify-content: space-between;
  padding: 1rem;
  width: 100%;
}

.lola-accordion__content {
  padding: 0 1rem 1rem 1rem;
}
</style>