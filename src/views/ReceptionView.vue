<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import { ref, onMounted } from "vue";
  import {
    fetchReservation,
    cancelReservation,
  } from "@/supabase/reservation.js";
  import { useRoute } from "vue-router";
  import dateParse from "@/utils/dateParse.js";

  const route = useRoute();

  const breadcrumb = [
    {
      name: "My appointments",
      path: "/account/",
    },
    {
      name: `${route.params.id}`,
      path: "/account/",
    },
  ];

  const reception = ref({});

  async function onCancelReservation() {
    if (reception.value.status != "Planned") return;

    const isCompleted = await cancelReservation(route.params.id);
    if (isCompleted) reception.value.status = "Canceled";
  }

  onMounted(async () => {
    reception.value = await fetchReservation(route.params.id);
  });
</script>
<template>
  <base-layout
    base-layout
    :breadcrumb="breadcrumb"
    title="Reception"
    :need-appointment="false"
  >
    <div class="grid md:block grid-cols-2 gap-5 mt-5">
      <img
        class="col-span-1 w-full object-cover object-top rounded-xl aspect-4/3"
        :src="reception.doctor?.image"
        alt="doctor image"
        loading="lazy"
      />
      <div
        class="col-span-1 bg-white py-10 px-6 rounded-lg flex flex-col justify-between"
      >
        <div class="">
          <h2 class="text-left">{{ reception.doctor?.name }}</h2>
          <div class="flex items-center justify-between">
            <span class="text-gray-180 font-medium">{{
              reception.doctor?.specialty
            }}</span>
            <span class="text-gray-180 font-medium"
              >#{{ reception.id ? reception.id.split("-").at(-1) : "" }}</span
            >
          </div>
        </div>
        <div class="text-sm font-medium flex flex-col gap-2">
          <span class="text-sm font-semibold uppercase">YOUR RECORD</span>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Status</span>
            <span class="text-gray-200 font-medium">{{
              reception.status
            }}</span>
          </div>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Date</span>
            <span class="text-gray-200 font-medium">{{
              reception.date ? dateParse(reception.date) : ""
            }}</span>
          </div>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Time</span>
            <span class="text-gray-200 font-medium">{{ reception.time }}</span>
          </div>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Cabinet</span>
            <span class="text-gray-200 font-medium">{{
              reception.cabinet
            }}</span>
          </div>
        </div>
        <button
          class="w-full md:mt-5"
          :disabled="reception.status != 'Planned'"
          @click="onCancelReservation"
        >
          Cancel
        </button>
      </div>
    </div>

    <div class="flex flex-col gap-5 mt-5">
      <div
        class="bg-white rounded-lg py-10 md:py-6 md:my-4 px-6"
        v-for="(item, index) in reception.details"
        :key="index"
      >
        <h4>{{ item.name }}</h4>
        <div
          class="grid grid-cols-2 gap-3 flex-wrap text-gray-180 font-medium cursor-default mt-5"
        >
          <span
            class="bg-gray p-4 rounded-md block span"
            :class="{
              'col-span-2':
                subindex + 1 == item.value.length && item.value.length % 2 != 0,
            }"
            v-for="(text, subindex) in item.value"
            :key="subindex"
            >{{ text }}</span
          >
          <span v-if="item.value.length == 0">Not specified</span>
        </div>
      </div>
    </div>
  </base-layout>
</template>

<style lang="scss" scoped></style>
