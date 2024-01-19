<script setup>
  import CloseIcon from "@/components/icons/close.vue";
  import vInput from "@/components/vInput.vue";

  import { signInWithPassword } from "@/supabase/auth.js";
  import { ref } from "vue";

  const email = ref("");
  const password = ref("");

  const closeModal = () => document.getElementById("sign-in-dialog").close();
  const goToSignUp = () => {
    closeModal();
    document.getElementById("sign-up-dialog").showModal();
  };

  const goToForgotPassword = async () => {
    closeModal();
    document.getElementById("reset-password-dialog").showModal();
  };

  const signIn = async () => {
    const btn = document.querySelector("#sign-in-btn");
    const error = document.getElementById("sign-in-error");

    btn.disabled = true;
    const response = await signInWithPassword(email.value, password.value);
    btn.disabled = false;

    if (response.error && response.error.status === 400) {
      error.style.display = "block";
      setTimeout(() => (error.style.display = "none"), 3000);
      return;
    }

    closeModal();
  };
</script>
<template>
  <dialog id="sign-in-dialog">
    <CloseIcon
      class="absolute top-5 right-5 cursor-pointer"
      @click="closeModal"
    />
    <h3 class="text-center text-gray-200 md:mt-10">Sign In</h3>
    <p class="text-center mt-3 text-gray-180 font-normal ">
      Sign Up and become a part of our community
    </p>
    <form @submit.prevent="signIn" class="mt-6 flex flex-col">
      <vInput
        label="Email Address"
        type="email"
        placeholder="example@gmail.com"
        class="mt-5"
        required
        autocomplete="email"
        :minlength="5"
        :maxlength="50"
        v-model="email"
      />

      <vInput
        label="Password"
        type="password"
        placeholder="Enter password"
        class="mt-5"
        autocomplete="current-password"
        required
        :minlength="6"
        :maxlength="50"
        v-model="password"
      />

      <span
        class="text-blue-180 font-medium block ml-auto cursor-pointer mt-3"
        @click="goToForgotPassword"
        >Forgot password?</span
      >
      <span class="text-red font-semibold hidden" id="sign-in-error"
        >Incorrect password or Email</span
      >
      <button id="sign-in-btn" class="mt-10 w-full">Sign In</button>
    </form>
    <p class="text-center mt-8 text-gray-160 font-normal">
      Don't have an account?
      <span
        class="cursor-pointer text-blue-180 font-medium"
        @click="goToSignUp"
        >Sign Up</span
      >
    </p>
  </dialog>
</template>
<style lang="scss" scoped></style>
