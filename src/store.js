import { defineStore } from "pinia";

const useStore = defineStore("store", {
  state: () => ({
    resetPasswordEmail: "",
    isSigned: false,
    user: {},
  }),
  actions: {
    setResetPasswordEmail(email) {
      this.resetPasswordEmail = email;
    },
    onSignIn() {
      this.isSigned = true;
    },
    onSignOut() {
      this.isSigned = false;
    },
    setUserData(user) {
      this.user = user;
    },
  },
  getters: {
    getEmailReset() {
      return this.resetPasswordEmail;
    },
    getIsSigned() {
      return this.isSigned;
    },
    getUser() {
      return this.user;
    },
  },
});

export default useStore;
