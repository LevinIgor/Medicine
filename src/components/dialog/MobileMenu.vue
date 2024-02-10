<script setup>
  import LogoIcon from "@/components/icon/logo.vue";
  import CloseIcon from "@/components/icon/close.vue";
  import TelegramIcon from "@/components/icon/social/telegram-filled.vue";
  import YoutubeIcon from "@/components/icon/social/youtube-filled.vue";
  import FacebookIcon from "@/components/icon/social/facebook-filled.vue";
  import InstagramIcon from "@/components/icon/social/instagram-filled.vue";
  import TwitterIcon from "@/components/icon/social/twitter-filled.vue";
  import ProfileIcon from "@/components/icon/profile.vue";
  import CalendarIcon from "@/components/icon/calendar.vue";
  import NotificationsIcon from "@/components/icon/notifications.vue";
  import ExitIcon from "@/components/icon/exit.vue";
  import { useRouter } from "vue-router";
  import { computed } from "vue";
  import useStore from "@/store";

  const store = useStore();
  const router = useRouter();

  const dialogId = "mobile-menu";
  const user = computed(() => store.getUser);

  function closeDialog() {
    document.getElementById(dialogId).close();
  }

  function onSignIn() {
    document.getElementById("sign-in-dialog").showModal();
    closeDialog();
  }

  router.beforeEach(async (to, from) => {
    closeDialog();
  });

  function openProfileTab(name) {
    router.push("/account");
    store.setAccountActiveTab(name);
    closeDialog();
  }
</script>
<template>
  <dialog :id="dialogId" class="p-0">
    <div class="bg-white flex items-top justify-between px-4 py-3">
      <router-link to="/">
        <logo-icon></logo-icon>
      </router-link>
      <close-icon @click="closeDialog" />
    </div>

    <div class="p-5 h-full flex flex-col">
      <div class="mt-5" v-if="user !== null">
        <div class="flex items-center gap-2">
          <img
            class="w-14 h-14 rounded-full object-cover object-center"
            :src="user.avatar_url"
            alt=""
          />
          <div class="flex flex-col">
            <span class="text-lg font-semibold">{{ user.name }}</span>
            <span class="text-sm font-normal">Patient</span>
          </div>
        </div>
        <div class="flex flex-col gap-3 mt-5">
          <span
            class="flex items-center gap-2 bg-white rounded-md py-3 px-2 text-gray-160 font-roboto"
            @click="openProfileTab('Profile')"
            ><profile-icon /> Profile</span
          >
          <span
            class="flex items-center gap-2 bg-white rounded-md py-3 px-2 text-gray-160 font-roboto"
            @click="openProfileTab('My Appointment')"
            ><calendar-icon /> My appointment</span
          >
          <span
            class="flex items-center gap-2 bg-white rounded-md py-3 px-2 text-gray-160 font-roboto"
            @click="openProfileTab('Notifications')"
            ><notifications-icon /> Notifications</span
          >
          <span
            class="flex items-center gap-2 bg-white rounded-md py-3 px-2 text-gray-160 font-roboto"
            @click="openProfileTab('Exit')"
            ><exit-icon /> Exit</span
          >
        </div>
      </div>
      <div class="flex flex-col gap-2 m-0 p-0 mt-10">
        <router-link
          to="/about-us/"
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          >About Us</router-link
        >
        <router-link
          to="/services"
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          >Services</router-link
        >
        <router-link
          to="/doctors"
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          >Doctors</router-link
        >
        <router-link
          to="/contact-us"
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          >Contact Us</router-link
        >
        <router-link
          to="/faq"
          class="font-roboto p-3 bg-white text-gray-160 rounded-md cursor-pointer"
          >FAQ</router-link
        >
      </div>

      <button class="w-full mt-16" @click="onSignIn" v-if="user === null">
        Sign In
      </button>
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
