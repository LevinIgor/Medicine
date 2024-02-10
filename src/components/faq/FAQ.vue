<script async setup>
  import faqItem from "@/components/faq/FAQ-Item.vue";

  const props = defineProps({
    // gray or white
    style: {
      type: String,
      default: "gray",
    },
    faqs: {
      type: Array,
      required: true,
      default: [],
    },
  });
</script>
<template>
  <div class="grid grid-cols-2 md:grid-cols-1 gap-5">
    <faq-item
      :class="style === 'gray' ? 'bg-gray' : 'bg-white'"
      v-for="(faq, index) in faqs"
      :key="index"
      :faq="faq"
      :style="style"
    />
  </div>
</template>

<style lang="scss" scoped>
  .height {
    min-height: 30vh;
  }
</style>
