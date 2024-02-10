<script setup>
  import { ref } from "vue";

  const props = defineProps({
    options: {
      type: Array,
      required: true,
      default: [],
    },
  });

  const emits = defineEmits(["onChange"]);

  const visible = ref(false);
  const selected = ref("");
  function onblur() {
    setTimeout(() => {
      visible.value = false;
    }, 100);
  }
</script>
<template>
  <div class="relative w-full">
    <div
      class="bg-gray p-4 text-sm text-gray-160 font-robot rounded-md w-full"
      @click="visible = !visible"
      tabindex="1"
      @blur="onblur"
    >
      {{ selected || "Select option" }}
    </div>
    <div
      class="flex flex-col gap-2 text-sm bg-gray w-full px-1 pt-2 pb-4 dropdown max-h-40 overflow-y-scroll rounded-md"
      v-if="visible"
    >
      <div
        class="p-2 bg-white rounded-md text-sm font-roboto text-gray-160 font-light hover:bg-blue-160 cursor-pointer"
        v-for="(option, index) in options"
        :key="index"
        @click="(selected = option), emits('onChange', option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .dropdown {
    position: absolute;
    bottom: -10%;
    transform: translateY(100%);
    z-index: 10;
  }
</style>
