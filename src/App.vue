<script setup lang="ts">
import StatsIcon from "./components/StatsIcon.vue";
import SettingsIcon from "./components/SettingsIcon.vue";
import StatsModal from "./components/StatsModal.vue";
import SettingsModal from "./components/SettingsModal.vue";
import WordplayTitle from "./components/WordplayTitle.vue";
</script>

<template>
  <v-app class="app">
    <header>
      <WordplayTitle />
      <SettingsIcon @click="openSettings" />
      <StatsIcon @click="openStats" />
    </header>




    <div v-if="settingsOpen">
      <div class="outside" @click="closeSettings"></div>
      <SettingsModal :class="settingsClosing ? `closed` : ``" :closeMethod="closeSettings" />
    </div>
    <div v-else-if="statsOpen">
      <div class="outside" @click="closeStats"></div>
      <StatsModal :class="statsClosing ? `closed` : ``" :closeMethod="closeStats"/>
    </div>
  </v-app>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

export default {
  mounted: function() {
    const theme = useTheme();
    const vals : Object = {
      "wins" : 0,
      "losses": 0,
      "theme": "dark"
    }

    let val: keyof typeof vals
    for (val in vals) {
      if(localStorage.getItem(val) == null){
        localStorage.setItem(val, vals[val].toString());
      }
    }

    const setTheme = (themeName: string) => {
      theme.global.name.value = themeName;
      localStorage.setItem("theme", themeName);
    };

    setTheme(localStorage.getItem("theme")!);
  },
  data() {
    return {
      settingsOpen: false,
      statsOpen: false,
      settingsClosing: false,
      statsClosing: false,
    };
  },
  methods: {
    openSettings: function () {
      this.settingsOpen = true;
    },
    openStats: function () {
      this.statsOpen = true;
    },
    closeSettings: function () {
      console.log(this);
      this.settingsClosing = true;
      setTimeout(() => {
        this.settingsOpen = false;
        this.settingsClosing = false;
      }, 300);
    },
    closeStats: function () {
      this.statsClosing = true;
      setTimeout(() => {
        this.statsOpen = false;
        this.statsClosing = false;
      }, 300);
    },
  },
};
</script>

<style scoped>
body,
html {
  overflow: hidden;
}

.app {
  width: 100vw;
  height: 100vh;
  margin-left: 0;
}

.outside {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
}

.modal {
  user-select: none;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  animation: flyup 300ms ease-out;
}

.modal.closed {
  top: 100vh;
  animation: flydown 300ms ease-in;
}

@keyframes flyup {
  0% {
    top: 100vh;
  }
}

@keyframes flydown {
  0% {
    top: 0;
  }
}
</style>
