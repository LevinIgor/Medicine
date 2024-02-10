<script setup>
  import SearchIcon from "@/components/icon/search.vue";
  import vSpinner from "@/components/spinner/spinner.vue";

  const props = defineProps({
    isBgGray: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: String,
      default: "",
      required: true,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  });
</script>
<template>
  <div class="relative rounded-lg w-full flex items-center">
    <input
      class="w-full py-4 px-12"
      :class="isBgGray ? 'bg-gray' : 'bg-white'"
      type="text"
      placeholder="Search"
      maxlength="100"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <v-spinner class="absolute right-5" color="#1a2433" v-if="isLoading" />
    <search-icon class="icon absolute left-0 top-1/2" />
  </div>
</template>

<style lang="scss" scoped>
  .icon {
    transform: translateY(-50%);
    left: 1rem;
  }
</style>
