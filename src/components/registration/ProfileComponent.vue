<template>
  <div class="container">
    <h1>Профиль пользователя</h1>
    <div v-if='userData' class="user-container">
      <p>Имя: {{ userData.first_name }}</p>
      <p>Фамилия: {{ userData.last_name }}</p>
      <p>Email: {{ userData.email }}</p>

      <input v-model='editableUserData.firstName' placeholder='Новое имя'>
      <input v-model='editableUserData.lastName' placeholder='Новая фамилия'>
      <button @click='updateUser'>Обновить данные</button>

      <button @click='leaveButton'>Выйти из акка нахуй</button>

    </div>
  </div>
</template>

<script lang='ts'>
import {defineComponent, ref, onMounted} from 'vue'
import {useUserStore} from '@/Pinia/userStore'
import {useAuthStore} from '@/Pinia/authStore'
import type {UserData} from '@/Pinia/userStore'
import router from '@/router'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const authStore = useAuthStore()
    const userData = ref<UserData | null>(null)
    const editableUserData = ref({firstName: '', lastName: ''})
    const leaveButton = async () => {
      await authStore.logout()
      router.push('/')

    }
    const fetchUserData = async () => {
      await userStore.fetchUserData()
      userData.value = userStore.userData
      if (userData.value) {
        editableUserData.value = {
          firstName: userData.value.first_name,
          lastName: userData.value.last_name
        }
      }
    }

    const updateUser = async () => {
      if (userData.value) {
        await userStore.updateUserData({
          ...userData.value,
          first_name: editableUserData.value.firstName,
          last_name: editableUserData.value.lastName

        })
      }
      location.reload()
    }

    onMounted(fetchUserData)

    return {
      userData,
      editableUserData,
      updateUser,
      leaveButton
    }
  },

})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  padding: 20px;
  box-sizing: border-box;
  width: 50vh;

}

h1 {
  color: #333;
}

.user-container {
  border: 2px solid #ff5733;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  margin-top: 20px;
}


p {
  margin: 10px 0;
}

input {
  width: 100%;
  padding: 8px;
  margin: 5px 0;
  box-sizing: border-box;
}

button {
  background-color: #ff5733;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  margin: 5px;
}

button.leave-button {
  background-color: #555;
  margin-top: 20px;
}
</style>
