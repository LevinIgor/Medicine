<script setup>
  import vSlider from "@/components/slider/Slider.vue";
  import StarIcon from "@/components/icon/filled/star.vue";
  import QuotesIcon from "@/components/icon/quotes.vue";

  import { computed } from "vue";
  import { SwiperSlide } from "swiper/vue";

  const slidesPerView = computed(() => {
    const width = window.innerWidth;
    return width > 600 ? 4 : 1;
  });
</script>
<template>
  <v-slider :slides-per-view="slidesPerView">
    <swiper-slide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <quotes-icon></quotes-icon>
        <div class="">
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
        </div>
      </div>
      <p class="text-black mt-5">
        For me, doctor visits were always stressful, but not here. The clinic
        provides a relaxing atmosphere, and their friendly team always goes the
        extra mile to ensure comfort and safety
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <quotes-icon></quotes-icon>
        <div class="">
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
        </div>
      </div>
      <p class="text-black mt-5">
        For me, doctor visits were always stressful, but not here. The clinic
        provides a relaxing atmosphere, and their friendly team always goes the
        extra mile to ensure comfort and safety
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <quotes-icon></quotes-icon>
        <div class="">
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
        </div>
      </div>
      <p class="text-black mt-5">
        For me, doctor visits were always stressful, but not here. The clinic
        provides a relaxing atmosphere, and their friendly team always goes the
        extra mile to ensure comfort and safety
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <quotes-icon></quotes-icon>
        <div class="">
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
        </div>
      </div>
      <p class="text-black mt-5">
        For me, doctor visits were always stressful, but not here. The clinic
        provides a relaxing atmosphere, and their friendly team always goes the
        extra mile to ensure comfort and safety
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <quotes-icon></quotes-icon>
        <div class="">
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
        </div>
      </div>
      <p class="text-black mt-5">
        For me, doctor visits were always stressful, but not here. The clinic
        provides a relaxing atmosphere, and their friendly team always goes the
        extra mile to ensure comfort and safety
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <quotes-icon></quotes-icon>
        <div class="">
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
          <star-icon></star-icon>
        </div>
      </div>
      <p class="text-black mt-5">
        For me, doctor visits were always stressful, but not here. The clinic
        provides a relaxing atmosphere, and their friendly team always goes the
        extra mile to ensure comfort and safety
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </swiper-slide>
  </v-slider>
</template>
<style lang=""></style>
