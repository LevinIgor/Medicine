<script setup>
  import vTabs from "@/components/Tabs/Tabs.vue";
  import vTab from "@/components/Tabs/Tab.vue";

  import vProfile from "@/components/Account/Profile.vue";
  import vMyAppointment from "@/components/Account/MyAppointment.vue";
  import vNotifications from "@/components/Account/Notifications.vue";
  import { signOut } from "@/supabase/auth.js";
  import { useRouter } from "vue-router";
  const router = useRouter();
  async function onSignOut() {
    signOut();
    router.push("/");
  }
</script>
<template>
  <div class="container py-24">
    <v-tabs>
      <v-tab title="Profile" icon="profile"> <v-profile></v-profile></v-tab>
      <v-tab title="My appointment" icon="calendar"
        ><v-my-appointment></v-my-appointment
      ></v-tab>
      <v-tab title="Notifications" icon="notifications"
        ><v-notifications></v-notifications
      ></v-tab>
      <v-tab title="Exit" icon="exit">
        <button class="" @click="onSignOut">Sign out</button>
      </v-tab>
    </v-tabs>
  </div>
</template>

<style lang="scss" scoped></style>
