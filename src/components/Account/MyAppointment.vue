<script setup>
  import AppointmentCard from "@/components/card/AppointmentCard.vue";
  import HorizontalFilter from "@/components/horizontal-filter/HorizontalFilter.vue";
  import { ref, onMounted } from "vue";
  import {
    fetchReservations,
    fetchReservationsByStatus,
  } from "@/supabase/reservation.js";
  import supabase from "@/supabase.js";

  const reservations = ref([]);
  const isLoading = ref(false);
  const userId = ref(null);

  async function filterReservations(status) {
    isLoading.value = true;
    reservations.value =
      status === "All"
        ? await fetchReservations(userId.value)
        : await fetchReservationsByStatus(userId.value, status);
    isLoading.value = false;
  }

  onMounted(async () => {
    const { data: userData } = await supabase.auth.getUser();
    userId.value = userData.user.id;
    reservations.value = await fetchReservations(userId.value);
  });
</script>
<template>
  <div>
    <h2>My appointment</h2>
    <p
      class="text-gray-160 max-w-lg text-center mx-auto mt-3 md:mt-0 flex-nowrap"
    >
      You will be able to view all your upcoming and past doctor's appointments,
      get acquainted with the dates and times of previous visits
    </p>

    <horizontal-filter
      class="mt-9"
      :items="[
        { name: 'Planned' },
        { name: 'Completed' },
        { name: 'Canceled' },
      ]"
      :is-loading="isLoading"
      @on-change="filterReservations"
    ></horizontal-filter>
    <div class="flex flex-col gap-10 mt-6">
      <h3 class="text-center my-10" v-if="reservations.length == 0">
        Not found reservations by filter
      </h3>
      <appointment-card
        v-for="item in reservations"
        :key="item.id"
        :reservation="item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
