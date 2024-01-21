<script setup>
  import { ref } from "vue";

  const props = defineProps({
    selected: {
      type: String,
      required: true,
      default: "",
    },
  });

  const visible = ref(false);

  function onblur(e) {
    setTimeout(() => {
      visible.value = false;
    }, 0);
  }
</script>
<template>
  <div class="relative w-full">
    <div
      class="bg-gray p-3 text-sm text-gray-160 font-robot rounded-md w-full"
      @click="visible = !visible"
      tabindex="1"
      @blur="onblur"
    >
      {{ selected }}
    </div>
    <div
      title="option"
      class="flex flex-col gap-2 text-sm bg-gray w-full px-1 pt-2 pb-4 dropdown max-h-40 overflow-y-scroll rounded-md"
      v-if="visible"
    >
      <div
        class="p-2 bg-white rounded-md text-sm font-roboto text-gray-160 font-light hover:bg-blue-160"
        @click="selected = $event.target.textContent"
      >
        Option 1
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .select {
  }
  .dropdown {
    position: absolute;
    bottom: -10%;
    transform: translateY(100%);
    z-index: 10;
  }
</style>
