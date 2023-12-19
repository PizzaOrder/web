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
        const response = await axios.get('https://improved-cod-55x6w959xw924jvp-8000.app.github.dev/user/me', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }); // Укажите ваш URL-эндпоинт
        this.userData = response.data;
      } catch (error) {
        console.error('Ошибка при получении данных пользователя', error);
      }
    },
    async updateUserData(userData) {
      try {
        const response = await axios.put('https://improved-cod-55x6w959xw924jvp-8000.app.github.dev/user/me', userData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        }); // Укажите ваш URL-эндпоинт
        this.userData = response.data;
      } catch (error) {
        console.error('Ошибка при обновлении данных пользователя', error);
      }
    },
  },
});
