<script setup>
  import EmailIcon from "@/components/icons/email.vue";
  import vInput from "@/components/vInput.vue";
</script>
<template>
  <div class="grid grid-cols-5 md:grid-cols-1">
    <div
      class="col-span-2 flex flex-col items-center justify-center bg-blue-200"
    >
      <email-icon class="" />
      <h5 class="text-white text-center pt-10 max-w-sm">
        Our staff is ready to accept your appointment and help you choose the
        right time for an appointment
      </h5>
    </div>

    <div class="flex flex-col items-center col-span-3 bg-white p-20">
      <h2 class="text-center">Make an appointment</h2>
      <form @submit.prevent="" class="w-full" name="appointment">
        <div class="grid grid-cols-2 gap-3 pt-10">
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
        <button class="mt-10 w-full">Book Now</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
