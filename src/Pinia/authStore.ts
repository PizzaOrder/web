import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    verificationCode: 0,
    errorMessage: '',
    successMessage: '',
  }),
  getters: {
   isLoggedIn(): boolean {
      return !!localStorage.getItem('access_token');
    },
  },
  actions: {
    async register(email: string) {
      try {
        const response = await axios.post('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/auth/login/', {
          email: email,
        });
        this.email = email;
        this.successMessage = 'Registration successful. Please check your email for a verification code.';
        this.errorMessage = '';
      } catch (error) {
        this.errorMessage = 'Registration failed.';
        if (axios.isAxiosError(error) && error.response) {
          this.errorMessage = error.response.data.message || this.errorMessage;
        }
        // Clear success message if there is an error
        this.successMessage = '';
      }
    },
    async verify(email: string, verificationCode: number) {
      try {
        const response = await axios.post('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/auth/verify/', {
          email: email,
          verification_code: verificationCode,
        });
        // Set verification code in state after successful verification
        this.verificationCode = verificationCode;
        this.successMessage = 'Verification successful.';
        // Clear error message if verification is successful
        this.errorMessage = '';

        // Save token to localStorage here
        localStorage.setItem('access_token', response.data.access_token);
        localStorage.setItem('token_type', response.data.token_type);

      } catch (error) {
        this.errorMessage = 'Verification failed.';
        if (axios.isAxiosError(error) && error.response) {
          this.errorMessage = error.response.data.message || this.errorMessage;
        }
        // Clear success message if there is an error
        this.successMessage = '';
      }
    },
    async validateToken() {
      const accessToken = localStorage.getItem('access_token');
      console.log(accessToken);
      if (!accessToken) {
        console.log("Нет токена доступа, выход из системы");
        this.logout();
        return;
      }

      try {
        const response = await axios.get('https://potential-broccoli-wxg6w4x4jgr259w5-8000.preview.app.github.dev/user/me/', {
          headers: { 'token': accessToken }
        });
        console.log("Токен подтвержден", response.data);
      } catch (error) {
        console.log("Ошибка при валидации токена, выход из системы", error);
        this.logout();
      }
    },



    logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('token_type');
      this.email = '';
      this.verificationCode = 0;
      this.errorMessage = '';
      this.successMessage = '';
    },

  },
});
