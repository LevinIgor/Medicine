<script setup>
  import { ref, onMounted } from "vue";
  import dateParse from "@/utils/dateParse";
  import { cancelReservation } from "@/supabase/reservation.js";

  const props = defineProps({
    reservation: {
      type: Object,
      required: true,
    },
  });
  const isMobile = ref(false);
  const status = ref("");

  async function onCancelReservation() {
    if (props.reservation.status !== "Planned") return;

    const isCompleted = await cancelReservation(props.reservation.id);
    if (isCompleted) status.value = "Canceled";
  }

  function showAppointmentDialog() {
    document.getElementById("dialog-appointment").showModal();
  }

  onMounted(() => {
    isMobile.value = window.innerWidth < 700;
  });
</script>
<template>
  <div
    v-if="!isMobile"
    class="grid grid-cols-12 gap-5 bg-white py-5 px-6 rounded-lg shadow-md"
  >
    <img
      class="col-span-3 rounded-lg object-cover w-full aspect-square object-top"
      :src="reservation.doctor?.image"
      alt="doctor image"
      loading="lazy"
    />
    <div class="col-span-6 flex flex-col justify-between">
      <div class="">
        <h4>{{ reservation.doctor?.name }}</h4>
        <span class="text-gray-180 font-medium text-sm">{{
          reservation.doctor?.specialty
        }}</span>
      </div>
      <div class="flex flex-col gap-1">
        <h6>YOUR RECORD</h6>
        <div class="text-sm font-medium flex items-center gap-10">
          <span class="text-gray-140 w-10">Status</span>
          <span class="text-gray-200">{{ status || reservation.status }}</span>
        </div>
        <div class="text-sm font-medium flex items-center gap-10">
          <span class="text-gray-140 w-10">Date</span>
          <span class="text-gray-200">{{ dateParse(reservation.date) }}</span>
        </div>
        <div class="text-sm font-medium flex items-center gap-10">
          <span class="text-gray-140 w-10">Time</span>
          <span class="text-gray-200">10:20 - 10:35</span>
        </div>
        <div class="text-sm font-medium flex items-center gap-10">
          <span class="text-gray-140 w-10">Cabinet</span>
          <span class="text-gray-200">243</span>
        </div>
      </div>
    </div>
    <div class="col-span-3 flex flex-col h-full justify-between">
      <button class="w-full" @click="showAppointmentDialog">Book Now</button>
      <button
        class="w-full"
        @click="
          $router.push({ name: 'reception', params: { id: reservation.id } })
        "
      >
        View the Reception
      </button>
      <button
        class="w-full"
        :disabled="reservation.status !== 'Planned' || status === 'Canceled'"
        @click="onCancelReservation"
      >
        Cancel
      </button>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-5 bg-white py-4 px-4 rounded-lg" v-else>
    <img
      class="col-span-5 rounded-lg object-cover w-full aspect-square object-top"
      :src="reservation.doctor?.image"
      alt="doctor image"
      loading="lazy"
    />
    <div class="col-span-7 flex flex-col justify-between">
      <div class="">
        <h4>{{ reservation.doctor?.name }}</h4>
        <span class="text-gray-180 font-medium text-sm">{{
          reservation.doctor?.specialty
        }}</span>
      </div>
    </div>
    <div class="flex col-span-full flex-col gap-1">
      <h6>YOUR RECORD</h6>
      <div class="text-sm font-medium flex items-center gap-10">
        <span class="text-gray-140 w-10">Status</span>
        <span class="text-gray-200">{{ reservation.status }}</span>
      </div>
      <div class="text-sm font-medium flex items-center gap-10">
        <span class="text-gray-140 w-10">Date</span>
        <span class="text-gray-200">{{ dateParse(reservation.date) }}</span>
      </div>
      <div class="text-sm font-medium flex items-center gap-10">
        <span class="text-gray-140 w-10">Time</span>
        <span class="text-gray-200">{{ reservation.time }}</span>
      </div>
      <div class="text-sm font-medium flex items-center gap-10">
        <span class="text-gray-140 w-10">Cabinet</span>
        <span class="text-gray-200">{{ reservation.cabinet }}</span>
      </div>
    </div>
    <div class="col-span-full flex flex-col gap-2 mt-5">
      <button class="w-full">Book Now</button>
      <button
        class="w-full"
        @click="
          $router.push({ name: 'reception', params: { id: reservation.id } })
        "
      >
        View the Reception
      </button>
      <button
        class="w-full"
        :disabled="reservation.status !== 'Planned' || status === 'Canceled'"
        @click="onCancelReservation"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
