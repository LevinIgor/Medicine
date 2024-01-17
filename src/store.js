import { defineStore } from "pinia";

const useStore = defineStore("store", {
  state: () => ({
    resetPasswordEmail: "",
    isSigned: false,
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
  },
  getters: {
    getEmailReset() {
      return this.resetPasswordEmail;
    },
    getIsSigned() {
      return this.isSigned;
    },
  },
});

export default useStore;
