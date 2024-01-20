<script setup>
  import vHeader from "@/components/Header.vue";
  import vFooter from "@/components/Footer.vue";
  import vDialogs from "@/components/dialogs/Dialogs.vue";

  import { getUserData } from "@/supabase/user.js";

  getUserData();
</script>

<template>
  <v-header></v-header>
  <router-view></router-view>
  <v-footer></v-footer>
  <v-dialogs></v-dialogs>
</template>

<style scoped></style>
