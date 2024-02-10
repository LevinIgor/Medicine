import { defineStore } from "pinia";
import { getUserData } from "@/supabase/user";

const useStore = defineStore("store", {
  state: () => ({
    resetPasswordEmail: "",
    user: null,
    session: null,
    accountActiveTab: null,
  }),
  actions: {
    setResetPasswordEmail(email) {
      this.resetPasswordEmail = email;
    },
    setUserData(user) {
      this.user = user;
    },
    setSession(session) {
      this.session = session;
    },
    async setUserDataAsync(id) {
      this.setUserData(await getUserData(id));
    },
    setAccountActiveTab(tab) {
      this.accountActiveTab = tab;
    },
  },
  getters: {
    getEmailReset() {
      return this.resetPasswordEmail;
    },
    getUser() {
      return this.user;
    },
    getSession() {
      return this.session;
    },
    getAccountActiveTab() {
      return this.accountActiveTab;
    },
  },
});

export default useStore;
