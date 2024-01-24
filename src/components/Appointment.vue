<script setup>
  import EmailIcon from "@/components/icons/email.vue";
  import vInput from "@/components/vInput.vue";
  import { ref, watch } from "vue";
  import vSelect from "@/components/vSelect.vue";

  const name = ref("");
  const email = ref("");
  const phone = ref("");
  const date = ref("");
  const services = ref("");

  const emailRegExp = RegExp(
    "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$",
    ""
  );

  const phoneRegExp = RegExp(
    "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
    "mi"
  );

  const isNameValid = ref(true);
  const isEmailValid = ref(true);
  const isPhoneValid = ref(true);

  watch([name, email, phone], () => {
    isNameValid.value = /^[a-z\ ]{2,50}$/i.test(name.value);
    isEmailValid.value = emailRegExp.test(email.value);
    isPhoneValid.value = phoneRegExp.test(phone.value);
  });

  function onSubmit() {
    if (
      isNameValid.value &&
      isEmailValid.value &&
      isPhoneValid.value &&
      date.value.length > 0 &&
      services.value.length > 0
    ) {
      document.getElementById("dialog-appointment-confirmed").showModal();
    }
  }
</script>
<template>
  <div class="grid grid-cols-5 md:block">
    <div
      class="col-span-2 flex flex-col items-center justify-center bg-blue-200 md:rounded-t-lg md:py-10 md:px-4"
    >
      <email-icon class="md:w-40" />
      <h5 class="text-white text-center pt-10 md:pt-4 max-w-sm">
        Our staff is ready to accept your appointment and help you choose the
        right time for an appointment
      </h5>
    </div>

    <div
      class="flex flex-col items-center col-span-3 bg-white p-20 md:px-4 md:py-10"
    >
      <h2 class="text-center">Make an appointment</h2>
      <form @submit.prevent="onSubmit" class="w-full" name="appointment">
        <div class="grid md:flex md:flex-col md:gap-5 grid-cols-2 gap-3 pt-10">
          <v-input
            class="col-span-2"
            label="Full Name"
            placeholder="Enter Full Name"
            v-model="name"
            required
            :incorrect="!isNameValid"
          />
          <v-input
            class="col-span-1"
            label="Phone"
            placeholder="+38 (___) ___ - __ - __"
            type="tel"
            v-model="phone"
            required
            :incorrect="!isPhoneValid"
          />
          <v-input
            class="col-span-1"
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            v-model="email"
            :incorrect="!isEmailValid"
          />
          <v-input
            class="col-span-1"
            label="Date"
            placeholder="Enter Full Name"
            required
            type="date"
            v-model="date"
          />
          <div class="">
            <label for="services" class="text-gray-200 text-base font-medium">
              Services
            </label>
            <v-select
              :options="['sdsd', 'sdsds', 'sdsdds']"
              id="services"
              @on-change="services = $event"
            ></v-select>
          </div>
        </div>
        <button class="mt-10 mb-10 w-full">Book Now</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
