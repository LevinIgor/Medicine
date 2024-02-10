<script setup>
  import { ref } from "vue";
  import { fetchNotifications } from "@/supabase/notifications.js";

  const notifications = ref([]);

  fetchNotifications().then(data => {
    notifications.value = data;
  });

  function getLabelClass(type) {
    switch (type) {
      case "Canceled":
        return "info-label-red";
      case "Planned":
        return "info-label-green";
      case "Changed":
        return "info-label-yellow";
      default:
        return "info-label-blue";
    }
  }
</script>
<template>
  <div>
    <h2>Notification</h2>
    <div class="mt-7 flex flex-col gap-5">
      <div
        class="bg-white rounded-lg py-10 md:py-6 px-6 md:px-4 shadow-lg"
        v-for="(item, index) in notifications"
        :key="index"
      >
        <div class="flex items-center justify-between">
          <span :class="getLabelClass(item.type)">Canceled</span>
          <button
            class="md:hidden"
            @click="
              $router.push(
                '/account/reception/9761cfb0-9e95-42d1-8cb3-69cb2596264b'
              )
            "
          >
            View the Reception
          </button>
        </div>
        <p class="mt-5" v-for="(paragraph, i) in item.text" :key="i">
          {{ paragraph }}
        </p>
        <button
          class="mt-5 w-full hidden md:block"
          @click="
            $router.push(
              '/account/reception/9761cfb0-9e95-42d1-8cb3-69cb2596264b'
            )
          "
        >
          View the Reception
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
