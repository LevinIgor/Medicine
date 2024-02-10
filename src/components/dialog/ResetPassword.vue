<script setup>
  import CloseIcon from "@/components/icon/close.vue";
  import ArrowLeftIcon from "@/components/icon/arrow-left.vue";
  import vInput from "@/components/input/vInput.vue";
  import DialogWrapper from "@/components/dialog/DialogWrapper.vue";

  import useStore from "@/store.js";
  import { resetPassword } from "@/supabase/auth.js";
  import { ref, watch } from "vue";

  const email = ref("");
  const isEmailValid = ref(true);
  const dialogId = "reset-password-dialog";
  const store = useStore();

  function closeModal() {
    document.getElementById("reset-password-dialog").close();
  }

  function goToSignIn() {
    document.getElementById("sign-in-dialog").showModal();
    closeModal();
  }

  function onResetPassword() {
    store.setResetPasswordEmail(email.value);
    resetPassword(email.value);
    document.getElementById("check-email-dialog").showModal();
    closeModal();
  }

  const emailRegExp = RegExp(
    "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$",
    ""
  );

  watch(email, val => {
    isEmailValid.value = emailRegExp.test(val);
  });
</script>
<template>
  <dialog-wrapper :id="dialogId">
    <arrow-left-icon
      class="absolute top-5 left-5 cursor-pointer"
      @click="goToSignIn"
    />
    <close-icon
      class="absolute top-5 right-5 cursor-pointer"
      @click="closeModal"
    />

    <h3 class="text-center color-gray-200 md:mt-10">Forgot password</h3>
    <p class="text-center color-gray-180 font-normal">
      Enter your email address
    </p>
    <form @submit.prevent="onResetPassword" class="mt-5 flex flex-col">
      <v-input
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

      <button class="w-full mt-10" @click="stage = 2">Continue</button>
    </form>
  </dialog-wrapper>
</template>

<style lang="scss" scoped></style>
