<template>
  <h1>Buttons</h1>
  <section class="buttons">
    <div class="buttons__group">
      <h2>Default</h2>
      <the-button label="Button" />
    </div>
    <div class="buttons__group">
      <h2>Default with huge text</h2>
      <the-button
        label="ButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButton"
      />
    </div>
    <div class="buttons__group">
      <h2>Default with Link</h2>
      <the-button label="Button" href="https://dinokiki.com" />
    </div>
    <div class="buttons__group">
      <h2>Default Disabled</h2>
      <the-button label="Button" disabled />
    </div>
    <div class="buttons__group">
      <h2>Outline</h2>
      <the-button label="Button" outline="true" />
    </div>
    <div class="buttons__group">
      <h2>Outline Disabled</h2>
      <the-button label="Button" outline="true" disabled />
    </div>
  </section>
</template>

<script setup lang="ts">
import TheButton from "@/components/base/TheButton.vue";
</script>

<style scoped>
@media (min-width: 993px) {
  .buttons {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(4, minmax(0px, 25%));
  }
}
</style>
