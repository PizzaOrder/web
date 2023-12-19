// src/store/userStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    userData: null,
  }),
  getters: {
    getUserData: (state) => state.userData,
  },
  actions: {
    async fetchUserData() {
      try {
        const response = await axios.get('https://improved-cod-55x6w959xw924jvp-8000.app.github.dev/user/me/', {
          headers: {
            token: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }); // Укажите ваш URL-эндпоинт
        this.userData = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных пользователя', error);
      }
    },
    async updateUserData(userData) {
      const accessToken = localStorage.getItem('access_token');
      console.log(accessToken)
      try {
        console.log(accessToken)
        const response = await axios.put('https://improved-cod-55x6w959xw924jvp-8000.app.github.dev/user/me/', userData, {
          headers: {
            token: `Bearer ${accessToken}`,
          },
        }); // Укажите ваш URL-эндпоинт
        this.userData = response.data;
      } catch (error) {
        console.error('Ошибка при обновлении данных пользователя', error);
      }
    },
  },
});
