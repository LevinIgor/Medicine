<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import GoogleMap from "@/components/GoogleMap.vue";

  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];
</script>
<template>
  <BaseLayout :breadcrumb="breadcrumb" title="Contact Us">
    <GoogleMap class="mt-5" need-details />
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
