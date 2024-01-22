<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import { ref, reactive } from "vue";
  import { uploadAvatarAndUpdate } from "@/supabase/user";
  import SuccessEdit from "@/components/dialogs/EditInfo.vue";
  import useStore from "@/store";

  const store = useStore();
  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "Profile Photo",
      path: "/account/Profile",
    },
  ];

  const file = ref("");
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

  function updateUserDataState(url) {
    const user = store.getUser;
    user.avatar_url = url;
    store.setUserData(user);
  }

  async function onUpdate() {
    if (file.value.length == 0) return;
    turnOffBtn();

    const isSuccessful = await uploadAvatarAndUpdate(
      file.value.target.files[0]
    );

    dialogText.title = isSuccessful
      ? "Image Successfully Changed!"
      : "Error during image update!";
    dialogText.subtitle = isSuccessful
      ? "Your data has been updated"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful !== null;

    turnOnBtn();
    showDialog();
    if (isSuccessful) updateUserDataState(isSuccessful);
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
    title="Profile Photo"
    :need-appointment="false"
  >
    <div
      class="bg-white py-6 px-4 rounded-md flex flex-col gap-4 max-w-sm mx-auto"
    >
      <p>
        Select the file to upload and click on the button, after which your
        avatar will be changed
      </p>
      <input
        @change="file = $event"
        type="file"
        accept="image/png, image/jpeg"
      />

      <button id="btn-action" class="w-full mt-10" @click="onUpdate">
        Save Changes
      </button>
      <button
        id="btn-action"
        class="btn-secondary w-full"
        @click="$router.push('/account/Profile')"
      >
        Cancel
      </button>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
