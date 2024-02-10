<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vSearchInput from "@/components/input/vSearchInput.vue";
  import HorizontalFilter from "@/components/horizontal-filter/HorizontalFilter.vue";
  import DoctorCard from "@/components/card/DoctorCard.vue";

  import {
    fetchDoctorsForDoctorsPage,
    fetchDoctorsByName,
    fetchSpecialty,
    fetchDoctorsBySpecialty,
  } from "@/supabase/doctor.js";
  import { ref, watch } from "vue";

  const isLoading = ref(false);
  const isSearchLoading = ref(false);
  const search = ref("");
  const specialty = ref([]);
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
  fetchDoctorsForDoctorsPage().then(data => (doctors.value = data));
  fetchSpecialty().then(data => (specialty.value = data));

  let timer;
  watch(search, async value => {
    clearTimeout(timer);
    isSearchLoading.value = true;

    timer = setTimeout(async () => {
      doctors.value = await fetchDoctorsByName(value);
      isSearchLoading.value = false;
    }, 1000);
  });

  const onFilterChange = async value => {
    isLoading.value = true;

    if (value == "All") {
      doctors.value = await fetchDoctorsForDoctorsPage();
      isLoading.value = false;
      return;
    }

    doctors.value = await fetchDoctorsBySpecialty(value);
    isLoading.value = false;
  };
</script>
<template>
  <base-layout :breadcrumb="breadcrumb" title="Doctors">
    <v-search-input
      class="mt-5 max-w-xl mx-auto"
      v-model="search"
      :is-loading="isSearchLoading"
    />
    <horizontal-filter
      class="mt-5"
      :items="specialty"
      :is-loading="isLoading"
      @on-change="onFilterChange"
    />
    <span
      class="block text-center w-full text-2xl my-32"
      v-if="doctors.length == 0 && search.length > 0"
      >No found Doctors by search parameter "{{ search }}"</span
    >
    <div
      class="grid md:flex md:flex-col md:gap-5 grid-cols-4 gap-5 my-10 min-h-screen"
    >
      <doctor-card
        v-for="doctor in doctors"
        :doctor="doctor"
        :key="doctor.id"
        @click="$router.push({ name: 'doctor', params: { id: doctor.id } })"
      />
    </div>
  </base-layout>
</template>

<style lang="scss" scoped></style>
