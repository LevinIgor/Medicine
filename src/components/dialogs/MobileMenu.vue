<script setup>
  import LogoIcon from "@/components/icons/logo.vue";
  import CloseIcon from "@/components/icons/close.vue";
  import TelegramIcon from "@/components/icons/social/telegram-filled.vue";
  import YoutubeIcon from "@/components/icons/social/youtube-filled.vue";
  import FacebookIcon from "@/components/icons/social/facebook-filled.vue";
  import InstagramIcon from "@/components/icons/social/instagram-filled.vue";
  import TwitterIcon from "@/components/icons/social/twitter-filled.vue";
  import ProfileIcon from "@/components/icons/profile.vue";
  import CalendarIcon from "@/components/icons/calendar.vue";
  import NotificationsIcon from "@/components/icons/notifications.vue";
  import ExitIcon from "@/components/icons/exit.vue";

  import { computed } from "vue";
  import useStore from "@/store";
  const store = useStore();

  const dialogId = "mobile-menu";
  function closeDialog() {
    document.getElementById(dialogId).close();
  }

  const isSigned = computed(() => store.getIsSigned);

  function onSignIn() {
    document.getElementById("sign-in-dialog").showModal();
    document.getElementById(dialogId).close();
  }
</script>
<template>
  <dialog :id="dialogId" class="p-0">
    <div class="bg-white flex items-center justify-between px-5 py-3">
      <logo-icon @click="$router.push('/')"></logo-icon>
      <close-icon @click="closeDialog" />
    </div>

    <div class="p-5 h-full flex flex-col">
      <div class="mt-5" v-if="isSigned">
        <div class="flex items-center gap-2">
          <img
            class="w-14 h-14 rounded-full object-cover object-center"
            src="../../assets/photo/person1.jpg"
            alt=""
          />
          <div class="flex flex-col">
            <span class="text-lg font-semibold">Robert Pattison</span>
            <span class="text-sm font-normal">Patient</span>
          </div>
        </div>
        <div class="flex flex-col gap-3 mt-5">
          <a
            href="/account/profile"
            class="flex items-center gap-2 bg-white rounded-md py-3 px-6 text-gray-160 font-roboto"
          >
            <profile-icon></profile-icon>
            Profile</a
          >
          <a
            href="/account/My%20appointment"
            class="flex items-center gap-2 bg-white rounded-md py-3 px-6 text-gray-160 font-roboto"
          >
            <calendar-icon></calendar-icon>
            My appointment</a
          >
          <a
            href="/account/Notifications"
            class="flex items-center gap-2 bg-white rounded-md py-3 px-6 text-gray-160 font-roboto"
          >
            <notifications-icon></notifications-icon>
            Notifications</a
          >
          <a
            href="/account/Exit"
            class="flex items-center gap-2 bg-white rounded-md py-3 px-6 text-gray-160 font-roboto"
          >
            <exit-icon></exit-icon>
            Exit</a
          >
        </div>
      </div>
      <div class="flex flex-col gap-2 m-0 p-0 mt-10">
        <a
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          href="/about-us/our-history"
        >
          About Us
        </a>
        <a
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          href="/services"
        >
          Services
        </a>
        <a
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          href="/doctors"
        >
          Doctors
        </a>
        <a
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          href="/contact-us"
        >
          Contact us
        </a>
        <a
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          href="/faq"
        >
          FAQ
        </a>
      </div>

      <button class="w-full mt-16" @click="onSignIn" v-if="!isSigned">Sign In</button>
      <div class="flex items-center justify-center gap-3 my-10">
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
