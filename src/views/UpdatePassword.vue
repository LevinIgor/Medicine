<script setup>
  import vInput from "@/components/vInput.vue";
  import DoneIcon from "@/components/icons/done.vue";
  import { ref } from "vue";
  import useStore from "@/store.js";
  import { updatePassword } from "@/supabase/auth.js";

  const authStore = useStore();

  const password = ref("");
  const confirmPassword = ref("");
  const isUpdatePassword = ref(true);
  async function onUpdatePassword() {
    if (password.value !== confirmPassword.value) return;
    const btn = document.getElementById("update-btn");
    btn.disabled = true;
    const response = await updatePassword(password.value);
    btn.disabled = false;

    if (response.error) {
      alert(response.error.message);
      return;
    }

    isUpdatePassword.value = false;
  }
</script>
<template>
  <main class="flex flex-col items-center justify-center py-52 select-none">
    <section class="bg-white py-20 px-10 rounded-lg w-full max-w-xl">
      <article v-if="isUpdatePassword">
        <h3 class="text-center color-gray-200">Reset Password</h3>
        <p class="text-center color-gray-180 font-normal max-w-xs mx-auto">
          Enter a new password for
          <span class="color-gray-200 font-bold">{{
            authStore.getEmailReset
          }}</span>
        </p>
        <form @submit.prevent="onUpdatePassword" class="mt-5 flex flex-col">
          <v-input
            label="New Password"
            type="password"
            placeholder="Create new password"
            class="mt-5"
            required
            autocomplete="off"
            :minlength="8"
            :maxlength="50"
            v-model="password"
          />

          <v-input
            label="Confirm new password"
            type="password"
            placeholder="Confirm confirm password"
            class="mt-5"
            required
            autocomplete="off"
            :minlength="8"
            :maxlength="50"
            v-model="confirmPassword"
          />

          <span
            v-if="password !== confirmPassword"
            class="ml-auto mt-3 text-red-400"
            >The Password must be the same</span
          >

          <button class="w-full mt-10" id="update-btn">Reset password</button>
        </form>
      </article>

      <article v-else>
        <done-icon class="mx-auto block" />
        <h3 class="text-center color-gray-200 mt-3">
          Password Successfully Changed!
        </h3>
        <p class="text-center color-gray-180 font-normal max-w-xs mx-auto mt-4">
          Your account is now secure
        </p>

        <button class="w-full mt-10" @click="$router.push('/')">
          Continue
        </button>
      </article>
    </section>
  </main>
</template>

<style lang="scss" scoped></style>
