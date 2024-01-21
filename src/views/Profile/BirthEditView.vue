<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import { ref } from "vue";
  import { updateUserDateOfBirth } from "@/supabase/user";

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

  function onSave() {
    console.log(date.value);
    if (date.value.length > 0) updateUserDateOfBirth(date.value);
  }
</script>
<template>
  <BaseLayout
    :breadcrumb="breadcrumb"
    title="Date of Birth"
    :need-appointment="false"
  >
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4"
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aliquam.
      </p>
      <input v-model="date" type="date" name="" id="" />
      <button class="w-full mt-5" @click="onSave">Save Changes</button>
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
