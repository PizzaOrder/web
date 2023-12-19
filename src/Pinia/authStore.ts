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
    // This getter will return true if the user is logged in (i.e., if a token exists in localStorage)
    isLoggedIn(): boolean {
      return !!localStorage.getItem('access_token');
    },
  },
  actions: {
    async register(email: string) {
      try {
        const response = await axios.post('http://127.0.0.1:8000/auth/login/', {
          email: email,
        });
        // Set email in state after successful registration
        this.email = email;
        this.successMessage = 'Registration successful. Please check your email for a verification code.';
        // Clear error message if registration is successful
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
        const response = await axios.post('http://127.0.0.1:8000/auth/verify/', {
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
    logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('token_type');
      // Reset the state if needed
      this.email = '';
      this.verificationCode = 0;
      this.errorMessage = '';
      this.successMessage = '';
    },

  },
});
