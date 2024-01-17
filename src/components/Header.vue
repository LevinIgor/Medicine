<script setup>
  import logoIcon from "@/components/icons/logo.vue";
  import BurgerIcon from "@/components/icons/burger.vue";
  import useStore from "@/store";
  const store = useStore();
  import { computed } from "vue";

  const isSigned = computed(() => store.getIsSigned);

  const showSignInModal = () =>
    document.getElementById("sign-in-dialog").showModal();

  const menu = [
    {
      name: "About Us",
      link: "/about-us/our-history",
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
  <header class="p-5 md:py-3 md:px-0 bg-white w-full box-border">
    <div class="container flex items-center justify-between">
      <logo-icon class="cursor-pointer" @click="$router.push('/')" />

      <nav class="block md:hidden">
        <ul class="flex items-center gap-5 cursor-pointer">
          <li v-for="item in menu" :key="item.name">
            <router-link
              :class="{ active: item.link == $route.path }"
              :to="item.link"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </nav>
      <div class="block md:hidden">
        <div
          class="flex items-center gap-5"
          v-if="isSigned"
          @click="$router.push({ name: 'account', params: { tab: 'profile' } })"
        >
          <div class="flex flex-col text-sm">
            <span>Lorem.</span> <span>Lorem</span>
          </div>
          <img
            class="w-14 h-14 object-cover rounded-full"
            src="../assets/photo/doctor1.jpg"
            alt=""
          />
        </div>
        <button @click="showSignInModal" v-else>Sign In</button>
      </div>
      <div class="hidden md:block" @click="openMobileMenu">
        <burger-icon />
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
