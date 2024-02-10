<script setup>
  import ChevronDown from "@/components/icon/chevron-down.vue";
  import { ref } from "vue";

  const props = defineProps({
    faq: {
      type: Object,
      required: true,
    },
  });

  const isExpanded = ref(false);
</script>
<template>
  <div
    class="col-span-1 grid grid-cols-10 p-6 rounded-lg cursor-pointer h-fit shadow-sm"
    @click="isExpanded = !isExpanded"
  >
    <ChevronDown class="col-span-1 md:col-span-2" />
    <div class="col-span-9 md:col-span-8">
      <span class="font-semibold text-lg text-gray-200 select-none roboto">{{
        faq.question
      }}</span>
      <p class="mt-3 font-normal roboto select-none" v-if="isExpanded">
        {{ faq.answer }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
