// src/store/userStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';
export interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}


export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null as UserData | null,
  }),
  getters: {
    getUserData: (state) => state.userData,
  },
  actions: {
    async fetchUserData() {
      const accessToken = localStorage.getItem('access_token');
      try {
        const response = await axios.get('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/user/me/', {
          headers: {
            token: accessToken,
          },
        });
        this.userData = response.data;
        this.saveUserDataToLocalStore();
      } catch (error) {
        console.error('Ошибка при получении данных пользователя', error);
      }
    },
    saveUserDataToLocalStore() {
      if (this.userData) {
        localStorage.setItem('userData', JSON.stringify(this.userData));
      }
    },

    async updateUserData(userData) {
      const accessToken = localStorage.getItem('access_token');
      console.log(accessToken)
      try {
        console.log(accessToken)
        const response = await axios.put('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/user/me/', userData, {
          headers: {
            token: accessToken,
          },
        }); // Укажите ваш URL-эндпоинт
        this.userData = response.data;
      } catch (error) {
        console.error('Ошибка при обновлении данных пользователя', error);
      }
    },
  },
});
