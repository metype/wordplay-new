<template>
  <v-container class="px-0" fluid>
    <v-radio-group v-model="radioGroup">
      <v-radio :label="`Dark`" value="dark" @click="setTheme('dark')"></v-radio>
      <v-radio
        :label="`Light`"
        value="light"
        @click="setTheme('light')"
      ></v-radio>
      <v-radio
        :label="`Light (High Contrast)`"
        value="highContrast"
        @click="setTheme('highContrast')"
      ></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  setup() {
    const theme = useTheme();

    if (localStorage.getItem("theme") == undefined) {
      localStorage.setItem("theme", "dark");
    }

    const setTheme = (themeName: string) => {
      theme.global.name.value = themeName;
      localStorage.setItem("theme", themeName);
    };

    setTheme(localStorage.getItem("theme")!);

    return {
      theme,
      setTheme,
    };
  },
  data() {
    return {
      radioGroup: localStorage.getItem("theme"),
    };
  },
};
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
