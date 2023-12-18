<script setup>
  import BaseLayout from "@/layouts/base.vue";

  import vSearchInput from "@/components/vSearchInput.vue";
  import HorizontalFilter from "@/components/HorizontalFilter.vue";
  import DoctorCard from "@/components/DoctorCard.vue";

  import { fetchDoctorForDoctorsPage } from "@/supabase/doctor.js";
  import { ref } from "vue";

  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Doctors",
      path: "/doctors",
    },
  ];

  const doctors = ref([]);
  fetchDoctorForDoctorsPage().then(data => (doctors.value = data));
</script>
<template>
  <BaseLayout :breadcrumb="breadcrumb" title="Doctors">
    <vSearchInput class="mt-5 max-w-2xl mx-auto" />
    <HorizontalFilter class="mt-10" />
    <div class="grid grid-cols-4 gap-5 my-10">
      <DoctorCard
        v-for="doctor in doctors"
        :doctor="doctor"
        @click="$router.push({ name: 'doctor', params: { id: doctor.id } })"
      />
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
