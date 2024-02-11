<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/input/vInput.vue";
  import EditInfo from "@/components/dialog/EditInfo.vue";

  import { ref, watch, reactive } from "vue";
  import { updateUserPassword } from "@/supabase/user";

  const breadcrumb = [
    {
      name: "Profile",
      path: "/account",
    },
    {
      name: "Password",
      path: "/account",
    },
  ];

  const newPassword = ref("");
  const confirmNewPassword = ref("");

  const incorrectNewPassword = ref(false);
  const incorrectConfirmNewPassword = ref(false);

  const dialogText = reactive({
    title: "",
    subtitle: "",
    successful: true,
  });

  function turnOffBtn() {
    document.getElementById("btn-action").disabled = true;
  }

  function turnOnBtn() {
    document.getElementById("btn-action").disabled = false;
  }

  function showDialog() {
    document.getElementById("dialog-success-edit").showModal();
  }

  async function onUpdate() {
    if (incorrectNewPassword.value || incorrectConfirmNewPassword.value) return;

    turnOffBtn();

    const isSuccessful = await updateUserPassword(newPassword.value);

    dialogText.title = isSuccessful
      ? "Password Successfully Changed!"
      : "Error during password update!";
    dialogText.subtitle = isSuccessful
      ? "Your data has been updated"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful;

    turnOnBtn();
    showDialog();
  }

  const passwordRegExp = RegExp("^[a-z0-9]{8,28}$", "i");
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
  <edit-info
    :title="dialogText.title"
    :subtitle="dialogText.subtitle"
    :successful="dialogText.successful"
  ></edit-info>
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
      <form @submit.prevent="onUpdate" class="flex flex-col gap-3 mt-5">
        <input
          type="email"
          required
          value="user@mail.com"
          autocomplete="email"
          v-show="false"
        />

        <vInput
          label="New Password"
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
          label="Confirm Password"
          type="password"
          placeholder="Enter password"
          autocomplete="new-password"
          required
          :minlength="6"
          :maxlength="50"
          v-model="confirmNewPassword"
          :incorrect="incorrectConfirmNewPassword"
        />

        <button id="btn-action" class="w-full mt-10">Reset password</button>
      </form>
      <button
        id="btn-action"
        class="w-full btn-secondary"
        @click="$router.push('/account')"
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
