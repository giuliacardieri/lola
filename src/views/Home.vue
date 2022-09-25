<template>
  <h1>Home examples</h1>
  <section class="home__section">
    <h2>Buttons</h2>
    <div class="buttons">
      <div class="buttons__group">
        <h3>Default</h3>
        <the-button label="Button" />
      </div>
      <div class="buttons__group">
        <h3>Default with huge text</h3>
        <the-button
          label="ButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButtonButton"
        />
      </div>
      <div class="buttons__group">
        <h3>Default with Link</h3>
        <the-button label="Button" href="https://dinokiki.com" />
      </div>
      <div class="buttons__group">
        <h3>Default Disabled</h3>
        <the-button label="Button" disabled />
      </div>
      <div class="buttons__group">
        <h3>Outline</h3>
        <the-button label="Button" outline="true" />
      </div>
      <div class="buttons__group">
        <h3>Outline Disabled</h3>
        <the-button label="Button" outline="true" disabled />
      </div>
    </div>
    <h2>Accordions</h2>
    <accordion title="Accordion title">
      Accordion content. Lorem ipsum dolor sit amet.
    </accordion>
    <accordion title="Accordion title 2">
      More accordion content. Lorem ipsum dolor sit amet.
    </accordion>
  </section>
</template>

<script setup lang="ts">
import Accordion from "@/components/base/Accordion.vue";
import TheButton from "@/components/base/TheButton.vue";
</script>

<style scoped>
.home__section * + h2 {
  margin-top: 2rem;
}

@media (min-width: 993px) {
  .buttons {
    display: grid;
    gap: 32px;
    grid-template-columns: repeat(3, minmax(0px, 33%));
  }
}
</style>
