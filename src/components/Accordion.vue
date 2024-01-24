<script setup>
  import AccordionItem from "@/components/AccordionItem.vue";

  const props = defineProps({
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  });

  console.log(props.data);
</script>
<template>
  <div class="w-full flex flex-col gap-5">
    <accordion-item
      v-for="(item, index) in data"
      :key="index"
      :title="item.title"
      :items="item.items"
    ></accordion-item>
  </div>
</template>

<style lang="scss" scoped></style>
