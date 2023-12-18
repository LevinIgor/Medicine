<script async setup>
  import ChevronDown from "@/components/icons/chevron-down.vue";
  import { ref } from "vue";
  import { fetchFAQ } from "@/supabase/faq.js";

  const props = defineProps({
    // gray or white
    limit: {
      type: Number,
      default: 4,
    },
    // gray or white
    style: {
      type: String,
      default: "gray",
    },
  });

  const isExpanded = ref(false);

  const faqs = ref([]);

  fetchFAQ(props.limit).then(data => {
    faqs.value = data;
  });
</script>
<template>
  <div class="grid grid-cols-2 md:grid-cols-1 gap-5">
    <div
      class="col-span-1 grid grid-cols-10 p-6 rounded-lg cursor-pointer h-fit"
      :class="style == 'gray' ? 'bg-gray' : 'bg-white'"
      v-for="(faq, index) in faqs"
      :key="index"
      @click="isExpanded = !isExpanded"
    >
      <ChevronDown class="col-span-1" />
      <div class="col-span-9">
        <span class="font-semibold text-lg text-gray-200 select-none roboto">{{
          faq.question
        }}</span>
        <p class="mt-3 font-normal roboto" v-if="isExpanded">
          {{ faq.answer }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .height {
    min-height: 30vh;
  }
</style>
