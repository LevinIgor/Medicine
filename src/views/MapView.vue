<script setup>
  import "swiper/css";

  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "swiper/css/virtual";

  // import Swiper core and required modules
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Navigation, Virtual } from "swiper/modules";
</script>

<template>
  <!-- <GMapMap
    :center="{ lat: 50.44736273671434, lng: 30.522804673895084 }"
    :zoom="15"
    map-type-id="terrain"
    style="width: 100%; height: 40rem"
    :options="{
      zoomControl: true,
      mapTypeControl: true,
      scaleControl: true,
      streetViewControl: true,
      rotateControl: true,
      fullscreenControl: true,
    }"
  >
    <GMapMarker
      :position="{ lat: 50.44736273671434, lng: 30.522804673895084 }"
      :clickable="true"
      :draggable="true"
      title="MedClinic"
    />
  </GMapMap> -->

  <!-- <swiper
    :modules="[Pagination, Navigation, Virtual]"
    :slidesPerView="4"
    :spaceBetween="10"
    :pagination="{
      type: 'fraction',
    }"
    :navigation="true"
    :virtual="true"
    class="mySwiper"
  >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
    <swiper-slide
      class="w-72 h-full bg-gray-700 flex justify-center items-center text-white text-2xl font-bold"
      >Lorem ipsum dolor sit.</swiper-slide
    >
  </swiper> -->
</template>
<style lang="scss">
 
</style>
