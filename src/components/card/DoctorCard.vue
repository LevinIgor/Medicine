<script setup>
  import StarIcon from "@/components/icon/filled/star.vue";

  const props = defineProps({
    // {name: "Dr. Sophia Campbell", specialty: "Pediatrician", image: "www.example.com/image.png"}
    doctor: {
      type: Object,
      required: false,
    },
  });
</script>
<template>
  <div
    class="doctor-card w-full relative rounded-lg overflow-hidden cursor-pointer shadow-md aspect-4/5"
  >
    <img class="w-full h-full object-cover" :src="doctor.image" alt="" />
    <div class="absolute bottom-0 blur-lg bg-white/90 w-full rounded-t-2xl">
      <h5 class="text-center pt-2">
        {{ doctor.name }}
      </h5>
      <p class="text-center">{{ doctor.specialty }}</p>
      <div class="flex items-center justify-center pb-3 pt-1">
        <star-icon class="" />
        <star-icon class="" />
        <star-icon class="" />
        <star-icon class="" />
        <star-icon class="" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
  img {
    aspect-ratio: 3/4;
  }
</style>
