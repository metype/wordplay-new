<script setup lang="ts">
import ThemeToggle from "./ThemeToggle.vue";
</script>

<template>
  <v-card class="modal">
    <h2 class="heading">Settings</h2>
    <v-btn
      class="close-button"
      variant="text"
      icon="mdi-close"
      color="white-lighten-2"
      @click="closeMethod"
    />
    <div class="content">
      <h3 class="heading">Theme</h3>
      <ThemeToggle />
    </div>
  </v-card>
</template>

<script lang="ts">
export default {
  props: {
    closeMethod : Function
  },
};
</script>

<style scoped>
.modal {
  max-width: min(40rem, 80vw);
  max-height: 90vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

.content {
  margin-left: 1rem;
  max-height: calc(100% - 2.5rem);
  padding-bottom: 1rem;
  overflow-y: scroll;
}

h2.heading {
  margin-top: .5rem;
  width: 100%;
  text-align: center;
  height: 2.75rem;
}

.heading {
  margin-top: 1rem;
  width: 80%;
  border-bottom: 1px solid rgb(var(--v-theme-on-background));
  text-align: left;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  height: 3rem;
}
</style>
