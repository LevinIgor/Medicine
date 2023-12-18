<script setup>
  import { SwiperSlide } from "swiper/vue";
  import Slider from "@/components/Slider.vue";
  import StarIcon from "@/components/icons/filled/star.vue";
  import QuotesIcon from "@/components/icons/quotes.vue";
</script>
<template>
  <Slider>
    <SwiperSlide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <QuotesIcon />
        <div class="">
          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
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
          src="@/assets/photo/doctor3.jpg"
          alt=""
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <QuotesIcon />
        <div class="">
          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
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
          src="@/assets/photo/doctor3.jpg"
          alt=""
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <QuotesIcon />
        <div class="">
          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
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
          src="@/assets/photo/doctor3.jpg"
          alt=""
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="bg-white rounded-md p-8 flex flex-col">
      <div class="flex items-center justify-between">
        <QuotesIcon />
        <div class="">
          <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
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
          src="@/assets/photo/doctor3.jpg"
          alt=""
        />
        <div class="flex flex-col">
          <span class="font-semibold">Robert Garcia</span> <span>Patient</span>
        </div>
      </div>
    </SwiperSlide>
  </Slider>
</template>
<style lang=""></style>
