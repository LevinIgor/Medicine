<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vSearchInput from "@/components/input/vSearchInput.vue";
  import ServiceCard from "@/components/card/ServiceCard.vue";

  import { fetchServices, fetchServicesByName } from "@/supabase/service.js";
  import { useRouter } from "vue-router";
  import { ref, watch } from "vue";

  const router = useRouter();
  const search = ref("");
  const isLoading = ref(false);

  function goToService(service) {
    router.push({ name: "service", params: { service } });
  }

  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
  ];

  const services = ref([]);
  fetchServices().then(data => (services.value = data));
  let timer;
  watch(search, async value => {
    clearTimeout(timer);
    isLoading.value = true;

    timer = setTimeout(async () => {
      services.value = await fetchServicesByName(value);
      isLoading.value = false;
    }, 1000);
  });
</script>
<template>
  <base-layout :breadcrumb="breadcrumb" title="Services">
    <v-search-input
      class="max-w-lg mt-5 self-center"
      v-model="search"
      :is-loading="isLoading"
    />
    <div
      class="text-center w-full block text-xl font-medium my-10"
      v-if="services.length == 0 && search.length > 0"
    >
      Not found services by search parameter "{{ `${search}` }}"
    </div>
    <div
      class="mt-10 grid md:flex md:flex-col md:gap-5 grid-cols-3 gap-4 min-h-screen"
    >
      <service-card
        v-if="services.length > 0"
        v-for="service of services"
        :name="service.name"
        :image="service.image"
        @click="goToService(service.name)"
      />
    </div>
  </base-layout>
</template>

<style lang="scss" scoped></style>
