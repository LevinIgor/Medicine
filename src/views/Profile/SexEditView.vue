<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import { ref } from "vue";
  import { updateUserPhone } from "@/supabase/user";
  import vSelect from "@/components/vSelect.vue";

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

  const sex = ref("");

  function onSave() {
    if (phoneRegExp.test(phone.value)) updateUserPhone(phone.value);
  }
</script>
<template>
  <BaseLayout
    :breadcrumb="breadcrumb"
    title="Profile Photo"
    :need-appointment="false"
  >
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4"
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aliquam.
      </p>
      <v-select></v-select>
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
