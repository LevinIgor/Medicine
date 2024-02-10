<script setup>
  import { computed, inject } from "vue";

  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  const activeTab = inject("activeTab");

  const isActive = computed(() => {
    return activeTab.value === props.title;
  });
  
</script>
<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
