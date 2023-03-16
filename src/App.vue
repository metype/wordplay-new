<script setup lang="ts">
import SnackbarNotification from "./components/SnackbarNotification.vue";
import StatsIcon from "./components/StatsIcon.vue";
import SettingsIcon from "./components/SettingsIcon.vue";
import StatsModal from "./components/StatsModal.vue";
import SettingsModal from "./components/SettingsModal.vue";
import WordplayTitle from "./components/WordplayTitle.vue";
import WordplayBoard from "./components/WordplayBoard.vue";
import LicenseModal from "./components/LicenseModal.vue";
</script>

<template>
  <v-app class="app">
    <header>
      <WordplayTitle />
      <SettingsIcon @click="openSettings" />
      <StatsIcon @click="openStats" />
    </header>
    <WordplayBoard/>
    <SnackbarNotification :text="notificationText"/>
    <div v-if="settingsOpen">
      <div :class="settingsClosing ? `outside closed` : `outside`" @click="closeSettings"></div>
      <SettingsModal :class="settingsClosing ? `closed` : ``" :close-method="closeSettings"/>
    </div>
    <div v-else-if="statsOpen">
      <div :class="statsClosing ? `outside closed` : `outside`" @click="closeStats"></div>
      <StatsModal :class="statsClosing ? `closed` : ``" :closeMethod="closeStats"/>
    </div>
    <div v-else-if="licenseOpen">
      <div :class="licenseClosing ? `outside closed` : `outside`" @click="closeLicense"></div>
      <LicenseModal :class="licenseClosing ? `closed` : ``" :closeMethod="closeLicense"/>
    </div>
    <p class="copyright" title="License Details" @click="openLicense" >
      Copyright (C) 2023 Metype
    </p>
  </v-app>
</template>

<script lang="ts">
import { useTheme } from "vuetify";

type SnackbarNotif = {
  text : string,
  duration : number,
}

export default {
    mounted: function () {
        const theme = useTheme();
        const vals: Object = {
            "wins": 0,
            "losses": 0,
            "theme": "dark"
        };
        let val: keyof typeof vals;
        for (val in vals) {
            if (localStorage.getItem(val) == null) {
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
            licenseOpen: false,
            settingsClosing: false,
            statsClosing: false,
            licenseClosing: false,
            notificationText: "",
            notificationTimeout: 0,
            notificationQueue : [] as SnackbarNotif[]
        };
    },
    methods: {
        openSettings: function () {
            this.settingsOpen = true;
        },
        openStats: function () {
            this.statsOpen = true;
        },
        openLicense: function () {
            this.licenseOpen = true;
        },
        closeSettings: function () {
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
        closeLicense: function () {
            this.licenseClosing = true;
            setTimeout(() => {
                this.licenseOpen = false;
                this.licenseClosing = false;
            }, 300);
        },
        showNotification(text: string, duration: number) {
            this.notificationQueue.push({text, duration});
            if(this.notificationTimeout == 0){
              this.updateNotification();
            }
        },
        clearNotificationTimeout() {
          clearTimeout(this.notificationTimeout);
          this.notificationTimeout = 0;
        },
        updateNotification() {
          const notifParameters : SnackbarNotif | undefined = this.notificationQueue.shift();
          this.clearNotificationTimeout();
          if(notifParameters == undefined) return;
          this.notificationText = notifParameters.text;
          let x: HTMLElement = document.getElementById("snackbar")!;
          x.className = "show";
          this.notificationTimeout = setTimeout(function (thisVal : any) { x.className = x.className.replace("show", "hide"); thisVal.updateNotification()}, notifParameters.duration, this);
        }
    },
    components: { LicenseModal }
};
</script>

<style>
:root {
  --modal-overlay-background-colour: rgba(0, 0, 0, 0.5);
  --modal-animation-speed: 300ms;
}

body,
html {
  overflow: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body::-webkit-scrollbar{
  display: none;
}

.copyright {
  user-select: none;
  cursor: pointer;
  font-size: 12px;
  position: absolute;
  bottom: 0;
  left: .1rem;
  text-align: left;
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
  background-color: var(--modal-overlay-background-colour);
  animation: fadein var(--modal-animation-speed) ease-in;
}

.outside.closed {
  background-color: rgba(0, 0, 0, 0);
  animation: fadeout var(--modal-animation-speed) ease-in;
}

.modal {
  user-select: none;
  animation: flyup var(--modal-animation-speed) ease-out;
}

.modal.closed {
  top: 100vh;
  animation: flydown var(--modal-animation-speed) ease-in;
}

@keyframes fadeout {
  0% {
    background-color: var(--modal-overlay-background-colour);
  }
  100% {
    background-color: rgba(0, 0, 0, 0);
  }
}

@keyframes fadein {
  0% {
    background-color: rgba(0, 0, 0, 0);
  }
  100% {
    background-color: var(--modal-overlay-background-colour);
  }
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
