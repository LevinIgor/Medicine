<script setup>
  import BreadCrumb from "@/components/Breadcrumb.vue";
  import StarFilledIcon from "@/components/icons/filled/star.vue";
  import PhoneIcon from "@/components/icons/phone.vue";
  import MailIcon from "@/components/icons/email-close.vue";
  import CommentsForm from "@/components/CommentsForm.vue";
  import Appointment from "@/components/Appointment.vue";
  import vTabs from "@/components/Tabs/Tabs.vue";
  import vTab from "@/components/Tabs/Tab.vue";

  const breadcrumb = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Doctor",
      path: "/doctor",
    },
    {
      name: "Dr. John Doe",
      path: "/doctor/1",
    },
  ];
</script>
<template>
  <div class="container">
    <bread-crumb class="my-8" :breadcrumb="breadcrumb" />
    <div class="grid md:block grid-cols-2 gap-5">
      <img
        class="w-full object-cover object-top rounded-xl"
        src="../assets/photo/doctor2.jpg"
        alt=""
      />
      <div class="bg-white rounded-lg py-10 md:py-6 px-6 md:px-4 md:mt-10">
        <h2 class="text-left">Dr. Sophia Campbell</h2>
        <div class="flex items-center justify-between">
          <span class="md:text-sm">Pediatrician</span>
          <div class="flex items-center gap-2">
            <star-filled-icon></star-filled-icon>
            <star-filled-icon></star-filled-icon>
            <star-filled-icon></star-filled-icon>
            <star-filled-icon></star-filled-icon>
            <star-filled-icon></star-filled-icon>
          </div>
        </div>
        <p class="mt-3">
          A recognized expert in the field of pediatrics, with strong experience
          and a passionate approach to the treatment and care of children of all
          ages.
        </p>
        <div class="flex items-center mt-5">
          <phone-icon class="w-12" />
          <span class="text-gray-160 font-medium">+38 (068) 668 88 99</span>
        </div>
        <div class="flex items-center mt-3">
          <mail-icon class="w-12" />
          <span class="text-gray-160 font-medium">medclinic@gmail.com</span>
        </div>

        <div class="bg-gray py-4 px-5 flex justify-between mt-8 rounded-lg">
          <div class="flex flex-col">
            <span class="gray-200">Consultation</span>
            <span class="text-4xl md:text-2xl font-medium">$60</span>
          </div>

          <button>Book Now</button>
        </div>
      </div>
    </div>

    <v-tabs class="mt-24" :is-vertical="false">
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
            src="../assets/photo/experience1.jpg"
            alt=""
          />
        </div>
      </v-tab>
      <v-tab title="Education"></v-tab>
      <v-tab title="Scientific activity"></v-tab>
    </v-tabs>
  </div>
  <div class="bg-white">
    <div class="container py-24">
      <comments-form class="" />
    </div>
  </div>
  <appointment class="py-24 container" />
</template>

<style lang="scss" scoped>
  svg {
    color: white;
  }

  img {
    max-height: 460px;
  }
</style>
