<script setup>
  import SyngentaIcon from "@/components/icons/company/syngenta.vue";
  import MerckIcon from "@/components/icons/company/merck.vue";
  import AllerganIcon from "@/components/icons/company/allergan.vue";
  import ArdioIcon from "@/components/icons/company/ardio.vue";
  import EsterlineIcon from "@/components/icons/company/esterline.vue";
  import RegeneronIcon from "@/components/icons/company/regeneron.vue";

  import MedKitIcon from "@/components/icons/med-kit.vue";
  import ClockIcon from "@/components/icons/clock.vue";
  import DocumentIcon from "@/components/icons/document.vue";
  import ArrowSquareIcon from "@/components/icons/arrow-square.vue";

  import "swiper/scss";
  import "swiper/scss/pagination";
  import "swiper/scss/navigation";
  import "swiper/scss/virtual";

  import ServiceCard from "@/components/ServiceCard.vue";
  import DoctorsSlider from "@/components/DoctorsSlider.vue";
  import GoogleMap from "@/components/GoogleMap.vue";
  import ReviewSlider from "@/components/ReviewSlider.vue";
  import FAQ from "@/components/FAQ.vue";
  import Appointment from "@/components/Appointment.vue";

  import { ref, computed } from "vue";
  import { fetchDoctorsForHomePage } from "@/supabase/doctor.js";
  import { fetchServices } from "@/supabase/service.js";

  const services = ref([]);
  fetchServices(6).then(_services => (services.value = _services));

  const doctors = ref([]);
  fetchDoctorsForHomePage(8).then(_doctors => (doctors.value = _doctors));

  const slidesPerView = computed(() => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 3;
    return 4;
  });

  const needDetails = computed(() => {
    const width = window.innerWidth;
    return width > 600;
  });
</script>

<template>
  <main>
    <!-- Section 1 -->
    <section class="bg-white py-32 md:py-24">
      <div class="flex flex-col items-center container">
        <h1 class="max-w-3xl">
          Consult Your
          <span class="text-blue-200 text-6xl md:text-4xl">Health</span>
          Issue Easily And Quickly
        </h1>
        <p class="text-center max-w-3xl mt-3">
          Connecting you with the best healthcare profusions and resources using
          technology and innovation
        </p>
        <button class="mt-5">Book Now</button>
        <h6 class="mt-40 md:mt-24 text-center">
          Our Most Valuable Trusted Partners
        </h6>
        <div class="grid grid-cols-6 mt-1 md:grid-cols-3 w-full">
          <syngenta-icon class="w-full" />
          <merck-icon class="w-full" />
          <allergan-icon class="w-full" />
          <ardio-icon class="w-full" />
          <esterline-icon class="w-full" />
          <regeneron-icon class="w-full" />
        </div>
      </div>
    </section>

    <!-- Section 2 -->
    <section class="container flex flex-col items-center py-32 md:py-24">
      <h2 class="max-w-xl">How to make an appointment with a doctor</h2>
      <p class="mt-3 max-w-lg text-center">
        Find out how easy and fast it is to sign up for a consultation with our
        specialists online
      </p>
      <div class="gap-3 mt-10 flex md:flex-col">
        <div class="bg-white py-10 md:py-6 px-6 md:px-4 rounded-md">
          <medKit-icon />
          <h5 class="mt-4 text-left">Select a medical specialty</h5>
          <p class="mt-2 md:mt-0">
            Select the required medical specialty or doctor you want to make an
            appointment with
          </p>
        </div>
        <div class="bg-white py-10 md:py-6 px-6 md:px-4 rounded-md">
          <clock-icon />
          <h5 class="mt-3 text-left">Choose the time and date</h5>
          <p class="mt-2 md:mt-0">
            Choose a convenient time and date for your consultation, taking into
            account the doctor's availability
          </p>
        </div>
        <div class="bg-white py-10 md:py-6 px-6 md:px-4 rounded-md">
          <document-icon />
          <h5 class="mt-3 text-left">Fill out the registration form</h5>
          <p class="mt-2 md:mt-0">
            Fill out a short form with your personal information and contact
            details to confirm your appointment
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section class="bg-white">
      <div class="container grid grid-cols-2 md:grid-cols-1 gap-5 py-24">
        <img
          src="@/assets/photo/person1.jpg"
          alt="Person picture"
          class="w-full overflow-hidden rounded-md"
        />
        <div class="flex flex-col justify-between h-full">
          <span class="label-blue my-3">About Us</span>
          <h2 class="text-left">Empowering Heartier Lives, One Step a Time</h2>
          <p class="md:mt-3">
            We are expanding opportunities for a healthy life, step by step. Our
            dedicated team includes professionals who care about your well-being
            and peace of mind. We believe in a personalized approach and
            innovative solutions to provide you with the best quality of
            service.
          </p>
          <button class="mt-5 md:mt-5">Read More</button>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section class="container flex flex-col items-center py-32 md:py-24">
      <h2 class="max-w-md">Exceptionally High Standards</h2>
      <p class="text-center max-w-lg mt-3">
        Our goal is to provide outstanding quality of care, effective treatment
        and complete satisfaction of your healthcare needs
      </p>
      <div class="grid grid-cols-12 md:block gap-5 mt-10">
        <div class="col-span-5 grid md:block grid-rows-6 gap-5">
          <div
            class="row-span-4 md:row-span-1 bg-blue-160 rounded px-6 md:px-4 py-10 md:py-6 flex flex-col md:mt-5"
          >
            <h4>Reception at a convenient time and without a queue</h4>
            <p class="mt-3 md:mt-1">
              Schedule a visit to a doctor online and don't waste time waiting
              in lines
            </p>
            <button class="mt-5">Find a doctor</button>
          </div>
          <div
            class="row-span-2 md:row-span-1 bg-violet-180 rounded px-6 md:px-4 py-10 md:py-6 md:mt-5"
          >
            <h5>Quality of medical services</h5>
            <p class="mt-3 md:mt-1">
              Guaranteeing the highest level of medical treatment, taking into
              account modern technologies and best practices
            </p>
          </div>
        </div>
        <div class="grid grid-rows-6 md:block col-span-7 gap-5">
          <div class="grid grid-cols-10 md:block row-span-2 gap-5">
            <div
              class="col-span-4 bg-violet-180 rounded px-6 md:px-4 py-10 md:py-6 md:mt-5"
            >
              <h5>Patient's personal account</h5>
              <arrow-square-icon class="mt-5 md:mt-3" />
            </div>
            <div
              class="col-span-6 bg-violet-180 rounded px-6 md:px-4 py-10 md:py-6 md:mt-5"
            >
              <h5>Modern equipment</h5>
              <p class="mt-3 md:mt-1">
                Our clinic uses cutting-edge technology for precise diagnosis
                and treatment with advanced medical equipment.
              </p>
            </div>
          </div>
          <div
            class="row-span-4 md:row-auto bg-blue-160 rounded px-6 md:px-4 py-10 md:py-6 flex flex-col md:mt-5"
          >
            <h4>Wide range of services</h4>
            <p class="mt-3 md:mt-1">
              We offer a variety of medical services and specializations, which
              allows us to provide comprehensive treatment and care.
            </p>
            <button class="mt-auto md:mt-5">Find a services</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 5 -->
    <section class="bg-white">
      <div class="container py-32 md:py-24 flex flex-col items-center">
        <span class="label-blue">Services</span>
        <h2 class="mt-3">Our Services</h2>
        <p class="mt-3 text-center max-w-lg">
          A wide range of effective and personalized medical services for your
          well-being and health
        </p>
        <div class="grid grid-cols-3 md:grid-cols-1 gap-5 mt-5 w-full">
          <service-card
            v-for="(service, index) in services"
            :key="index"
            :name="service.name"
            :image="service.image"
            @click="
              $router.push({
                name: 'service',
                params: { service: service.name },
              })
            "
          />
        </div>
        <a class="link-blue text-center mt-5" href="/services"
          >See all services</a
        >
      </div>
    </section>

    <!-- Section 6 -->
    <section class="container flex flex-col items-center py-32 md:py-24">
      <span class="label-blue text-center">Doctors</span>
      <h2 class="mt-3">Our Specialist Doctors</h2>
      <p class="text-center max-w-lg mt-3">
        A wide range of effective and personalized medical services for your
        well-being and health
      </p>
      <doctors-slider
        class="mt-10"
        v-if="doctors.length > 0"
        :doctors="doctors"
        :slides-per-view="slidesPerView"
      />
      <a class="link-blue mt-5" href="/doctors">See all doctors</a>
    </section>

    <!-- Section 7 -->
    <section class="bg-white">
      <div class="container flex flex-col items-center py-32 md:py-24">
        <span class="label-blue text-center">Contact Us</span>
        <h2 class="mt-3">Contact Us</h2>
        <p class="text-center mt-3">
          We are here to answer your questions. Contact our team for
          consultations and to make an appointment
        </p>

        <google-map class="mt-10 self-stretch" :need-details="needDetails" />
      </div>
    </section>

    <!-- Section 8 -->
    <section class="container py-32 md:py-24 flex flex-col items-center">
      <h2 class="max-w-md">What Our Client Says About Us</h2>
      <p class="text-center mt-3 max-w-md">
        Where your health journey begins with tailored care and advanced medical
        expertise
      </p>

      <review-slider class="mt-10" />
    </section>

    <!-- Section 9 -->
    <section class="bg-white">
      <div class="py-32 md:py-24 flex flex-col items-center container">
        <span class="label-blue">FAQ</span>
        <h2 class="max-w-md mt-3">Frequently Asked Questions</h2>
        <p class="text-center max-w-lg mt-3">
          Get explanations and information on the most frequently asked
          questions about health care
        </p>
        <FAQ class="mt-10" :limit="4" />
      </div>
    </section>

    <!-- Section 10 -->
    <section class="bg-gray">
      <div class="container py-32 md:py-24">
        <appointment />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
  @media screen and (max-width: 768px) {
    svg {
      max-width: 10rem;
    }
  }
</style>
