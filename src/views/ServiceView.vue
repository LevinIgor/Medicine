<script setup>
  import BreadCrumb from "@/components/Breadcrumb.vue";
  import vSearchInput from "@/components/vSearchInput.vue";
  import vAccordion from "@/components/Accordion.vue";
  import vTabs from "@/components/Tabs/Tabs.vue";
  import vTab from "@/components/Tabs/Tab.vue";
  import CommentsForm from "@/components/CommentsForm.vue";
  import AppointmentForm from "@/components/Appointment.vue";
  import { useRoute } from "vue-router";
  import { fetchService } from "@/supabase/service";
  import { ref } from "vue";

  const route = useRoute();
  const search = ref("");

  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: route.params.service || "",
      path: route.params.service,
    },
  ];

  const service = ref({});

  const fetchData = async () => {
    const response = await fetchService(route.params.service);
    console.log(response);
    service.value = response;
  };

  [
    "Dermatology is a medical specialty focused on the study and treatment of conditions affecting the skin, hair, and nails. Dermatologists diagnose and manage a broad spectrum of skin disorders, ranging from common issues like acne to more serious conditions such as skin cancer. The discipline encompasses both medical and cosmetic aspects, with dermatologists employing various diagnostic tools and treatment modalities to address diverse dermatological concerns.",
    " Additionally, dermatologists play a vital role in public health through education on skin care practices and disease prevention. The field continually evolves with ongoing research, driving advancements in the understanding and treatment of skin-related conditions.",
  ];

  fetchData();
</script>
<template>
  <div>
    <!-- Section 1 -->
    <section class="container pb-20">
      <bread-crumb class="mt-7" :breadcrumb="breadcrumb" />
      <div class="grid md:block grid-cols-2 mt-10 gap-5">
        <img
          class="w-full h-full object-cover rounded-lg"
          :src="service.image"
          alt="Service image"
          loading="lazy"
        />
        <div class="bg-white py-10 md:py-6 px-7 md:px-4 rounded-lg md:mt-10">
          <h2 class="text-left">{{ service.name }}</h2>
          <p
            class="mt-3"
            v-for="(desc, index) in service.description"
            :key="index"
          >
            {{ desc }}
          </p>
          <button class="mt-5 w-full">Book Now</button>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="bg-white py-24 md:py-10">
      <div class="container flex flex-col items-center">
        <h2>Prices for Diagnostics</h2>
        <vSearchInput class="mt-5 max-w-md" is-bg-gray v-model="search" />
        <v-accordion class="mt-10" :data="service.prices || []"></v-accordion>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="container py-24">
      <v-tabs :is-vertical="false">
        <v-tab title="Services">
          <div class="grid md:block grid-cols-7 gap-3">
            <div class="col-span-5 flex flex-col justify-between">
              <p class="mt-3">
                Our diagnostic service is a key step in determining your health.
                We understand that the diagnostic process can be stressful, so
                we create a supportive environment for our patients. Our doctors
                and medical staff have extensive experience and work to ensure
                your comfort during each stage.
              </p>
              <p class="mt-3">
                Using advanced technology and modern equipment, we perform a
                wide range of tests to identify potential problems and make an
                accurate diagnosis. Our goal is not only to detect diseases, but
                also to prevent their development and maintain your overall
                health.
              </p>
              <p class="mt-3">
                We strive to make the diagnostic process as clear and accessible
                to you as possible. So that you can get not only the results,
                but also an understanding of your health condition. Our
                specialists are ready to answer your questions, provide
                explanations and recommendations for further treatment.
              </p>
              <p class="mt-3">
                As the entry point to your journey to health, we welcome you and
                promise to provide you with the best level of care and support
                throughout the diagnostic and treatment process. Our goal is
                your health, and we are committed to doing everything we can to
                maintain and improve it.
              </p>
            </div>
            <img
              class="col-span-2 w-full object-cover rounded-lg md:mt-10"
              src="../assets/photo/serviceTab1.jpg"
              alt=""
            />
          </div>
        </v-tab>
        <v-tab title="Advantages"></v-tab>
        <v-tab title="Preparation"></v-tab>
      </v-tabs>
    </section>

    <!-- Section 4 -->
    <section class="bg-white py-24 md:py-20">
      <div class="container">
        <comments-form :object="$route.params.service"> </comments-form>
      </div>
    </section>

    <!-- Section 5 -->
    <section class="container py-24">
      <appointment-form></appointment-form>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
