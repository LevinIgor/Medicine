<script setup>
  import DoctorCard from "@/components/DoctorCard.vue";
  import { SwiperSlide } from "swiper/vue";
  import Slider from "@/components/Slider.vue";

  const props = defineProps({
    // [{name: 'Dr. John Doe', specialty: 'Dentist', image: 'https://picsum.photos/200/300', rating: 4}]
    doctors: {
      type: Array,
      default: () => [],
    },
    slidesPerView: {
      type: Number,
      default: 4,
    },
  });
</script>
<template>
  <Slider :slidesPerView="slidesPerView">
    <swiper-slide v-for="(doctor, index) of doctors" :key="index"
      ><DoctorCard :doctor="doctor"
    /></swiper-slide>
  </Slider>
</template>

<style lang="scss" scoped></style>
