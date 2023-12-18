<script setup>
  import { ref } from "vue";
  const props = defineProps({
    items: {
      type: Array,
      required: true,
    },
  });

  const emit = defineEmits(["onChange"]);

  const activeItem = ref(0);
</script>
<template>
  <menu class="flex items-center justify-between gap-5 w-full pl-0">
    <span
      class="bg-white w-full text-center text-lg py-2 rounded-lg cursor-pointer select-none hover:bg-blue-200 hover:text-white"
      :class="{ active: activeItem === index }"
      v-for="(item, index) in items"
      :key="index"
      @click="(activeItem = index), emit('onChange', index)"
      >{{ item }}</span
    >
  </menu>
</template>

<style lang="scss" scoped>
  .active {
    background-color: var(--blue-200);
    color: var(--white);
    font-weight: 600;
  }
</style>
