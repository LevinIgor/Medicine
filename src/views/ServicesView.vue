<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vSearchInput from "@/components/vSearchInput.vue";
  import ServiceCard from "@/components/ServiceCard.vue";
  import { fetchServices, fetchServicesByName } from "@/supabase/service.js";
  import { useRouter } from "vue-router";
  import { ref, watch } from "vue";

  const router = useRouter();
  const search = ref("");

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

    timer = setTimeout(async () => {
      services.value = await fetchServicesByName(value);
    }, 1000);
  });
</script>
<template>
  <BaseLayout :breadcrumb="breadcrumb" title="Services">
    <vSearchInput class="max-w-lg mt-5 self-center" v-model="search" />
    <div class="mt-10 grid md:flex md:flex-col md:gap-5 grid-cols-3 gap-4">
      <ServiceCard
        v-for="service of services"
        :name="service.name"
        :image="service.image"
        @click="goToService(service.name)"
      />
    </div>
    <div
      class="text-center w-full block text-xl font-medium my-10"
      v-if="services.length == 0 && search.length > 0"
    >
      Not found services by search parameter "{{ `${search}` }}"
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
