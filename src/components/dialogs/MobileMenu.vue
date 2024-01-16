<script setup>
  import LogoIcon from "@/components/icons/logo.vue";
  import CloseIcon from "@/components/icons/close.vue";
  import TelegramIcon from "@/components/icons/social/telegram-filled.vue";
  import YoutubeIcon from "@/components/icons/social/youtube-filled.vue";
  import FacebookIcon from "@/components/icons/social/facebook-filled.vue";
  import InstagramIcon from "@/components/icons/social/instagram-filled.vue";
  import TwitterIcon from "@/components/icons/social/twitter-filled.vue";
  import { onMounted } from "vue";
  const dialogId = "mobile-menu";
  function closeDialog() {
    const el = document.getElementById(dialogId);
    el.close();
  }

  onMounted(() => {
    const innerHeight = window.innerHeight;
    const dialog = document.getElementById(dialogId);
    dialog.style = `height:${innerHeight}px`;
    dialog.style = "background-color:red";
  });
</script>
<template>
  <dialog :id="dialogId">
    <div class="bg-white flex items-center justify-between px-5 py-3">
      <logo-icon />
      <close-icon @click="closeDialog" />
    </div>

    <div class="p-5 h-full flex flex-col">
      <ul class="flex flex-col gap-2 m-0 p-0 mt-5">
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
        >
          <a href="/about-us/our-history">About Us</a>
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
        >
          <a href="/about-us/our-history">Services</a>
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
        >
          <a href="/about-us/our-history">Doctors</a>
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
        >
          <a href="/about-us/our-history">Contact us</a>
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
        >
          <a href="/about-us/our-history">FAQ</a>
        </li>
      </ul>

      <button class="w-full mt-10">Sign In</button>
      <div class="flex items-center justify-center gap-3 mt-5 mb-10">
        <telegram-icon class="text-white" />
        <youtube-icon class="text-white" />
        <facebook-icon class="text-white" />
        <instagram-icon class="text-white" />
        <twitter-icon class="text-white" />
      </div>
    </div>
  </dialog>
</template>

<style lang="scss" scoped></style>
