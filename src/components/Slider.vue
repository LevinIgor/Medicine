<script setup>
  import "swiper/scss";

  import "swiper/scss/pagination";
  import "swiper/scss/navigation";
  import "swiper/scss/virtual";

  import { Swiper } from "swiper/vue";
  import { Pagination, Navigation, Virtual } from "swiper/modules";

  const props = defineProps({
    slidesPerView: {
      type: Number,
      default: 3,
    },
  });
</script>
<template>
  <swiper
    class="w-full"
    :modules="[Pagination, Navigation, Virtual]"
    :slidesPerView="slidesPerView"
    :spaceBetween="10"
    :loop="true"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :passiveListeners="false"
  >
    <slot />
  </swiper>
</template>

<style lang="scss">
  .swiper {
  }

  .swiper-pagination-fraction {
    display: none;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--gray-200);
  }
</style>
