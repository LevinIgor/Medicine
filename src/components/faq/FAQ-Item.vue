<script setup>
  import ChevronDown from "@/components/icon/chevron-down.vue";
  import { ref } from "vue";

  const props = defineProps({
    faq: {
      type: Object,
      required: true,
    },
  });

  const isOpen = ref(false);
</script>
<template>
  <div
    class="col-span-1 grid grid-cols-10 p-6 rounded-lg cursor-pointer h-fit shadow-sm"
    @click="isOpen = !isOpen"
  >
    <ChevronDown v-if="isOpen" class="col-span-1 md:col-span-2 rotate-z" />
    <ChevronDown v-else class="col-span-1 md:col-span-2" />
    <div class="col-span-9 md:col-span-8">
      <span class="font-semibold text-lg text-gray-200 select-none roboto">{{
        faq.question
      }}</span>
      <p class="mt-3 font-normal roboto select-none" v-if="isOpen">
        {{ faq.answer }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .rotate-z {
    transform: rotate(180deg);
  }
</style>
