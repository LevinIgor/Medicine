<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/vInput.vue";
  import { ref } from "vue";
  import { uploadAvatarAndUpdate } from "@/supabase/user";
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

  async function onUpload() {
    if (file.value == "") return;

    uploadAvatarAndUpdate(file.value.target.files[0]);
  }
</script>
<template>
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
      <input @change="file = $event" type="file" name="" id="" />

      <button class="w-full mt-10" id="btn-save" @click="onUpload">
        Save Changes
      </button>
      <button
        class="btn-secondary w-full"
        id="btn-cancel"
        @click="$router.push('/account/Profile')"
      >
        Cancel
      </button>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
