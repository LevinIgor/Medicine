<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/vInput.vue";
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
</script>
<template>
  <BaseLayout
    :breadcrumb="breadcrumb"
    title="Profile Photo"
    :need-appointment="false"
  >
    <div class="bg-white py-6 px-4 rounded-md mt-10">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aliquam.
      </p>
      <v-input />

      <button>Save Changes</button>
      <button>Cancel</button>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
