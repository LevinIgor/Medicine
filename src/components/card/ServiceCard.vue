<script setup>
  const props = defineProps({
    name: String,
    image: String,
  });
</script>
<template>
  <div
    class="relative overflow-hidden rounded-2xl cursor-pointer w-full aspect-4/3 shadow-lg"
    v-if="image"
  >
    <img
      class="z-0 w-full object-cover h-full"
      :src="image"
      alt="Service image"
      loading="lazy"
    />
    <h2
      class="absolute z-10 w-full h-full top-0 overflow-hidden flex items-center justify-center text-white backdrop-brightness-50"
    >
      {{ name }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
  h2 {
    backdrop-filter: brightness(0.6);
  }
</style>
