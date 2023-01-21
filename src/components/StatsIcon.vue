<template>
  <v-btn
    class="stats-icon"
    variant="text"
    icon="mdi-chart-box"
    color="white-lighten-2"
    rounded="pill"
  >
    <h4 class="description">Statistics</h4>
    <v-icon class="icon">mdi-chart-box</v-icon>
  </v-btn>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.stats-icon:hover .icon {
  padding-right: 1.5rem;
}

.stats-icon {
  position: absolute;
  top: 0;
  right: 0;
}

.stats-icon .description {
  width: 0;
  white-space: nowrap;
  overflow: hidden;
}

.stats-icon:hover {
  width: auto;
}

.stats-icon:hover .description {
  width: 9rem;
  animation: type 400ms ease;
}

@keyframes type {
  from {
    width: 0;
  }
}
</style>
