<script setup>
  import CloseIcon from "@/components/icon/close.vue";
  import DialogWrapper from "@/components/dialog/DialogWrapper.vue";
  import vAppointment from "@/components/appointment/Appointment.vue";
  import { onMounted } from "vue";
  const dialogId = "dialog-appointment";

  function closeDialog() {
    document.getElementById(dialogId).close();
  }

  const width = window.innerWidth;

  //   By default appointment component has a shadow-lg class, which is removed when the dialog is mounted
  onMounted(() => {
    document
      .getElementById("appointment-container")
      .classList.remove("shadow-lg");
  });
</script>

<template>
  <dialog-wrapper :id="dialogId">
    <close-icon
      class="absolute top-8 right-5 cursor-pointer"
      @click="closeDialog"
    />

    <v-appointment :need-left-side="width > 600" />
  </dialog-wrapper>
</template>

<style lang="scss" scoped></style>
