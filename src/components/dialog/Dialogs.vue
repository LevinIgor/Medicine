<script setup>
  import SignIn from "@/components/dialog/SignIn.vue";
  import SignUp from "@/components/dialog/SignUp.vue";
  import SuccessSignUp from "@/components/dialog/SuccessSignUp.vue";
  import ResetPassword from "@/components/dialog/ResetPassword.vue";
  import CheckEmail from "@/components/dialog/CheckEmail.vue";
  import MobileMenu from "@/components/dialog/MobileMenu.vue";
  import AppointmentConfirmed from "@/components/dialog/AppointmentConfirmed.vue";
  import AppointmentDialog from "@/components/dialog/AppointmentDialog.vue";
</script>

<template>
  <div>
    <sign-in />
    <sign-up />
    <success-sign-up />
    <reset-password />
    <check-email />
    <mobile-menu />
    <appointment-confirmed />
    <appointment-dialog />
  </div>
</template>

<style lang="scss" scoped></style>
