<script setup>
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";
  import Dialogs from "@/components/dialogs/Dialogs.vue";
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <Dialogs />
</template>

<style scoped></style>
