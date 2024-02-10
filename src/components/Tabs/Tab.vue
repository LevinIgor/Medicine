<script setup>
  import { computed, inject } from "vue";
  import useStore from "@/store";

  const store = useStore();
  const props = defineProps({
    title: String,
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
