<template>
  <v-btn
    class="settings-icon"
    variant="text"
    icon="mdi-cog"
    color="white-lighten-2"
    rounded="pill"
  >
    <v-icon class="icon">mdi-cog</v-icon>
    <h4 class="description">Settings</h4>
  </v-btn>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.settings-icon:hover .icon {
  padding-left: 1.5rem;
  margin-right: 0.75rem;
}

.settings-icon {
  position: absolute;
  top: 0;
  left: 0;
}

.settings-icon:hover {
  width: auto;
}

.settings-icon .description {
  width: 0;
  white-space: nowrap;
  overflow: hidden;
}

.settings-icon:hover .description {
  width: 6.5rem;
  padding-left: 0;
  animation: type 400ms ease;
}

@keyframes type {
  from {
    width: 0;
  }
}
</style>
