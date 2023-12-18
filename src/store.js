import { defineStore } from "pinia";

const useStore = defineStore("store", {
  state: () => ({
    resetPasswordEmail: "",
  }),
  actions: {
    setResetPasswordEmail(email) {
      this.resetPasswordEmail = email;
    },
  },
  computed: {
    getEmailReset() {
      return this.resetPasswordEmail;
    },
  },
});

export default useStore;
