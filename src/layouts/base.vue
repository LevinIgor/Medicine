<script setup>
  import Breadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
  import Appointment from "@/components/appointment/Appointment.vue";

  const props = defineProps({
    // [{name: 'Home', link: '/'}]
    breadcrumb: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },

    needAppointment: {
      type: Boolean,
      default: true,
    },
  });
</script>
<template>
  <main class="bg-gray pb-10">
    <section class="container flex flex-col">
      <Breadcrumb class="my-8 md:my-4" :breadcrumb="breadcrumb" />
      <h2 class="md:mt-10">{{ title }}</h2>
      <slot />

      <Appointment class="my-24 md:my-16" v-if="needAppointment" />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
