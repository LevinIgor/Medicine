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
      path: "/about-us/",
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
      path: "/account/",
      name: "account",
      component: () => import("@/views/AccountView.vue"),
    },
    {
      path: "/account/profile/edit/avatar",
      name: "profile-photo-edit",
      component: () => import("@/views/Profile/AvatarEditView.vue"),
    },
    {
      path: "/account/profile/edit/name",
      name: "profile-name-edit",
      component: () => import("@/views/Profile/NameEditView.vue"),
    },
    {
      path: "/account/profile/edit/phone",
      name: "profile-phone-edit",
      component: () => import("@/views/Profile/PhoneEditView.vue"),
    },
    {
      path: "/account/profile/edit/email",
      name: "profile-email-edit",
      component: () => import("@/views/Profile/EmailEditView.vue"),
    },
    {
      path: "/account/profile/edit/sex",
      name: "profile-sex-edit",
      component: () => import("@/views/Profile/SexEditView.vue"),
    },
    {
      path: "/account/profile/edit/dateOfBirth",
      name: "profile-dateOfBirth-edit",
      component: () => import("@/views/Profile/BirthEditView.vue"),
    },
    {
      path: "/account/profile/edit/address",
      name: "profile-address-edit",
      component: () => import("@/views/Profile/AddressEditView.vue"),
    },
    {
      path: "/account/profile/edit/password",
      name: "profile-password-edit",
      component: () => import("@/views/Profile/PasswordEditView.vue"),
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
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
