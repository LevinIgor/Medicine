<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import FAQ from "@/components/FAQ.vue";
  import vSearchInput from "@/components/vSearchInput.vue";

  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ];
</script>
<template>
  <BaseLayout :breadcrumb="breadcrumb" title="Frequently Asked Questions">
    <vSearchInput class="mt-5 max-w-xl mx-auto" />
    <FAQ class="my-10" :style="'white'"
  /></BaseLayout>
</template>

<style lang="scss" scoped></style>
