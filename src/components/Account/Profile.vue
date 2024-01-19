<script setup>
  import ArrowLeft from "@/components/icons/arrow-right.vue";
</script>
<template>
  <div>
    <h2>Profile</h2>
    <div
      class="flex items-center justify-between bg-white rounded-t-xl p-6 mt-7 cursor-pointer"
    >
      <div class="block">
        <span class="font-semibold text-gray-180">Photo profile</span>
      </div>
      <img
        class="w-9 h-9 object-cover rounded-full"
        src="@/assets/photo/doctor4.jpg"
        alt=""
      />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Name</span>
        <span class="text-gray-200">Robert Garcia</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Phone number</span>
        <span class="text-gray-200">Robert Garcia</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Email address</span>
        <span class="text-gray-200">Robert Garcia</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Sex</span>
        <span class="text-gray-200">Robert Garcia</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Date of birth</span>
        <span class="text-gray-200">Robert Garcia</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Address</span>
        <span class="text-gray-200">Robert Garcia</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Password</span>
        <span class="text-gray-200">Robert Garcia</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
