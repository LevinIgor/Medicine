<script setup>
  import vHeader from "@/components/header/Header.vue";
  import vFooter from "@/components/footer/Footer.vue";
  import vDialogs from "@/components/dialog/Dialogs.vue";
  import { SpeedInsights } from "@vercel/speed-insights/vue";
</script>

<template>
  <v-header></v-header>

  <div class="min-height">
    <router-view></router-view>
  </div>
  <v-footer></v-footer>
  <v-dialogs></v-dialogs>

  <speed-insights />
</template>

<style scoped>
  .min-height {
    min-height: 100lvh;
  }
</style>
