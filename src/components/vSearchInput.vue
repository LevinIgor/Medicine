<script setup>
  import SearchIcon from "@/components/icons/search.vue";

  const props = defineProps({
    isBgGray: {
      type: Boolean,
      default: false,
    },
  });
</script>
<template>
  <div class="relative rounded-lg w-full">
    <input
      class="w-full py-4 px-12"
      :class="isBgGray ? 'bg-gray' : 'bg-white'"
      type="text"
      placeholder="Search"
      maxlength="20"
    />
    <search-icon class="icon absolute left-0 top-1/2" />
  </div>
</template>

<style lang="scss" scoped>
  .icon {
    transform: translateY(-50%);
    left: 1rem;
  }
</style>
