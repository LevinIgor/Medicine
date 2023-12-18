<script setup>
  import ArrowRightIcon from "@/components/icons/arrow-right.vue";
  const props = defineProps({
    //  [{ name: "Home", path: "/" }] <---- Array of Objects
    breadcrumb: {
      type: Array,
      required: true,
      default: () => [],
    },
  });

  function isLastItem(index) {
    return index >= props.breadcrumb.length - 1;
  }
</script>
<template>
  <div class="flex items-center gap-2">
    <div class="" v-for="(item, i) in breadcrumb">
      <a
        class="text-gray-200"
        :class="{ active: isLastItem(i) }"
        :href="item.path"
      >
        {{ item.name }}</a
      >
      <arrow-right-icon class="arrow" v-if="!isLastItem(i)" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .arrow {
    margin-left: 0.6rem;
  }
  .active {
    color: var(--gray-140);
  }
</style>
