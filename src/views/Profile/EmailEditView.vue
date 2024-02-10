<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/input/vInput.vue";
  import SuccessEdit from "@/components/dialog/EditInfo.vue";

  import { ref, watch, reactive } from "vue";
  import { updateUserEmail } from "@/supabase/user";

  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "Email",
      path: "/account/Profile",
    },
  ];

  const email = ref("");
  const isValid = ref(true);
  const emailRegExp = RegExp(
    "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$",
    ""
  );

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
    if (!emailRegExp.test(email.value)) return;
    turnOffBtn();

    const isSuccessful = await updateUserEmail(email.value);

    dialogText.title = isSuccessful
      ? "Email Successfully Changed!"
      : "Error during email update!";
    dialogText.subtitle = isSuccessful
      ? "Check new email address for confirm link"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful;

    turnOnBtn();
    showDialog();
  }

  watch(email, _email => {
    isValid.value = emailRegExp.test(_email);
  });
</script>
<template>
  <success-edit
    :title="dialogText.title"
    :subtitle="dialogText.subtitle"
    :successful="dialogText.successful"
  ></success-edit>
  <BaseLayout :breadcrumb="breadcrumb" title="Email" :need-appointment="false">
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4"
    >
      <p>
        Enter your new email address and a confirmation email will be sent to
        you
      </p>

      <v-input
        v-model="email"
        label="User Email"
        type="email"
        pattern=""
        :incorrect="!isValid"
        icon="phone"
        placeholder="user@mail.com"
      />

      <button id="btn-action" class="w-full mt-5" @click="onUpdate">
        Save Changes
      </button>
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

<style lang="scss" scoped></style>
