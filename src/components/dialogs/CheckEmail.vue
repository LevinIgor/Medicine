<script setup>
  import CloseIcon from "@/components/icons/close.vue";
  import useStore from "@/store.js";

  const store = useStore();

  function closeModal() {
    document.getElementById("check-email-dialog").close();
  }
</script>
<template>
  <dialog id="check-email-dialog">
    <close-icon
      class="absolute top-5 right-5 cursor-pointer"
      @click="closeModal"
    />

    <h3 class="text-center color-gray-200 md:mt-10">Check your email</h3>
    <p class="text-center color-gray-180 font-normal mt-3">
      To set a new password, you have been sent an email
      <span class="font-semibold">{{ store.getEmailReset }}</span
      >, follow the link to confirm. If you do not see our email, please check
      your spam folder in your inbox
    </p>
    <form @submit.prevent="closeModal" class="mt-5 flex flex-col">
      <button class="w-full mt-10">Continue</button>
    </form>
  </dialog>
</template>

<style lang="scss" scoped></style>
