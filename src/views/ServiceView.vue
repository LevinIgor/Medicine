<script setup>
  import BreadCrumb from "@/components/Breadcrumb.vue";
  import vSearchInput from "@/components/vSearchInput.vue";
  import Accordion from "@/components/Accordion.vue";
  import vTabs from "@/components/Tabs/Tabs.vue";
  import vTab from "@/components/Tabs/Tab.vue";
  import CommentsForm from "@/components/CommentsForm.vue";
  import Appointment from "@/components/Appointment.vue";
  import { useRoute } from "vue-router";

  const route = useRoute();
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
      name: "Service",
      path: route.params.service,
    },
  ];
</script>
<template>
  <div>
    <!-- Section 1 -->
    <section class="container pb-20">
      <bread-crumb class="mt-7" :breadcrumb="breadcrumb" />
      <div class="grid grid-cols-2 mt-10 gap-5">
        <img
          class="w-full object-cover rounded-lg"
          src="../assets/photo/service1.jpg"
          alt=""
        />
        <div class="bg-white py-10 px-7 rounded-lg">
          <h2 class="text-left">Diagnostics</h2>
          <p class="mt-3">
            Medical diagnosis is a key step in identifying diseases and
            developing a treatment plan. Timely detection of pathologies allows
            doctors to start treatment at an early stage, which significantly
            increases the chances of successful recovery and improves the
            prognosis of the disease.
          </p>
          <p class="mt-3">
            Professional doctors and medical staff of our center perform
            diagnostics with great attention to detail, providing accurate and
            reliable results. Our goal is to provide the best possible
            assessment of your health and provide recommendations to maintain
            and restore your well-being.
          </p>
          <button class="mt-5 w-full">Book Now</button>
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="bg-white py-24">
      <div class="container pt-20 flex flex-col items-center">
        <h2>Prices for Diagnostics</h2>
        <vSearchInput class="mt-5 max-w-md" is-bg-gray />
        <Accordion class="mt-10" />
      </div>
    </section>

    <!-- Section 3 -->
    <section class="container py-24">
      <v-tabs :is-vertical="false">
        <v-tab title="Services">
          <div class="grid grid-cols-7 gap-3">
            <div class="col-span-5 flex flex-col justify-between">
              <p>
                Our diagnostic service is a key step in determining your health.
                We understand that the diagnostic process can be stressful, so
                we create a supportive environment for our patients. Our doctors
                and medical staff have extensive experience and work to ensure
                your comfort during each stage.
              </p>
              <p>
                Using advanced technology and modern equipment, we perform a
                wide range of tests to identify potential problems and make an
                accurate diagnosis. Our goal is not only to detect diseases, but
                also to prevent their development and maintain your overall
                health.
              </p>
              <p>
                We strive to make the diagnostic process as clear and accessible
                to you as possible. So that you can get not only the results,
                but also an understanding of your health condition. Our
                specialists are ready to answer your questions, provide
                explanations and recommendations for further treatment.
              </p>
              <p>
                As the entry point to your journey to health, we welcome you and
                promise to provide you with the best level of care and support
                throughout the diagnostic and treatment process. Our goal is
                your health, and we are committed to doing everything we can to
                maintain and improve it.
              </p>
            </div>
            <img
              class="col-span-2 w-full object-cover rounded-lg"
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
    <section class="bg-white py-24">
      <div class="container">
        <CommentsForm />
      </div>
    </section>

    <!-- Section 5 -->
    <section class="container py-24">
      <Appointment />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
