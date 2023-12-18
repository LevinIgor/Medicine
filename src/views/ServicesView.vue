<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vSearchInput from "@/components/vSearchInput.vue";
  import ServiceCard from "@/components/ServiceCard.vue";
  import { fetchServices } from "@/supabase/service.js";
  import { useRouter } from "vue-router";
  import { ref } from "vue";

  const router = useRouter();

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
</script>
<template>
  <BaseLayout :breadcrumb="breadcrumb" title="Services">
    <vSearchInput class="max-w-lg mt-5 self-center" />
    <div class="mt-10 grid grid-cols-3 gap-4">
      <ServiceCard
        v-for="service of services"
        :name="service.name"
        :image="service.image"
        @click="goToService(service.name)"
      />
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
