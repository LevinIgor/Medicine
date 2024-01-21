<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import { ref, watch } from "vue";
  import { updateUserPassword } from "@/supabase/user";
  import vInput from "@/components/vInput.vue";
  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "Edit Password",
      path: "/account/Profile",
    },
  ];

  const newPassword = ref("");
  const confirmNewPassword = ref("");

  const incorrectNewPassword = ref(false);
  const incorrectConfirmNewPassword = ref(false);

  function onReset() {
    updateUserPassword(newPassword.value)
  }

  const passwordRegExp = RegExp("^[a-z0-9]{6,28}$", "i");
  watch(newPassword, val => {
    incorrectNewPassword.value = !passwordRegExp.test(val);
  });

  watch(confirmNewPassword, val => {
    incorrectConfirmNewPassword.value = !(
      passwordRegExp.test(val) && newPassword.value === confirmNewPassword.value
    );
  });
</script>
<template>
  <BaseLayout
    :breadcrumb="breadcrumb"
    title="Password"
    :need-appointment="false"
  >
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4"
    >
      <p>
        Update your data to ensure the security and accuracy of the information
        in your profile
      </p>
      <form @submit.prevent="onReset" class="flex flex-col gap-3 mt-5">
        <input
          type="email"
          required
          value="user@mail.com"
          autocomplete="email"
          v-show="false"
        />

        <vInput
          label="Password"
          type="password"
          placeholder="Enter password"
          autocomplete="new-password"
          required
          :minlength="6"
          :maxlength="50"
          v-model="newPassword"
          :incorrect="incorrectNewPassword"
        />

        <vInput
          label="Password"
          type="password"
          placeholder="Enter password"
          autocomplete="new-password"
          required
          :minlength="6"
          :maxlength="50"
          v-model="confirmNewPassword"
          :incorrect="incorrectConfirmNewPassword"
        />

        <button class="w-full mt-10">Reset password</button>
      </form>
      <button
        class="w-full btn-secondary"
        @click="$router.push('/account/Profile')"
      >
        Cancel
      </button>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped>
  select {
    option {
      background-color: red;
      padding: 1rem;
    }
  }
</style>
