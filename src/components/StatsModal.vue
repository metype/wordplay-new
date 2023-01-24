<script setup lang="ts">
import ThemeToggle from "./ThemeToggle.vue";
</script>

<template>
  <v-card class="modal">
    <h2 class="heading">Statistics</h2>
    <v-btn
      class="close-button"
      variant="text"
      icon="mdi-close"
      color="white-lighten-2"
      @click="closeMethod"
    />
    <div class="content">
      <h3 class="heading">Wins</h3>
      <h4>{{ gamesWon }}</h4>
      <h3 class="heading">Losses</h3>
      <h4>{{ gamesLost }}</h4>
      <h3 class="heading">Games Played</h3>
      <h4>{{ gamesPlayed }}</h4>
    </div>
  </v-card>
</template>

<script lang="ts">
  export default {
    props: {
      closeMethod : Function,
    },
    computed: {
      gamesWon : function () {
        return localStorage.getItem("wins")
      },
      gamesLost : function () {
        return localStorage.getItem("losses")
      },
      gamesPlayed : function () {
        // Total games played is games lost and games won combined, this prevents any strange issues with
        // More or less games played than wins + losses, which was possible in older versions
        return parseInt(localStorage.getItem("losses")!) + parseInt(localStorage.getItem("wins")!);
      }
    }
  };
</script>

<style scoped>
.modal {
  width: 20rem;
  max-height: 45vh;
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
