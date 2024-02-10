<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import FAQ from "@/components/faq/FAQ.vue";
  import vSearchInput from "@/components/input/vSearchInput.vue";
  import { fetchFAQByQuestion, fetchFAQ } from "@/supabase/faq.js";

  import { ref, watch } from "vue";

  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "FAQ", path: "/faq" },
  ];

  const faqs = ref([]);
  const search = ref("");
  const isLoading = ref(false);

  fetchFAQ().then(data => {
    faqs.value = data;
  });

  watch(search, async val => {
    isLoading.value = true;

    faqs.value =
      val.length > 2 ? await fetchFAQByQuestion(val) : await fetchFAQ();

    isLoading.value = false;
  });
</script>
<template>
  <base-layout :breadcrumb="breadcrumb" title="Frequently Asked Questions">
    <v-search-input
      class="mt-5 max-w-xl mx-auto"
      v-model="search"
      :is-loading="isLoading" />
    <FAQ class="my-10" :style="'white'" :faqs="faqs"
  /></base-layout>
</template>

<style lang="scss" scoped></style>
