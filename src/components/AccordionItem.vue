<script setup>
  import ChevronDownIcon from "@/components/icons/chevron-down.vue";
  import { ref } from "vue";

  const isOpen = ref(false);
</script>
<template>
  <div class="">
    <div
      class="flex items-center justify-between bg-gray rounded-lg p-5 cursor-pointer select-none"
      @click="isOpen = !isOpen"
    >
      <span class="font-semibold text-2xl md:text-lg">Laboratory diagnostics</span>
      <chevron-down-icon
        class="transition duration-300 ease-in-out"
        :style="isOpen ? 'transform:rotate(180deg)' : null"
      />
    </div>
    <div class="bg-gray flex flex-col" v-if="isOpen">
      <div
        class="flex items-center justify-between border-top p-5"
        v-for="i of 10"
      >
        <span class="font-medium text-lg md:text-sm"
          >Ultrasonography of abdominal organs</span
        >
        <span class="font-medium text-lg text-gray-180">$60</span>
        <span class="font-medium text-base underline text-blue-200 md:hidden"
          >Book Now</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .border-top {
    border-top: 1px solid var(--gray-100);
  }
</style>
