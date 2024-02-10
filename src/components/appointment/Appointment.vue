<script setup>
  import EmailIcon from "@/components/icon/email.vue";
  import vInput from "@/components/input/vInput.vue";
  import vSelect from "@/components/input/vSelect.vue";

  import { fetchSpecialty } from "@/supabase/doctor.js";
  import { insertReservation } from "@/supabase/reservation.js";
  import { fetchDoctorBySpecialty } from "@/supabase/doctor.js";
  import { ref, watch, reactive } from "vue";

  import useStore from "@/store.js";

  const specialty = ref([]);
  fetchSpecialty().then(data => (specialty.value = data));

  const store = useStore();

  const reservation = reactive({
    name: "",
    email: "",
    phone: "",
    date: "",
    specialty: "",
    user_id: store.user?.id,
    doctor_id: undefined,
  });

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

  watch(
    () => reservation.name,
    val => {
      isNameValid.value = /^[a-z\ ]{2,50}$/i.test(val);
    }
  );

  watch(
    () => reservation.email,
    val => {
      isEmailValid.value = emailRegExp.test(val);
    }
  );

  watch(
    () => reservation.phone,
    val => {
      isPhoneValid.value = phoneRegExp.test(val);
    }
  );

  function showNotification() {
    document.getElementById("dialog-appointment-confirmed").showModal();
  }

  async function onSubmit() {
    if (
      isNameValid.value &&
      isEmailValid.value &&
      isPhoneValid.value &&
      reservation.date.length > 0 &&
      reservation.specialty.length > 0
    ) {
      const doctor = await fetchDoctorBySpecialty(reservation.specialty);
      reservation.doctor_id = doctor.id;

      insertReservation(reservation);
      showNotification();
    }
  }
</script>
<template>
  <div class="grid grid-cols-5 md:block shadow-lg rounded-lg overflow-hidden">
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
      <form
        @submit.prevent="onSubmit"
        class="w-full"
        name="appointment"
        id="appointment-form"
      >
        <div class="grid md:flex md:flex-col md:gap-5 grid-cols-2 gap-3 pt-10">
          <v-input
            class="col-span-2"
            label="Full Name"
            placeholder="Enter Full Name"
            v-model="reservation.name"
            required
            :incorrect="!isNameValid"
          />
          <v-input
            class="col-span-1"
            label="Phone"
            placeholder="+38 (___) ___ - __ - __"
            type="tel"
            v-model="reservation.phone"
            required
            :incorrect="!isPhoneValid"
          />
          <v-input
            class="col-span-1"
            label="Email"
            placeholder="example@gmail.com"
            type="email"
            v-model="reservation.email"
            :incorrect="!isEmailValid"
          />
          <v-input
            class="col-span-1"
            label="Date"
            placeholder="Enter Full Name"
            required
            type="date"
            v-model="reservation.date"
          />
          <div class="">
            <label for="services" class="text-gray-200 text-base font-medium">
              Services
            </label>
            <v-select
              :options="specialty.map(el => el.name)"
              id="services"
              @on-change="reservation.specialty = $event"
            ></v-select>
          </div>
        </div>
        <button class="mt-10 mb-10 w-full">Book Now</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
