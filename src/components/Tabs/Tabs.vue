<script setup>
  import {
    ref,
    useSlots,
    defineAsyncComponent,
    shallowRef,
    computed,
    provide,
    onUnmounted,
  } from "vue";
  
  import useStore from "@/store";

  const store = useStore();
  const width = window.innerWidth;
  const slots = useSlots();

  const props = defineProps({
    isVertical: {
      type: Boolean,
      default: true,
    },
    needTitle: {
      type: Boolean,
      default: true,
    },
  });

  const titles = ref(slots.default().map(slot => slot.props.title));
  const activeTab = computed(
    () => store.getAccountActiveTab || titles.value[0]
  );

  provide("activeTab", activeTab);
  const icons = shallowRef(slots.default().map(el => asyncIcon(el.props.icon)));

  function asyncIcon(name) {
    return defineAsyncComponent(() => import(`@/components/icon/${name}.vue`));
  }

  onUnmounted(() => {
    store.setAccountActiveTab(null);
  });
</script>
<template>
  <div class="grid grid-cols-12 gap-5 md:block" v-if="isVertical">
    <ul class="flex flex-col gap-5 col-span-3" v-if="width > 600 || needTitle">
      <li
        class="cursor-pointer flex items-center gap-2 py-3 px-4 rounded-md bg-white text-gray-160 font-roboto select-none whitespace-nowrap"
        :class="{ active: activeTab === title }"
        v-for="(title, index) in titles"
        :key="title"
        @click="store.setAccountActiveTab(title)"
      >
        <component :is="icons[index]" class="w-5 h-5" />

        {{ title }}
      </li>
    </ul>

    <div class="col-span-9 md:mt-10">
      <slot></slot>
    </div>
  </div>
  <div class="flex flex-col" v-else>
    <ul
      class="w-full flex items-center justify-between gap-5 overflow-x-scroll"
    >
      <li
        class="w-full cursor-pointer py-3 px-8 rounded-md bg-white text-gray-160 font-roboto select-none text-center whitespace-nowrap"
        :class="{ active: activeTab === title }"
        v-for="(title, index) in titles"
        :key="index"
        @click="store.setAccountActiveTab(title)"
      >
        {{ title }}
      </li>
    </ul>

    <div class="mt-5 bg-white py-10 md:py-6 px-6 md:px-4 rounded-md">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  ul {
    padding: 0;
    li:hover {
      background-color: var(--blue-160);

      transition:
        background-color 0.3s ease-in-out,
        color 0.3s ease-in-out;
    }
    .active {
      background-color: var(--blue-180) !important;
      color: #fff;
      font-weight: 600;
      font-style: normal;
    }
  }
</style>
