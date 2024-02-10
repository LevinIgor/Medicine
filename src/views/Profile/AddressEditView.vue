<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/input/vInput.vue";
  import SuccessEdit from "@/components/dialog/EditInfo.vue";

  import useStore from "@/store";
  import { ref, reactive, watch } from "vue";
  import { updateUserAddress } from "@/supabase/user";

  const store = useStore();
  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "Address",
      path: "/account/Profile",
    },
  ];

  const address = ref("");
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

  function updateUserDataState(address) {
    const user = store.getUser;
    user.address = address;
    store.setUserData(user);
  }

  async function onUpdate() {
    if (address.value.length == 0) return;
    turnOffBtn();

    const isSuccessful = await updateUserAddress(address.value, store.getUser.id);

    dialogText.title = isSuccessful
      ? "Address Successfully Changed!"
      : "Error during address update!";
    dialogText.subtitle = isSuccessful
      ? "Your data has been updated"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful;

    turnOnBtn();
    showDialog();
    if (isSuccessful) updateUserDataState(address.value);
  }

  watch(address, value => {
    isValid.value = value.length > 3;
  });
</script>
<template>
  <success-edit
    :title="dialogText.title"
    :subtitle="dialogText.subtitle"
    :successful="dialogText.successful"
  ></success-edit>
  <BaseLayout
    :breadcrumb="breadcrumb"
    title="Address"
    :need-appointment="false"
  >
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4 w-full"
    >
      <p>Enter your current residential address</p>
      <v-input
        v-model="address"
        label="Address"
        placeholder="Address City Address"
        :incorrect="!isValid"
        :maxlength="100"
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

<style lang="scss" scoped>
  select {
    option {
      background-color: red;
      padding: 1rem;
    }
  }
</style>
