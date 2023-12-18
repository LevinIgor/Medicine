<script setup>
  import Breadcrumb from "@/components/Breadcrumb.vue";
  import Appointment from "@/components/Appointment.vue";

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
  });
</script>
<template>
  <main class="bg-gray">
    <section class="container flex flex-col">
      <Breadcrumb class="my-8" :breadcrumb="breadcrumb" />
      <h2>{{ title }}</h2>
      <slot />

      <Appointment class="my-24" />
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
