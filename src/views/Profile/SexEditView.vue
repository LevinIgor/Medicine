<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vSelect from "@/components/input/vSelect.vue";
  import SuccessEdit from "@/components/dialog/EditInfo.vue";

  import useStore from "@/store";
  import { ref, reactive } from "vue";
  import { updateUserSex } from "@/supabase/user";

  const store = useStore();

  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "User Sex",
      path: "/account/Profile",
    },
  ];

  const sex = ref("");
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

  function updateUserDataState(sex) {
    const user = store.getUser;
    user.sex = sex;
    store.setUserData(user);
  }

  async function onUpdate() {
    if (sex.value.length == 0) return;
    turnOffBtn();

    const isSuccessful = await updateUserSex(sex.value, store.getUser.id);

    dialogText.title = isSuccessful
      ? "Sex Successfully Changed!"
      : "Error during sex update!";
    dialogText.subtitle = isSuccessful
      ? "Your data has been updated"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful;

    turnOnBtn();
    showDialog();
    if (isSuccessful) updateUserDataState(sex.value);
  }
</script>
<template>
  <success-edit
    :title="dialogText.title"
    :subtitle="dialogText.subtitle"
    :successful="dialogText.successful"
  ></success-edit>
  <base-layout :breadcrumb="breadcrumb" title="Sex" :need-appointment="false">
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4"
    >
      <p>Select one of the possible options from the list below</p>
      <v-select
        :options="['Male', 'Female', 'Non-binary']"
        @on-change="sex = $event"
      ></v-select>
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
  </base-layout>
</template>

<style lang="scss" scoped>
  select {
    option {
      background-color: red;
      padding: 1rem;
    }
  }
</style>
