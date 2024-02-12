<script setup>
  import vSpinner from "@/components/spinner/spinner.vue";
  import { ref, onMounted, nextTick } from "vue";
  const props = defineProps({
    // [{name:'Item1'}]
    items: {
      type: Array,
      required: true,
      default: [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  });

  const emits = defineEmits(["onChange"]);
  const active = ref(0);

  onMounted(() => {
    nextTick(() => {
      const element = document.getElementById("horizontal-filter");

      element.addEventListener(
        "wheel",
        event => {
          event.preventDefault();

          element.scrollBy({
            left: event.deltaY < 0 ? -60 : 60,
          });
        },
        { passive: false }
      );
    });
  });
</script>
<template>
  <div
    class="flex items-center gap-5 overflow-x-scroll w-full justify-normal wrapper select-none"
    id="horizontal-filter"
  >
    <div
      class="text-lg font-normal rounded-xl py-3 px-8 bg-white hover:bg-blue-160 cursor-pointer whitespace-nowrap w-fit text-center flex items-center gap-4"
      :class="{ active: active == i }"
      @click="
        active = i;
        $emit('onChange', item.name);
      "
      v-for="(item, i) of [{ name: 'All' }, ...items]"
    >
      <v-spinner v-if="active == i && isLoading" />
      <span class="w-full block">{{ item.name }}</span>
    </div>
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
