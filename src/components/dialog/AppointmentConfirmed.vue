<script setup>
  import CloseIcon from "@/components/icon/close.vue";
  import DoneIcon from "@/components/icon/done.vue";
  import DialogWrapper from "@/components/dialog/DialogWrapper.vue";

  const dialogId = "dialog-appointment-confirmed";

  function closeDialog() {
    document.getElementById(dialogId).close();
  }
</script>

<template>
  <dialog-wrapper :id="dialogId">
    <close-icon
      class="absolute top-8 right-5 cursor-pointer"
      @click="closeDialog"
    />
    <done-icon class="w-full my-5 md:mt-20" />
    <h3 class="text-center mt-1">Appointment Confirmed</h3>
    <p class="text-center mt-3">We'll Reach Out to You Shortly</p>
    <button class="w-full mt-8" @click="closeDialog">Back Home</button>
  </dialog-wrapper>
</template>

<style lang="scss" scoped></style>
