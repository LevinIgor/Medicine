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
      <div class="flex items-center justify-between h-full">
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
        I would like to express my deep gratitude to Drs for her
        professionalism, sensitivity, and attention. She not only helped me
        solve my problem but also gave valuable advice on maintaining my health
        in the future. Thank you, doctor!
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Ed Sheeran</span> <span>Patient</span>
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
        I recently underwent an examination at the "Good Doctor" clinic. I am
        very pleased with the level of service. All the staff are polite and
        attentive. I would like to express special gratitude to Drs for his
        competence and individual approach to each patient.
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Benedict Cumberbatch</span>
          <span>Patient</span>
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
        For a long time, I could not find a good gynecologist. On the advice of
        a friend, I turned to Drs at the "Health" clinic. I am very pleased with
        the results of the procedures. Thank you, doctor, for your help!
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Keira Knightley</span>
          <span>Patient</span>
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
        Last year I broke my leg. I was treated at the clinic. I am very pleased
        with the quality of treatment. Many thanks to Drs for his
        professionalism and golden hands. Thanks to him, I can walk again
        without pain.
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Daniel Radcliffe</span>
          <span>Patient</span>
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
        I recently gave birth to a child at the "Mother and Child" clinic. I
        would like to express my deep gratitude to all the staff of the clinic
        for their care and attention. I would like to express special gratitude
        to Drs for her professionalism and sensitivity.
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">David Beckham</span> <span>Patient</span>
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
        I recently underwent treatment at the sanatorium. I am very pleased with
        the conditions of stay and the quality of treatment. Many thanks to all
        the staff of the sanatorium for their care and attention.
      </p>
      <div class="flex gap-4 mt-5">
        <img
          class="w-14 h-14 rounded-full object-cover object-center"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Users/cb955c57-22da-410a-a778-122614e2d53a/43972fe3-9a81-4be8-8edf-3455f6167f10"
          alt=""
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-semibold">Emma Watson</span> <span>Patient</span>
        </div>
      </div>
    </swiper-slide>
  </v-slider>
</template>
<style lang=""></style>
