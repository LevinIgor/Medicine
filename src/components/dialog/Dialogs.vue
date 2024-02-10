<script setup>
  import SignIn from "@/components/dialog/SignIn.vue";
  import SignUp from "@/components/dialog/SignUp.vue";
  import SuccessSignUp from "@/components/dialog/SuccessSignUp.vue";
  import ResetPassword from "@/components/dialog/ResetPassword.vue";
  import CheckEmail from "@/components/dialog/CheckEmail.vue";
  import MobileMenu from "@/components/dialog/MobileMenu.vue";
  import AppointmentConfirmed from "@/components/dialog/AppointmentConfirmed.vue";
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
