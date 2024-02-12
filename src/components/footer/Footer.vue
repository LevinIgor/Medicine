<script setup>
  import LogoIcon from "@/components/icon/logo-white.vue";
  import TelegramIcon from "@/components/icon/social/telegram-filled.vue";
  import FacebookIcon from "@/components/icon/social/facebook-filled.vue";
  import InstagramIcon from "@/components/icon/social/instagram-filled.vue";
  import TwitterIcon from "@/components/icon/social/twitter-filled.vue";
  import YoutubeIcon from "@/components/icon/social/youtube-filled.vue";

  function showAppointmentDialog() {
    document.getElementById("dialog-appointment").showModal();
  }
</script>
<template>
  <footer class="bg-gray-200 py-10 md:p-3">
    <div class="container">
      <div class="flex justify-between md:block pt-20 md:pt-14">
        <h4 class="text-white max-w-md">
          Get Started And Book An Appointment Today
        </h4>
        <button
          class="md:mt-5 md:w-full shadow-gray-180 shadow-sm"
          @click="showAppointmentDialog"
        >
          Book Now
        </button>
      </div>
      <div class="line" />
      <div class="grid grid-cols-5 md:grid-cols-2 gap-5">
        <div class="col-span-3 md:col-span-2 md:order-3">
          <LogoIcon />
          <p class="mt-5 md:mt-0 max-w-lg text-gray-100">
            Your satisfaction is our main goal. We work for your health and
            comfort. Contact us to get professional medical care. Your
            well-being is our priority. Reliable support at all stages of your
            treatment. We are here to make your life better.
          </p>
        </div>
        <div
          class="col-span-1 flex flex-col text-bg gap-2 font-medium text-sm text-gray"
        >
          <span class="text-white font-semibold mb-1 text-base">Menu</span>

          <span
            class="text-gray cursor-pointer"
            @click="$router.push('/about-us')"
            >About Us</span
          >
          <span
            class="text-gray cursor-pointer"
            @click="$router.push('/services')"
            >Services</span
          >
          <span
            class="text-gray cursor-pointer"
            @click="$router.push('/doctors')"
            >Doctors</span
          >
          <span
            class="text-gray cursor-pointer"
            @click="$router.push('/contact-us')"
            >Contact Us</span
          >
          <span class="text-gray cursor-pointer" @click="$router.push('/faq')"
            >FAQ</span
          >
        </div>
        <div
          class="col-span-1 flex flex-col text-gray gap-2 font-normal text-sm"
        >
          <span class="font-semibold mb-1 text-base">Contacts</span>
          <span>+38 (068) 668 88 99</span>
          <a
            class="underline text-gray font-normal text-sm"
            href="mailto:medclinic@gmail.com"
            >medclinic@gmail.com</a
          >
          <span>68 Khreschatyk Street, MedClinic Center, Kyiv, Ukraine</span>
        </div>
      </div>
      <div class="line" />
      <div class="flex gap-3 md:items-center md:flex-col-reverse">
        <span class="text-gray-100 md:mt-5 font-normal text-xs"
          >@2023 DentalClinic. All Rights Reserved.</span
        >
        <div class="ml-auto md:ml-0 flex gap-3">
          <TelegramIcon />
          <YoutubeIcon />
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .line {
    height: 1px;
    width: 100%;
    background-color: var(--gray-180);
    margin: 40px 0;
  }
</style>
