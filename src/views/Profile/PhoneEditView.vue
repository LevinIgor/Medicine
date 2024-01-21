<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/vInput.vue";
  import { ref, watch } from "vue";
  import { updateUserPhone } from "@/supabase/user";

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

  const phone = ref("");
  const isValid = ref(true);
  const phoneRegExp = RegExp(
    "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
    "mi"
  );

  function onSave() {
    if (phoneRegExp.test(phone.value)) updateUserPhone(phone.value);
  }

  watch(phone, _phone => {
    isValid.value = phoneRegExp.test(_phone);
  });
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

      <v-input
        v-model="phone"
        label="User Phone Number"
        type="tel"
        pattern=""
        :incorrect="!isValid"
        icon="phone"
        placeholder="0951567567"
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
