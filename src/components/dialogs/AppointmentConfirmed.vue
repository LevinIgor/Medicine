<script setup>
  import { ref } from "vue";
  import CloseIcon from "@/components/icons/close.vue";
  import DoneIcon from "@/components/icons/done.vue";
  const dialogId = ref("dialog-appointment-confirmed");

  function closeDialog() {
    document.getElementById(dialogId.value).close();
  }
</script>

<template>
  <dialog :id="dialogId">
    <close-icon
      class="absolute top-8 right-5 cursor-pointer"
      @click="closeDialog"
    ></close-icon>
    <done-icon class="w-full my-5 md:mt-20"></done-icon>
    <h3 class="text-center mt-1">Appointment Confirmed</h3>
    <p class="text-center mt-3">We'll Reach Out to You Shortly</p>
    <button class="w-full mt-8" @click="closeDialog">Back Home</button>
  </dialog>
</template>

<style lang="scss" scoped></style>
