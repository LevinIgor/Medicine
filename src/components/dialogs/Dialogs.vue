<script setup>
  import SignIn from "@/components/dialogs/SignIn.vue";
  import SignUp from "@/components/dialogs/SignUp.vue";
  import SuccessSignUp from "@/components/dialogs/SuccessSignUp.vue";
  import ResetPassword from "@/components/dialogs/ResetPassword.vue";
  import CheckEmail from "@/components/dialogs/CheckEmail.vue";
  import MobileMenu from "@/components/dialogs/MobileMenu.vue";
  import AppointmentConfirmed from "@/components/dialogs/AppointmentConfirmed.vue";
</script>

<template>
  <div>
    <sign-in></sign-in>
    <sign-up></sign-up>
    <success-sign-up></success-sign-up>
    <reset-password></reset-password>
    <check-email></check-email>
    <mobile-menu></mobile-menu>
    <appointment-confirmed></appointment-confirmed>
  </div>
</template>

<style lang="scss" scoped></style>
