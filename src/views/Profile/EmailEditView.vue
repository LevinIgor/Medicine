<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/vInput.vue";
  import { ref, watch } from "vue";
  import { updateUserEmail } from "@/supabase/user";

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

  const email = ref("");
  const isValid = ref(true);
  const emailRegExp = RegExp(
    "^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$",
    ""
  );

  function onSave() {
    updateUserEmail(email.value);
  }

  watch(email, _email => {
    isValid.value = emailRegExp.test(_email);
  });
</script>
<template>
  <BaseLayout :breadcrumb="breadcrumb" title="Email" :need-appointment="false">
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4"
    >
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, aliquam.
      </p>

      <v-input
        v-model="email"
        label="User Email"
        type="email"
        pattern=""
        :incorrect="!isValid"
        icon="phone"
        placeholder="user@mail.com"
      />

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

<style lang="scss" scoped></style>
