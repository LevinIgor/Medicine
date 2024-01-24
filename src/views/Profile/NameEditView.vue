<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/vInput.vue";
  import { ref, reactive, watch } from "vue";
  import { updateUserName } from "@/supabase/user.js";
  import SuccessEdit from "@/components/dialogs/EditInfo.vue";
  import useStore from "@/store";

  const store = useStore();

  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "Name",
      path: "/account/Profile",
    },
  ];

  const name = ref("");
  const isValid = ref(true);
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

  function updateUserDataState(name) {
    const user = store.getUser;
    user.name = name;
    store.setUserData(user);
  }

  async function onUpdate() {
    turnOffBtn();

    const isSuccessful = await updateUserName(name.value);

    dialogText.title = isSuccessful
      ? "Name Successfully Changed!"
      : "Error during name update!";
    dialogText.subtitle = isSuccessful
      ? "Your data has been updated"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful;

    turnOnBtn();
    showDialog();
    if (isSuccessful) updateUserDataState(name.value);
  }

  watch(name, _name => {
    isValid.value = /^[a-z\ ]{2,32}$/i.test(_name);
  });
</script>
<template>
  <success-edit
    :title="dialogText.title"
    :subtitle="dialogText.subtitle"
    :successful="dialogText.successful"
  ></success-edit>
  <BaseLayout :breadcrumb="breadcrumb" title="Name" :need-appointment="false">
    <div
      class="bg-white py-6 px-4 rounded-md flex flex-col gap-4 max-w-sm mx-auto"
    >
      <p>
        Update your data to ensure the security and accuracy of the information
        in your profile
      </p>
      <v-input
        class="my-5"
        label="Name"
        placeholder="Enter name"
        type="text"
        v-model="name"
        :incorrect="!isValid"
        :maxlength="32"
      />

      <button id="btn-action" class="w-full mt-5" @click="onUpdate">
        Save Changes
      </button>
      <button
        id="btn-action"
        class="w-full btn-secondary"
        @click="$router.push('/account/Profile')"
      >
        Cancel
      </button>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
