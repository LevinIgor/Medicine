import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about-us/:tab",
      name: "about-us",
      component: () => import("@/views/AboutUsView.vue"),
    },
    {
      path: "/doctors",
      name: "doctors",
      component: () => import("@/views/DoctorsView.vue"),
    },
    {
      path: "/doctor/:id",
      name: "doctor",
      component: () => import("@/views/DoctorView.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("@/views/ServicesView.vue"),
    },
    {
      path: "/services/:service",
      name: "service",
      component: () => import("@/views/ServiceView.vue"),
    },
    {
      path: "/contact-us",
      name: "contact-us",
      component: () => import("@/views/ContactUsView.vue"),
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/FAQView.vue"),
    },
    {
      path: "/update-password",
      name: "update-password",
      component: () => import("@/views/UpdatePassword.vue"),
    },
    {
      path: "/account/:tab",
      name: "account",
      component: () => import("@/views/AccountView.vue"),
    },
    {
      path: "/account/reception/:id",
      name: "reception",
      component: () => import("@/views/ReceptionView.vue"),
    },
    {
      path: "/test",
      name: "test",
      component: () => import("@/views/TestView.vue"),
    },
  ],
});

export default router;
