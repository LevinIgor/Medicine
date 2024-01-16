<script setup>
  import EmailIcon from "@/components/icons/email.vue";
  import vInput from "@/components/vInput.vue";
</script>
<template>
  <div class="grid grid-cols-5 md:block ">
    <div
      class="col-span-2 flex flex-col items-center justify-center bg-blue-200 md:rounded-t-lg md:py-10 md:px-4"
    >
      <email-icon class="md:w-40" />
      <h5 class="text-white text-center pt-10 md:pt-4 max-w-sm">
        Our staff is ready to accept your appointment and help you choose the
        right time for an appointment
      </h5>
    </div>

    <div class="flex flex-col items-center col-span-3 bg-white p-20 md:px-4 md:py-10">
      <h2 class="text-center">Make an appointment</h2>
      <form @submit.prevent="" class="w-full" name="appointment">
        <div class="grid md:flex md:flex-col md:gap-5 grid-cols-2 gap-3 pt-10">
          <v-input
            class="col-span-2"
            label="Full Name"
            placeholder="Enter Full Name"
            required
          />
          <v-input
            class="col-span-1"
            label="Phone"
            placeholder="+38 (___) ___ - __ - __"
            type="tel"
            required
          />
          <v-input
            class="col-span-1"
            label="Email"
            placeholder="example@gmail.com"
          />
          <v-input
            class="col-span-1"
            label="Date"
            placeholder="Enter Full Name"
            required
            type="date"
          />
          <v-input
            class="col-span-1"
            label="Services"
            placeholder="Necessary services"
            type="select"
            required
          />
        </div>
        <button class="mt-10 mb-10 w-full">Book Now</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
