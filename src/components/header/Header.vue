<script setup>
  import logoIcon from "@/components/icon/logo.vue";
  import BurgerIcon from "@/components/icon/burger.vue";
  import useStore from "@/store";

  import { computed } from "vue";

  const store = useStore();
  const user = computed(() => store.getUser);

  const showSignInModal = () =>
    document.getElementById("sign-in-dialog").showModal();

  const menu = [
    {
      name: "About Us",
      link: "/about-us/",
    },
    {
      name: "Doctors",
      link: "/doctors",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
  ];

  function openMobileMenu() {
    document.getElementById("mobile-menu").showModal();
  }
</script>
<template>
  <header class="p-5 md:py-3 md:px-0 bg-white w-full box-border select-none">
    <div class="container flex items-top justify-between">
      <logo-icon
        class="cursor-pointer my-auto"
        @click="$router.push('/')"
      ></logo-icon>

      <nav class="block md:hidden">
        <ul class="flex items-center gap-5 cursor-pointer">
          <li
            v-for="item in menu"
            class="text-base font-medium text-gray-160"
            :class="{ active: item.link == $route.path }"
            :key="item.name"
            @click="$router.push(item.link)"
          >
            {{ item.name }}
          </li>
        </ul>
      </nav>
      <div class="block md:hidden">
        <router-link
          class="flex items-center gap-5"
          v-if="user"
          :to="{ name: 'account', params: { tab: 'Profile' } }"
          ><div class="flex flex-col text-sm">
            <span>{{ user.name }}</span>
          </div>
          <img
            class="w-14 h-14 object-cover rounded-full"
            :src="user.avatar_url"
            alt="avatar user icon"
            lazy="true"
          />
        </router-link>

        <button @click="showSignInModal" v-else>Sign In</button>
      </div>
      <div class="hidden md:block" @click="openMobileMenu">
        <burger-icon class="w-full"></burger-icon>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  li {
    color: var(--gray-160);

    &:hover {
      color: var(--gray-200);
    }

    box-sizing: border-box;
  }

  .active {
    color: var(--gray-200);
  }
</style>
