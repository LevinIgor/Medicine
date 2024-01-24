<script setup>
  import { ref, onMounted } from "vue";
  const props = defineProps({
    items: {
      type: Array,
      required: true,
      default: [],
    },
  });

  const emits = defineEmits(["onChange"]);
  const active = ref(0);

  onMounted(() => {
    const element = document.getElementById("horizontal-filter");
    element.addEventListener("wheel", event => {
      event.preventDefault();

      element.scrollBy({
        left: event.deltaY < 0 ? -60 : 60,
      });
    });
  });
</script>
<template>
  <div
    class="flex items-center gap-5 overflow-x-scroll w-full wrapper select-none"
    id="horizontal-filter"
  >
    <span
      class="text-lg font-normal rounded-xl py-3 px-8 bg-white hover:bg-blue-160 cursor-pointer whitespace-nowrap"
      :class="{ active: active == i }"
      @click="
        active = i;
        $emit('onChange', item.name);
      "
      v-for="(item, i) of [{ name: 'All' }, ...items]"
      >{{ item.name }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .active {
    background-color: var(--blue-200);
    color: var(--white);
  }
</style>
