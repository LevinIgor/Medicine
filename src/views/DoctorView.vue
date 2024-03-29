<script setup>
  import BreadCrumb from "@/components/breadcrumb/Breadcrumb.vue";
  import StarFilledIcon from "@/components/icon/filled/star.vue";
  import StarEmptyIcon from "@/components/icon/star.vue";
  import PhoneIcon from "@/components/icon/phone.vue";
  import MailIcon from "@/components/icon/email-close.vue";
  import CommentsForm from "@/components/comments-form/CommentsForm.vue";
  import AppointmentForm from "@/components/appointment/Appointment.vue";
  import vTabs from "@/components/tabs/Tabs.vue";
  import vTab from "@/components/tabs/Tab.vue";
  import { ref } from "vue";
  import { fetchDoctor } from "@/supabase/doctor.js";

  import { useRoute } from "vue-router";

  const route = useRoute();
  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Doctors",
      path: "/doctors",
    },
    {
      name: "Dr. John Doe",
      path: "/doctor/1",
    },
  ];

  function showAppointmentDialog() {
    document.getElementById("dialog-appointment").showModal();
  }

  const doctor = ref({});
  fetchDoctor(route.params.id).then(data => {
    doctor.value = data;
  });
</script>
<template>
  <div class="container">
    <bread-crumb class="my-8" :breadcrumb="breadcrumb" />
    <div class="grid md:block grid-cols-2 gap-5">
      <img
        class="w-full h-full aspect-4/3 object-cover object-top rounded-xl"
        :src="doctor.image"
        alt="doctor image"
        loading="lazy"
      />
      <div
        class="bg-white rounded-lg py-10 md:py-6 px-6 md:px-4 md:mt-10 shadow-md"
      >
        <h2 class="text-left">{{ doctor.name }}</h2>
        <div class="flex items-center justify-between">
          <span class="md:text-sm">{{ doctor.specialty }}</span>
          <div class="flex items-center gap-2">
            <star-filled-icon
              v-for="(_, index) in doctor.rating || 0"
              :key="index"
            ></star-filled-icon>
            <star-empty-icon
              v-for="(_, index) in 5 - (doctor.rating || 0)"
              :key="index"
            ></star-empty-icon>
          </div>
        </div>
        <p class="mt-3 w-full">
          {{ doctor.description }}
        </p>
        <div class="flex items-center mt-5">
          <phone-icon class="w-12" />
          <span class="text-gray-160 font-medium">{{ doctor.phone }}</span>
        </div>
        <div class="flex items-center mt-3">
          <mail-icon class="w-12" />
          <span class="text-gray-160 font-medium">{{ doctor.email }}</span>
        </div>

        <div
          class="bg-gray py-4 px-5 flex items-center justify-between mt-8 rounded-lg"
        >
          <div class="flex flex-col">
            <span class="gray-200">Consultation</span>
            <span class="text-4xl md:text-2xl font-medium"
              >${{ doctor.price }}</span
            >
          </div>

          <button @click="showAppointmentDialog">Book Now</button>
        </div>
      </div>
    </div>

    <v-tabs class="my-24" :is-vertical="false">
      <v-tab title="Experience">
        <div class="grid md:block grid-cols-12 gap-6">
          <div class="col-span-8">
            <p>
              Dr. Sophia Campbell is a highly qualified pediatrician with many
              years of experience in pediatric medicine. Throughout her career,
              she has been dedicated to caring for children and ensuring their
              health and well-being.
            </p>
            <p class="mt-3">
              With a wealth of clinical experience and a passionate approach to
              her work, Dr. Campbell has gained extensive experience in treating
              a variety of conditions and caring for children of all ages. She
              specializes in child development, the identification and treatment
              of pathologies, and psychological support for both children and
              their parents.
            </p>
            <p class="mt-3">
              Dr. Campbell has extensive experience in providing preventive
              health screenings, breastfeeding counseling, immunizations, and
              recommendations for optimal child health. Her empathy and ability
              to communicate with children help create a friendly atmosphere
              where each patient feels comfortable and supported.
            </p>
            <p class="mt-3">
              Dr. Sophia Campbell always strives to provide an individualized
              approach to each patient, understanding the uniqueness and
              characteristics of each little person, and assists parents in the
              careful upbringing of their children. Her experience and knowledge
              make Dr. Sophia Campbell a reliable partner at an important stage
              of your children's upbringing and care.
            </p>
          </div>
          <img
            class="col-span-4 w-full object-cover rounded-xl md:mt-5"
            src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Site/image-6.jpg"
            alt="doctor image"
            loading="lazy"
          />
        </div>
      </v-tab>
      <v-tab title="Education"></v-tab>
      <v-tab title="Scientific activity"></v-tab>
    </v-tabs>
  </div>
  <div class="bg-white">
    <div class="container py-24">
      <comments-form class="" :object="$route.params.id"></comments-form>
    </div>
  </div>
  <appointment-form class="container !my-24"></appointment-form>
</template>

<style lang="scss" scoped>
  svg {
    color: white;
  }
</style>
