<script setup>
  import SignIn from "@/components/dialogs/SignIn.vue";
  import SignUp from "@/components/dialogs/SignUp.vue";
  import ResetPassword from "@/components/dialogs/ResetPassword.vue";
  import CheckEmail from "@/components/dialogs/CheckEmail.vue";
</script>

<template>
  <div>
    <sign-in />
    <sign-up />
    <reset-password />
    <check-email />
  </div>
</template>

<style lang="scss" scoped></style>
