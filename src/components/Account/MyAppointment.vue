<script setup>
  import AppointmentCard from "@/components/AppointmentCard.vue";
  import vMenu from "@/components/Menu.vue";
</script>
<template>
  <div>
    <h2>My appointment</h2>
    <p class="text-gray-160 max-w-lg text-center mx-auto mt-3 md:mt-0 flex-nowrap">
      You will be able to view all your upcoming and past doctor's appointments,
      get acquainted with the dates and times of previous visits
    </p>
    <v-menu class="mt-9" :items="['All', 'Planned', 'Completed', 'Canceled']" />

    <div class="flex flex-col gap-10 mt-6">
      <appointment-card></appointment-card>
      <appointment-card></appointment-card>
      <appointment-card></appointment-card>
      <appointment-card></appointment-card>
      <appointment-card></appointment-card>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
