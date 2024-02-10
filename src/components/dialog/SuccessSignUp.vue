<script setup>
  import CloseIcon from "@/components/icon/close.vue";
  import DialogWrapper from "@/components/dialog/DialogWrapper.vue";
  const dialogId = "success-sign-up-dialog";

  function closeDialog() {
    document.getElementById(dialogId).close();
  }
</script>
<template>
  <dialog-wrapper :id="dialogId">
    <close-icon
      class="absolute right-5 top-5 cursor-pointer"
      @click="closeDialog"
    ></close-icon>
    <h3 class="md:mt-32 text-center">Check your email</h3>
    <p class="my-3 md:my-0 text-center">
      An email has been sent to your email with a link, following which you will
      confirm your registration
    </p>
    <span class="text-center w-full block mt-5 text-gray-160 font-bold text-xs"
      >Check your spam folder</span
    >
  </dialog-wrapper>
</template>
<style lang="scss" scoped></style>
