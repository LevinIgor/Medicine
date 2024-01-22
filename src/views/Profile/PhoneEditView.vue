<script setup>
  import BaseLayout from "@/layouts/base.vue";
  import vInput from "@/components/vInput.vue";
  import { ref, watch, reactive } from "vue";
  import { updateUserPhone } from "@/supabase/user";
  import useStore from "@/store";
  import EditInfo from "@/components/dialogs/EditInfo.vue";

  const breadcrumb = [
    {
      name: "Profile",
      path: "/account/Profile",
    },
    {
      name: "Phone number",
      path: "/account/Profile",
    },
  ];

  const store = useStore();
  const phone = ref("");
  const dialogText = reactive({
    title: "",
    subtitle: "",
    successful: true,
  });

  const isValid = ref(true);
  const phoneRegExp = RegExp(
    "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
    "mi"
  );

  function turnOffBtn() {
    document.getElementById("btn-action").disabled = true;
  }

  function turnOnBtn() {
    document.getElementById("btn-action").disabled = false;
  }

  function showDialog() {
    document.getElementById("dialog-success-edit").showModal();
  }

  function updateUserDataState(phone) {
    const user = store.getUser;
    user.phone = phone;
    store.setUserData(user);
  }

  async function onUpdate() {
    if (!phoneRegExp.test(phone.value)) return;

    turnOffBtn();

    const isSuccessful = await updateUserPhone(phone.value);

    dialogText.title = isSuccessful
      ? "Phone Number Successfully Changed!"
      : "Error during phone number update!";
    dialogText.subtitle = isSuccessful
      ? "Your data has been updated"
      : "Try reloading the page, or try again after a while";
    dialogText.successful = isSuccessful;

    turnOnBtn();
    showDialog();
    if (isSuccessful) updateUserDataState(phone.value);
  }

  watch(phone, _phone => {
    isValid.value = phoneRegExp.test(_phone);
  });
</script>
<template>
  <edit-info
    :title="dialogText.title"
    :subtitle="dialogText.subtitle"
    :successful="dialogText.successful"
  ></edit-info>
  <BaseLayout
    :breadcrumb="breadcrumb"
    title="Phone number"
    :need-appointment="false"
  >
    <div
      class="bg-white py-6 px-4 rounded-md max-w-sm mx-auto flex flex-col gap-4 w-full"
    >
      <p>
        Update your data to ensure the security and accuracy of the information
        in your profile
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

      <button id="btn-action" class="w-full mt-5" @click="onUpdate">
        Save Changes
      </button>
      <button
        id="btn-action"
        class="w-full btn-secondary"
        @click="$router.push('/account/Profile')"
      >
        Cancel
      </button>
    </div>
  </BaseLayout>
</template>

<style lang="scss" scoped></style>
