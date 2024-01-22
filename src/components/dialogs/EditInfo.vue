<script setup>
  import DoneIcon from "@/components/icons/done.vue";
  import CloseIcon from "@/components/icons/close.vue";
  import ErrorIcon from "@/components/icons/error.vue";

  const props = defineProps({
    successful: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    subtitle: {
      type: String,
      default: "Your data has been updated",
    },
    btnText: {
      type: String,
      default: "Back home",
    },
  });
  const dialogId = "dialog-success-edit";

  function closeDialog() {
    document.getElementById(dialogId).close();
  }
  
</script>
<template>
  <dialog :id="dialogId" class="max-w-lg">
    <div class="flex flex-col items-center md:justify-center md:mt-40">
      <close-icon
        class="absolute top-7 right-5 cursor-pointer"
        @click="closeDialog"
      ></close-icon>
      <done-icon v-if="successful"></done-icon>
      <error-icon v-else></error-icon>
      <h3 class="text-center mt-5">{{ title }}</h3>
      <p class="font-normal mt-2 text-gray-180">{{ subtitle }}</p>
      <button class="w-full mt-8" @click="$router.push('/account/Profile')">
        {{ btnText }}
      </button>
    </div>
  </dialog>
</template>

<style lang="scss" scoped></style>
