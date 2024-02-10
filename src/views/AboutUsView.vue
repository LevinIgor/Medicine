<script setup>
  import vBreadcrumb from "@/components/breadcrumb/Breadcrumb.vue";
  import vTabs from "@/components/tabs/Tabs.vue";
  import vTab from "@/components/tabs/Tab.vue";
  import DoctorCard from "@/components/card/DoctorCard.vue";
  import GoogleMap from "@/components/google-map/GoogleMap.vue";
  import vAppointment from "@/components/appointment/Appointment.vue";

  import { fetchDoctorsForDoctorsPage } from "@/supabase/doctor.js";
  import { ref } from "vue";

  const doctors = ref([]);
  const breadcrumb = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us/" },
  ];

  fetchDoctorsForDoctorsPage(3).then(response => (doctors.value = response));
</script>
<template>
  <div class="container">
    <v-breadcrumb class="my-5" :breadcrumb="breadcrumb" />
    <h2 class="text-left my-6 md:text-center">About Us</h2>
    <v-tabs>
      <v-tab title="Our History" icon="info">
        <h3 class="text-center">Our history</h3>
        <p class="mt-3">
          We, the MedClinic team, are proud of our history. Our clinic was born
          from the idea of combining technology, experience, and a deep
          understanding of the needs of each patient. We started this journey
          with a big dream - to create a medical institution where everyone can
          feel confident and supported.
        </p>
        <p class="mt-3">
          Our doors are always open for everyone who is looking for answers to
          questions about their health. We strive to create an atmosphere of
          comfort and tranquility where you will feel supported and receive the
          best medical care.
        </p>
        <p class="mt-3">
          Our team is not only highly qualified specialists, but also people
          with a big heart. We understand that each patient is unique, and that
          is why we provide an individualized approach to each case.
        </p>
        <p class="mt-3">
          Our success lies not only in our medical achievements, but also in the
          community we build. We do our best to make our patients feel
          comfortable and supported, building a path to health and well-being
          together with them.
        </p>
        <p class="mt-3">
          We are grateful for the trust you place in us and are always ready to
          help you on your journey to health. MedClinic is not just a clinic, it
          is a community that is always by your side.
        </p>
        <img
          class="w-full object-cover rounded-lg mt-5"
          src="https://eutcxspxmeegqptbvfjt.supabase.co/storage/v1/object/public/Site/image-5.jpg"
          alt=""
          loading="lazy"
        />

        <h3 class="text-center mt-16">Advantages</h3>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold"
            >Competence and Experience:</span
          >
          We are a team of highly qualified specialists with extensive
          experience in various fields of medicine. Our doctors constantly
          confirm their expertise and use advanced treatment approaches.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Individual Approach:</span>
          We understand the uniqueness of each patient. Our main goal is to
          provide an individual and attentive approach to each case, developing
          a personalized treatment plan.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Modern Technologies:</span>
          We use advanced technologies and treatments to accurately diagnose and
          effectively address medical problems.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Friendly Staff:</span>
          Our team are people with a big heart, always ready to help and support
          patients at any time. We create an atmosphere of comfort and support
          for every visitor.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Comfort and Coziness:</span>
          Our clinic offers a cozy atmosphere where you will feel comfortable
          and confident. Clean rooms and modern design complement our approach
          to health and well-being.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold"
            >Community Initiatives:</span
          >
          We conduct lectures and consultations aimed at increasing health
          literacy among the public, which allows us to build a community of
          health.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold"
            >Continuous Development:</span
          >
          We are constantly improving and expanding our capabilities to provide
          better medical services and meet the needs of our patients.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Trust and Reputation:</span>
          Our clinic is trusted and respected by both the medical community and
          patients due to our reliable approach and high quality of medical
          services.
        </p>

        <h3 class="text-center mt-16">Areas of work</h3>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Diagnostics:</span>
          We offer a wide range of diagnostic services, including laboratory
          tests, imaging (X-ray, ultrasound, CT, MRI), and other modern
          diagnostic methods.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Therapy:</span>
          We provide effective methods of conservative treatment, drug therapies
          and rehabilitation measures to maintain health and recover from
          illness or injury.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Surgery:</span>
          Our qualified surgeons perform a wide range of surgical interventions
          in various fields of medicine, from trauma and orthopedic surgery to
          complex surgical interventions.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Pediatrics:</span>
          Specialized medical care for children of all ages, including
          vaccinations, childhood diseases and development.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Dermatology:</span>
          Diagnosis and treatment of skin diseases, cosmetic procedures and
          consultations.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Psychology:</span>
          Our psychologists and psychotherapists provide professional
          psychological help, counseling and psychotherapy for various
          psychological problems and emotional well-being.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Cardiology:</span>
          Diagnosis and treatment of cardiovascular diseases, preventive
          measures and recommendations for maintaining heart health.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Endocrinology:</span>
          Treatment of diseases of the endocrine system, diagnosis and
          correction of hormonal levels.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Ophthalmology:</span>
          Diagnosis and treatment of eye diseases, consultations on visual
          health and the choice of frames and lenses.
        </p>
        <p class="mt-3">
          <span class="text-gray-200 font-semibold">Neurology:</span>
          Diagnosis and treatment of diseases of the nervous system,
          rehabilitation after neurological complications.
        </p>

        <h3 class="mt-16 text-center">Our team</h3>
        <div class="grid grid-cols-3 md:grid-cols-1 gap-5 mt-5">
          <doctor-card
            v-for="(doctor, index) in doctors"
            :key="index"
            :doctor="doctor"
          ></doctor-card>
        </div>
        <a
          href="/doctors"
          class="link-blue block text-center mt-5 cursor-pointer"
          >See all doctors</a
        >
        <h3 class="text-center mt-16">Where we are located</h3>
        <google-map class="mt-5" />
      </v-tab>
      <v-tab title="Advantages" icon="gray-star">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Advantages</h1>
          <p class="text-gray-200 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatem
            quas doloribus quidem voluptatibus. Quisquam voluptatum, voluptate,
            quibusdam, quia voluptas quod quos voluptatem quas doloribus quidem
            voluptatibus.
          </p>
        </div>
      </v-tab>
      <v-tab title="Areas of work" icon="settings">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Areas of work</h1>
          <p class="text-gray-200 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatem
            quas doloribus quidem voluptatibus. Quisquam voluptatum, voluptate,
            quibusdam, quia voluptas quod quos voluptatem quas doloribus quidem
            voluptatibus.
          </p>
        </div>
      </v-tab>
      <v-tab title="Our team" icon="profile">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Our team</h1>
          <p class="text-gray-200 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatem
            quas doloribus quidem voluptatibus. Quisquam voluptatum, voluptate,
            quibusdam, quia voluptas quod quos voluptatem quas doloribus quidem
            voluptatibus.
          </p>
        </div></v-tab
      >
      <v-tab title="Where we are located" icon="marker">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Where we are located</h1>
          <p class="text-gray-200 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatem
            quas doloribus quidem voluptatibus. Quisquam voluptatum, voluptate,
            quibusdam, quia voluptas quod quos voluptatem quas doloribus quidem
            voluptatibus.
          </p>
        </div></v-tab
      >
    </v-tabs>

    <v-appointment class="my-20" />
  </div>
</template>

<style lang="scss" scoped></style>
