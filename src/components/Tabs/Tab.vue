<script setup>
  import { inject, computed } from "vue";

  const props = defineProps({
    title: String,
  });

  const isActive = computed(() => {
    return inject("activeTab").value === props.title;
  });
</script>
<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
