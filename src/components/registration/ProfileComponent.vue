<template>
  <div>
    <h1>Профиль пользователя</h1>
    <div v-if="userData">
      <p>Имя: {{ userData.first_name }}</p>
      <p>Фамилия: {{ userData.last_name }}</p>
      <p>Email: {{ userData.email }}</p>
    </div>
    <div>
      <h2>Изменить данные пользователя</h2>
      <form @submit.prevent="updateUser">
        <label for="first_name">Имя:</label>
        <input v-model="formData.first_name" type="text" id="first_name" />
        <br />
        <label for="last_name">Фамилия:</label>
        <input v-model="formData.last_name" type="text" id="last_name" />
        <br />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useUserStore } from '@/Pinia/userStore'
export default {
  setup() {
    const userStore = useUserStore();
    const userData = computed(() => userStore.getUserData);
    const formData = ref({
      first_name: '',
      last_name: '',
    });

    userData.value && (formData.value = { ...userData.value });

    const updateUser = async () => {
      await userStore.updateUserData(formData.value);
    };

    return {
      userData,
      formData,
      updateUser,
    };
  },
};
</script>
