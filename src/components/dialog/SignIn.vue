<script setup>
  import CloseIcon from "@/components/icon/close.vue";
  import vInput from "@/components/input/vInput.vue";
  import DialogWrapper from "@/components/dialog/DialogWrapper.vue";
  import { signInWithPassword } from "@/supabase/auth.js";
  import { ref, watch } from "vue";

  const email = ref("");
  const password = ref("");
  const isEmailValid = ref(true);
  const isPasswordValid = ref(true);
  const dialogId = "sign-in-dialog";

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

  const emailRegExp = RegExp(
    "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$",
    "i"
  );

  watch(email, value => {
    isEmailValid.value = emailRegExp.test(value);
  });

  watch(password, value => {
    isPasswordValid.value = /^[a-z0-9_]{8,32}$/i.test(value);
  });
</script>
<template>
  <dialog-wrapper :id="dialogId">
    <CloseIcon
      class="absolute top-5 right-5 cursor-pointer"
      @click="closeModal"
    />
    <h3 class="text-center text-gray-200 md:mt-10">Sign In</h3>
    <p class="text-center mt-3 text-gray-180 font-normal">
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
        :incorrect="!isEmailValid"
      />

      <vInput
        label="Password"
        type="password"
        placeholder="Enter password"
        class="mt-5"
        autocomplete="current-password"
        required
        :minlength="8"
        :maxlength="32"
        v-model="password"
        :incorrect="!isPasswordValid"
      />

      <span
        class="text-blue-180 font-medium block ml-auto cursor-pointer mt-3"
        @click="goToForgotPassword"
        >Forgot password?</span
      >
      <span class="text-red font-medium hidden text-sm" id="sign-in-error"
        >Incorrect password or Email</span
      >
      <button id="sign-in-btn" class="mt-10 w-full">Sign In</button>
    </form>
    <p class="text-center mt-8 text-gray-160 font-normal">
      Don't have an account?
      <span class="cursor-pointer text-blue-180 font-medium" @click="goToSignUp"
        >Sign Up</span
      >
    </p>
  </dialog-wrapper>
</template>
<style lang="scss" scoped></style>
