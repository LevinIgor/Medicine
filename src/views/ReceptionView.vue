<script setup>
  import BackArrowIcon from "@/components/icons/back-arrow.vue";
  import BaseLayout from "@/layouts/base.vue";
  const tabs = [
    "All",
    "Reasons for applying",
    "Diagnoses made",
    "Services",
    "Assignment",
  ];

  const breadcrumb = [
    {
      name: "My appointments",
      path: "/account/My%20appointment",
    },
    {
      name: "#3473489739",
      path: "/account/reception/1",
    },
  ];
</script>
<template>
  <base-layout
    base-layout
    :breadcrumb="breadcrumb"
    title="Reception"
    :need-appointment="false"
  >
    <div class="grid md:block grid-cols-2 gap-5">
      <img
        class="col-span-1 w-full object-cover object-top rounded-xl"
        src="../assets/photo/doctor2.jpg"
        alt=""
      />
      <div
        class="col-span-1 bg-white py-10 px-6 rounded-lg flex flex-col justify-between"
      >
        <div class="">
          <h2 class="text-left">Dr. Sophia Campbell</h2>
          <div class="flex items-center justify-between">
            <span class="text-gray-180 font-medium">Therapist</span>
            <span class="text-gray-180 font-medium">#3473489739</span>
          </div>
        </div>
        <div class="text-sm font-medium flex flex-col gap-2">
          <span class="text-sm font-semibold uppercase">YOUR RECORD</span>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Status</span>
            <span class="text-gray-200 font-medium">Completed</span>
          </div>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Date</span>
            <span class="text-gray-200 font-medium">Completed</span>
          </div>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Time</span>
            <span class="text-gray-200 font-medium">Completed</span>
          </div>
          <div class="flex items-center gap-10">
            <span class="text-gray-140 w-10">Cabinet</span>
            <span class="text-gray-200 font-medium">Completed</span>
          </div>
        </div>
        <button class="w-full md:mt-5">Cancel</button>
      </div>
    </div>
    <div
      class="flex flex-nowrap items-center gap-5 mt-24 select-none overflow-x-scroll"
    >
      <div
        class="w-full py-3 px-8 cursor-pointer hover:bg-blue-500 bg-white rounded-md text-center whitespace-nowrap"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        {{ tab }}
      </div>
    </div>
    <div class="flex flex-col gap-5 mt-10">
      <div class="bg-white rounded-lg py-10 md:py-6 md:my-4 px-6">
        <h4>Reasons for applying</h4>
        <div
          class="grid md:flex md:flex-col md:gap-3 grid-cols-2 gap-5 text-gray-180 font-medium cursor-default mt-5"
        >
          <span class="bg-gray p-4 rounded-md block">Cough</span>
          <span class="bg-gray p-4 rounded-md block"
            >Throat - symptom / complaint</span
          >
          <span class="bg-gray p-4 rounded-md col-span-2 block"
            >Nose - symptom / complaint other.</span
          >
        </div>
      </div>
    </div>
  </base-layout>
</template>

<style lang="scss" scoped>
  img {
    aspect-ratio: 4/3;
  }
</style>
