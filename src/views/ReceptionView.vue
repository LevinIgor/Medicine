<script setup>
  import BackArrowIcon from "@/components/icons/back-arrow.vue";
</script>
<template>
  <div class="container py-24">
    <h2 class="relative flex items-center justify-center">
      Reception
      <back-arrow-icon
        class="w-6 h-6 inline-block absolute left-0 cursor-pointer"
      />
    </h2>
    <div class="grid grid-cols-2 gap-5 mt-10">
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
          <span class="text-gray-180 font-medium">Therapist</span>
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
        <button class="w-full">Cancel</button>
      </div>
    </div>
    <div class="flex flex-nowrap items-center gap-5 mt-24 select-none">
      <div
        class="w-full py-3 cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold bg-white rounded-md text-center"
      >
        All
      </div>
      <div
        class="w-full py-3 cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold bg-white rounded-md text-center"
      >
        Reasons for applying
      </div>
      <div
        class="w-full py-3 cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold bg-white rounded-md text-center"
      >
        Diagnoses made
      </div>
      <div
        class="w-full py-3 cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold bg-white rounded-md text-center"
      >
        Services
      </div>
      <div
        class="w-full py-3 cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold bg-white rounded-md text-center"
      >
        Assignment
      </div>
    </div>
    <div class="flex flex-col gap-5 mt-10">
      <div class="bg-white rounded-lg py-10 px-6">
        <h4>Reasons for applying</h4>
        <div
          class="grid grid-cols-2 gap-5 text-gray-180 font-medium cursor-default mt-5"
        >
          <span class="bg-gray p-4 rounded-md">Cough</span>
          <span class="bg-gray p-4 rounded-md"
            >Throat - symptom / complaint</span
          >
          <span class="bg-gray p-4 rounded-md col-span-2"
            >Nose - symptom / complaint other.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  img {
    aspect-ratio: 4/3;
  }
</style>
