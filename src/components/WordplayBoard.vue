<template>
  <v-card class="board-background"></v-card>
</template>

<script lang="ts">
  export default {};
</script>

<style scoped>
.board-background {
  user-select: none;
  width: 70vw;
  height: max(calc( 70vw / 2 ), 40vh);
  margin-left: auto;
  margin-right: auto;
}
</style>
