<script setup>
  import ArrowLeft from "@/components/icon/arrow-right.vue";

  import useStore from "@/store";
  import { computed } from "vue";

  const store = useStore();

  const user = computed(() => store.getUser || {});
</script>
<template>
  <div>
    <h2>Profile</h2>

    <div
      class="flex items-center justify-between bg-white rounded-t-xl p-6 mt-7 cursor-pointer"
      @click="$router.push({ name: 'profile-photo-edit' })"
    >
      <div class="block">
        <span class="font-semibold text-gray-180">Photo profile</span>
      </div>
      <img
        class="w-9 h-9 object-cover rounded-full"
        :src="user.avatar_url"
        alt=""
      />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
      @click="$router.push({ name: 'profile-name-edit' })"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Name</span>
        <span class="text-gray-200">{{ user.name }}</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
      @click="$router.push({ name: 'profile-phone-edit' })"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Phone number</span>
        <span class="text-gray-200">{{ user.phone || "empty" }}</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
      @click="$router.push({ name: 'profile-email-edit' })"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Email address</span>
        <span class="text-gray-200">{{ user.email || "empty" }}</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
      @click="$router.push({ name: 'profile-sex-edit' })"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Sex</span>
        <span class="text-gray-200">{{ user.sex || "empty" }}</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
      @click="$router.push({ name: 'profile-dateOfBirth-edit' })"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Date of birth</span>
        <span class="text-gray-200">{{ user.dateOfBirth || "empty" }}</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
      @click="$router.push({ name: 'profile-address-edit' })"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Address</span>
        <span class="text-gray-200">{{ user.address || "empty" }}</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
    <div
      class="flex items-center justify-between bg-white p-6 border-top-gray-100 cursor-pointer"
      @click="$router.push({ name: 'profile-password-edit' })"
    >
      <div class="flex flex-col">
        <span class="font-semibold text-gray-180">Password</span>
        <span class="text-gray-200">******</span>
      </div>
      <arrow-left class="text-gray-140" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
