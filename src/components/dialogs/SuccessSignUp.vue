<script setup>
  import CloseIcon from "@/components/icons/close.vue";

  const dialogId = "success-sign-up-dialog";

  function closeDialog() {
    document.getElementById(dialogId).close();
  }
</script>
<template>
  <dialog :id="dialogId">
    <close-icon
      class="absolute right-5 top-5"
      @click="closeDialog"
    ></close-icon>
    <h3 class="mt-32 text-center">Check your email</h3>
    <p class="my-3 md:my-0 text-center">
      An email has been sent to your email with a link, following which you will
      confirm your registration
    </p>
    <span class="text-center w-full block mt-5 text-gray-160 font-bold text-xs"
      >Check your spam folder</span
    >
  </dialog>
</template>
<style lang="scss" scoped></style>
