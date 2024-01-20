<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/vInput.vue";
  import { ref } from "vue";
  import { updateUserName } from "@/supabase/user.js";
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

  const name = ref("");
</script>
<template>
  <BaseLayout :breadcrumb="breadcrumb" title="Name" :need-appointment="false">
    <div class="bg-white py-6 px-4 rounded-md flex flex-col gap-43">
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
      />

      <button class="w-full mt-5" @click="updateUserName(name)">Save Changes</button>
      <button class="w-full btn-secondary">Cancel</button>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
