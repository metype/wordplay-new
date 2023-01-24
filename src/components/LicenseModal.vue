<template>
  <v-card class="modal">
    <h2 class="heading">License Details</h2>
    <v-btn
      class="close-button"
      variant="text"
      icon="mdi-close"
      color="white-lighten-2"
      @click="closeMethod"
    />
    <div class="content">
      <h3 class="heading">License</h3>
      <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank"><h4>https://www.gnu.org/licenses/gpl-3.0.html</h4></a>
      <h3 class="heading">Source Repository</h3>
      <a href="https://github.com/metype/wordplay-new" target="_blank"><h4>https://github.com/metype/wordplay-new</h4></a>
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
  width: 30rem;
  max-height: 25vh;
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

.heading-container {
  margin-top:0;
  position: relative;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  height: 3rem;
}
</style>
