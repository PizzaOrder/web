// store/authStore.ts
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    verificationCode: 0,
    errorMessage: '',
    successMessage: '',
  }),
  actions: {
    async register(email: string) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
          email: email,
        });
        // Устанавливаем email в состояние после успешной регистрации
        this.email = email;
        this.successMessage = 'Registration successful. Please check your email for a verification code.';
        // Очищаем сообщение об ошибке, если регистрация прошла успешно
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = 'Registration failed.';
        if (axios.isAxiosError(error) && error.response) {
          this.errorMessage = error.response.data.message || this.errorMessage;
        }
        // Очищаем успешное сообщение, если произошла ошибка
        this.successMessage = '';
      }
    },
    async verify(email: string, verificationCode: number) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/auth/verify/', {
          email: email,
          verification_code: verificationCode,
        });
        // Устанавливаем код верификации в состояние после успешной верификации
        this.verificationCode = verificationCode;
        this.successMessage = 'Verification successful.';
        // Очищаем сообщение об ошибке, если верификация прошла успешно
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = 'Verification failed.';
        if (axios.isAxiosError(error) && error.response) {
          this.errorMessage = error.response.data.message || this.errorMessage;
        }
        // Очищаем успешное сообщение, если произошла ошибка
        this.successMessage = '';
      }
    },
  },
});
