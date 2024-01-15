<script setup>
  import LogoIcon from "@/components/icons/logo.vue";
  import CloseIcon from "@/components/icons/close.vue";
  import TelegramIcon from "@/components/icons/social/telegram-filled.vue";
  import YoutubeIcon from "@/components/icons/social/youtube-filled.vue";
  import FacebookIcon from "@/components/icons/social/facebook-filled.vue";
  import InstagramIcon from "@/components/icons/social/instagram-filled.vue";
  import TwitterIcon from "@/components/icons/social/twitter-filled.vue";

  const dialogId = "mobile-menu";
  function closeDialog() {
    const el = document.getElementById(dialogId);
    el.close();
  }
</script>
<template>
  <dialog :id="dialogId">
    <div class="p-5 pt-0">
      <div class="bg-white flex items-center justify-between p-3">
        <logo-icon />
        <close-icon @click="closeDialog" />
      </div>
      <ul class="flex flex-col gap-5 m-0 p-0">
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-sm cursor-pointer"
        >
          <a href="/about-us/our-history">About Us</a>
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-sm cursor-pointer"
        >
          Services
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-sm cursor-pointer"
        >
          Doctors
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-sm cursor-pointer"
        >
          Contact us
        </li>
        <li
          class="font-roboto p-3 bg-white text-gray-160 rounded-sm cursor-pointer"
        >
          FAQ
        </li>
      </ul>

      <button class="w-full mt-5">Sign In</button>
      <div class="flex items-center justify-center gap-3 mt-5">
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
