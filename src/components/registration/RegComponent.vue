<template>
  <div class='container'>
    <div class='empty-panel'>
      <div class='text'>Вход</div>
      <div class='mail'>
        <p class='animated-text'>{{ userMail }}</p>
      </div>
      <div class='login'>
        <input
          v-model='verificationCode'
          :class="{ 'Nlogin-input': !verificationCode.trim(), 'login-input': verificationCode.trim() }"
          placeholder='Код'
        />
      </div>
      <div class='enter'>
        <button class='button' :disabled='!verificationCode.trim()' @click='verify'>Войти</button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/Pinia/authStore'
import { useMailStore } from '@/Pinia/mailStore'

export default {
  setup() {
    const verificationCode = ref('')
    const authStore = useAuthStore()
    const router = useRouter()
    const succesMessage = ref(authStore.successMessage)

    const userMail = computed(() => authStore.email)


    const verify = async () => {
      if (verificationCode.value.trim()) {
        await authStore.verify(userMail.value, Number(verificationCode.value.trim()))
        if (authStore.successMessage == 'Verification successful.') {
          router.push('/')
        }
      }
    }

    return {
      succesMessage,
      userMail,
      verificationCode,
      verify
    }
  }
}
</script>


<style scoped>
@media (max-width: 750px) {
  .empty-panel {
    width: 70%;
    height: 30%;
    border: 6px solid #ff5733;
    border-radius: 25px;
    transition: box-shadow 0.3s ease;
  }

  .enter {
    display: flex;
    justify-content: center;
    height: 22%;
    margin-top: 20%;

  }

  .button {
    position: relative;
    padding: 10px 22px;
    margin-bottom: 20px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background-color: #ff7f00;
    transition: all 0.2s ease;
  }

  .empty-panel:hover {
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
  }
}

@media (min-width: 750px) {
  .button {
    position: relative;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    cursor: pointer;
    background-color: #ff7f00;
    transition: all 0.2s ease;
  }

  .empty-panel {
    width: 25%;
    height: 30%;
    border: 6px solid #ff5733;
    border-radius: 25px;
    transition: box-shadow 0.3s ease;
  }

  .empty-panel:hover {
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
  }

  .enter {
    display: flex;
    justify-content: center;
    margin-top: 7%;

  }
}

.login-input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  width: 250px;
  height: 25px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: large;
}

.Nlogin-input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid red;
  transition: border-color 0.3s ease;
  margin-left: 5px;
  margin-right: 5px;

  width: 250px;
  height: 25px;
  font-size: large;
}

.Nlogin-input:focus {
  outline: none;

  border: 1px solid red;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
}


.button:active {
  transform: scale(0.96);
}

.button:before,
.button:after {
  position: absolute;
  content: '';
  width: 150%;
  left: 50%;
  height: 100%;
  transform: translateX(-50%);
  z-index: -1000;
  background-repeat: no-repeat;
}

.button:hover:before {
  top: -70%;
  background-image: radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, transparent 20%, #ff7f00 20%, transparent 30%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, transparent 10%, #ff7f00 15%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%);
  background-size: 10% 10%,
  20% 20%,
  15% 15%,
  20% 20%,
  18% 18%,
  10% 10%,
  15% 15%,
  10% 10%,
  18% 18%;
  background-position: 50% 120%;
  animation: orangetopBubbles 0.6s ease;
}

@keyframes orangetopBubbles {
  0% {
    background-position: 5% 90%,
    10% 90%,
    10% 90%,
    15% 90%,
    25% 90%,
    25% 90%,
    40% 90%,
    55% 90%,
    70% 90%;
  }

  50% {
    background-position: 0% 80%,
    0% 20%,
    10% 40%,
    20% 0%,
    30% 30%,
    22% 50%,
    50% 50%,
    65% 20%,
    90% 30%;
  }

  100% {
    background-position: 0% 70%,
    0% 10%,
    10% 30%,
    20% -10%,
    30% 20%,
    22% 40%,
    50% 40%,
    65% 10%,
    90% 20%;
    background-size: 0% 0%,
    0% 0%,
    0% 0%,
    0% 0%,
    0% 0%,
    0% 0%;
  }
}

.button:hover::after {
  bottom: -70%;
  background-image: radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, transparent 10%, #ff7f00 15%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%),
  radial-gradient(circle, #ff7f00 20%, transparent 20%);
  background-size: 15% 15%,
  20% 20%,
  18% 18%,
  20% 20%,
  15% 15%,
  20% 20%,
  18% 18%;
  background-position: 50% 0%;
  animation: orangebottomBubbles 0.6s ease;
}

@keyframes orangebottomBubbles {
  0% {
    background-position: 10% -10%,
    30% 10%,
    55% -10%,
    70% -10%,
    85% -10%,
    70% -10%,
    70% 0%;
  }

  50% {
    background-position: 0% 80%,
    20% 80%,
    45% 60%,
    60% 100%,
    75% 70%,
    95% 60%,
    105% 0%;
  }

  100% {
    background-position: 0% 90%,
    20% 90%,
    45% 70%,
    60% 110%,
    75% 80%,
    95% 70%,
    110% 10%;
    background-size: 0% 0%,
    0% 0%,
    0% 0%,
    0% 0%,
    0% 0%,
    0% 0%;
  }
}

.text {
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.container {
  display: grid;
  place-items: center;
  height: 100vh;
}

.login {
  display: flex;
  justify-content: center;
  height: 12%;
  margin-top: 20px;
  margin-bottom: 20px;
}


.login-input:focus {
  outline: none;
  border-color: #ff7f00;
  box-shadow: 0 0 5px rgba(255, 127, 0, 0.5);
}


.reg {
  display: flex;
  justify-content: center;
  height: 12%;
  margin-top: 20px;
  margin-bottom: 20px;
}

.mail {
  text-align: center;
}

.animated-text {
  font-size: 20px;
  color: #FFA500;
  font-weight: bold;
  border: 2px solid #FFA500;
  border-radius: 5px;
  padding: 2px 16px;
  display: inline-block;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}


</style>
