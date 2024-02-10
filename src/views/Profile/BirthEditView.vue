<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import SuccessEdit from "@/components/dialog/EditInfo.vue";

  import useStore from "@/store";
  import { ref, reactive } from "vue";
  import { updateUserDateOfBirth } from "@/supabase/user";

  const store = useStore();
  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "Date of Birth",
      path: "/account/Profile",
    },
  ];

  const date = ref("");
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

  function updateUserDataState(date) {
    const user = store.getUser;

    user.dateOfBirth = date;
    store.setUserData(user);
  }

  async function onUpdate() {
    if (date.value.length == 0) return;
    turnOffBtn();

    const isSuccessful = await updateUserDateOfBirth(
      date.value,
      store.getUser.id
    );

    dialogText.title = isSuccessful
      ? "Date of Birth Successfully Changed!"
      : "Error during date update!";
    dialogText.subtitle = isSuccessful
      ? "Your data has been updated"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful;

    turnOnBtn();
    showDialog();
    if (isSuccessful) updateUserDataState(date.value);
  }
</script>
<template>
  <success-edit
    :title="dialogText.title"
    :subtitle="dialogText.subtitle"
    :successful="dialogText.successful"
  ></success-edit>
  <BaseLayout
    :breadcrumb="breadcrumb"
    title="Date of Birth"
    :need-appointment="false"
  >
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4"
    >
      <p>Enter your birthday date in the input field below</p>
      <input v-model="date" type="date" name="" id="" />
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

<style lang="scss" scoped>
  select {
    option {
      background-color: red;
      padding: 1rem;
    }
  }
</style>
