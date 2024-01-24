<script setup>
  import ChevronDownIcon from "@/components/icons/chevron-down.vue";
  import { ref } from "vue";

  const isOpen = ref(false);

  const props = defineProps({
    title: {
      type: String,
      required: true,
      default: "",
    },

    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
</script>
<template>
  <div class="">
    <div
      class="flex items-center justify-between bg-gray rounded-lg p-5 cursor-pointer select-none"
      @click="isOpen = !isOpen"
    >
      <span class="font-semibold text-2xl md:text-lg">{{ title }}</span>
      <chevron-down-icon
        class="transition duration-300 ease-in-out"
        :style="isOpen ? 'transform:rotate(180deg)' : null"
      />
    </div>
    <div class="bg-gray flex flex-col cursor-default" v-if="isOpen">
      <div
        class="flex items-center justify-between border-top p-5"
        v-for="item of items"
      >
        <span class="font-medium text-lg md:text-sm">{{ item.name }}</span>
        <span class="font-medium text-lg text-gray-180">${{ item.price }}</span>
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
