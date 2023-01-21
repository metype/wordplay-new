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
    closeMethod : Function,
  },
};
</script>

<style scoped>
.modal {
  width: 40rem;
  max-height: 90vh;
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
