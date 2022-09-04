<template>
  <header class="lola-header">
    <img src="@/assets/lola-logo.svg" alt="Lola, a white dog" />
    <h1 class="lola-header__h1">Lola</h1>
  </header>
</template>

<style scoped>
.lola-header {
  background-color: var(--primary);
  color: var(--light);
  display: flex;
  gap: 8px;
  padding: 1rem 2rem;
}

.lola-header__h1 {
  margin: 0;
}
</style>
