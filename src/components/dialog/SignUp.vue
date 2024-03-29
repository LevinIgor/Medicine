<script setup>
  import CloseIcon from "@/components/icon/close.vue";
  import vInput from "@/components/input/vInput.vue";
  import DialogWrapper from "@/components/dialog/DialogWrapper.vue";

  import { signUp } from "@/supabase/auth.js";
  import { ref, watch } from "vue";

  const email = ref("");
  const password = ref("");
  const name = ref("");

  const isEmailValid = ref(true);
  const isPasswordValid = ref(true);
  const isNameValid = ref(true);
  const dialogId = "sign-up-dialog";

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
    await signUp(email.value, password.value, name.value);
    closeDialog();
    openSuccessDialog();
  }

  const emailRegExp = RegExp(
    "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$",
    ""
  );

  const passwordRegExp = RegExp("^[a-z0-9]{8,28}$", "i");

  watch([email, password, name], () => {
    isEmailValid.value = emailRegExp.test(email.value);
    isPasswordValid.value = passwordRegExp.test(password.value);
    isNameValid.value = /^[a-z\ ]{2,50}$/i.test(name.value);
  });
</script>
<template>
  <dialog-wrapper :id="dialogId">
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
        :incorrect="!isNameValid"
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
        :incorrect="!isEmailValid"
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
        :incorrect="!isPasswordValid"
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
  </dialog-wrapper>
</template>
<style lang="scss" scoped></style>
