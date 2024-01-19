<script setup>
  import CloseIcon from "@/components/icons/close.vue";
  import vInput from "@/components/vInput.vue";
  import { signUp } from "@/supabase/auth.js";
  import { ref } from "vue";

  const email = ref("");
  const password = ref("");
  const name = ref("");

  function closeDialog() {
    document.getElementById("sign-up-dialog").close();
  }

  function openSuccessDialog() {
    document.getElementById("success-sign-up-dialog").showModal();
  }

  function goToSignIn() {
    document.getElementById("sign-up-dialog").close();
    document.getElementById("sign-in-dialog").showModal();
  }

  async function onSignUp() {
    const btn = document.querySelector("#sign-up-btn");
    openSuccessDialog();
    btn.disabled = true;
    const response = await signUp(email.value, password.value, name.value);
    btn.disabled = false;
    setTimeout(() => {
      closeDialog();
      openSuccessDialog();
    }, 1000);
  }
</script>
<template>
  <dialog id="sign-up-dialog">
    <CloseIcon
      class="absolute top-5 right-5 cursor-pointer"
      @click="closeDialog"
    />
    <h3 class="text-center text-gray-200 md:mt-10">Sign Up</h3>
    <p class="text-center mt-3 text-gray-180 font-normal">
      Sign Up and become a part of our community
    </p>
    <form @submit.prevent="onSignUp" class="mt-5 flex flex-col">
      <vInput
        class="mt-6"
        label="Full name"
        required
        placeholder="Enter full name"
        autocomplete="name"
        :minlength="2"
        :maxlength="30"
        v-model="name"
      />

      <vInput
        class="mt-4"
        label="Email Address"
        type="email"
        placeholder="Enter email address"
        required
        autocomplete="email"
        :minlength="5"
        :maxlength="50"
        v-model="email"
      />

      <vInput
        class="mt-4"
        label="Password"
        type="password"
        placeholder="Enter password"
        autocomplete="new-password"
        required
        :minlength="8"
        :maxlength="50"
        v-model="password"
      />

      <button class="w-full mt-10" id="sign-up-btn">Sign Up</button>
    </form>
    <p class="mt-16 text-gray-160 text-sm font-normal text-center">
      By continuing, I confirm that I have read and agree to the
      <span class="text-blue-200 font-medium underline cursor-pointer">
        Terms and Conditions and Privacy Policy
      </span>
    </p>

    <p class="mt-8 text-center font-normal text-gray-160">
      Already have an account?
      <span class="text-blue-200 font-medium cursor-pointer" @click="goToSignIn"
        >Sign In</span
      >
    </p>
  </dialog>
</template>
<style lang="scss" scoped></style>
