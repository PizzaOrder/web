import { defineStore } from 'pinia';

export const useMailStore = defineStore({
  id: 'mail',
  state: () => ({
    mail: '',
  }),
  actions: {
    setMail(newMail: string) {
      this.mail = newMail;
    },
  },
});
