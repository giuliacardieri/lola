<template>
  <the-header></the-header>
  <main class="lola-main">
    <router-view />
  </main>
</template>

<script setup lang="ts">
import TheHeader from "@/components/base/TheHeader.vue";
</script>

<style>
@import "./css/base.css";
@import "./css/typography.css";
</style>
