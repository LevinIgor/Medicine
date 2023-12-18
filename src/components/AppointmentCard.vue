<script setup></script>
<template>
  <div class="grid grid-cols-12 gap-5 bg-white py-5 px-6 rounded-lg">
    <img
      class="col-span-3 rounded-lg object-cover w-52 aspect-square object-top"
      src="../assets/photo/doctor2.jpg"
      alt=""
      loading="lazy"
    />
    <div class="col-span-6 flex flex-col justify-between">
      <div class="">
        <h4>Dr. Sophia Campbell</h4>
        <span class="text-gray-180 font-medium text-sm">Therapist</span>
      </div>
      <div class="flex flex-col gap-1">
        <h6>YOUR RECORD</h6>
        <div class="text-sm font-medium flex items-center gap-10">
          <span class="text-gray-140 w-10">Status</span>
          <span class="text-gray-200">Planed</span>
        </div>
        <div class="text-sm font-medium flex items-center gap-10">
          <span class="text-gray-140 w-10">Date</span>
          <span class="text-gray-200">Saturday, March 25, 2023</span>
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
      <button class="w-full">Sign Up for More</button>
      <button
        class="w-full"
        @click="$router.push({ name: 'reception', params: { id: '1' } })"
      >
        View the Reception
      </button>
      <button class="w-full">Cancel</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
