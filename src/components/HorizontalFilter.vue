<script setup>
  const filters = [
    "All",
    "Diagnostics",
    "Therapy",
    "Surgery",
    "Pediatrics",
    "Dermatology",
    "Psychology",
    "Psychology",
    "Psychology",
    "Psychology",
  ];
</script>
<template>
  <div class="flex items-center gap-5 wrapper">
    <span
      class="text-lg font-normal rounded-xl py-3 px-8 bg-white"
      v-for="(filter, i) of filters"
      >{{ filter }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    width: 100%;
    overflow-x: scroll;
    padding: 0 1rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
