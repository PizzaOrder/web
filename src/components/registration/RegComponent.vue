<template>
  <div class="container">
    <div class="empty-panel">
      <div class="text">Вход в личный кабинет</div>
      <div class="login">
        <input
          placeholder="Почта"
          v-model="inputValue1"
          :class="{ 'Nlogin-input': !inputValue1.trim(), 'login-input': inputValue1.trim() }"
          @input="checkInput"
        />
      </div>
      <div class="reg">
        <input
          placeholder="Пароль"
          type="password"
          v-model="inputValue2"
          :class="{ 'Nlogin-input': !inputValue2.trim(), 'login-input': inputValue2.trim() }"
          @input="checkInput"
        />
      </div>
      <div class="enter">
        <RouterLink to='/profile'><button class="button" :disabled="!areInputsFilled">Войти</button></RouterLink>
      </div>
      <router-link to="/login" class="router-link-exact-active">
        <div class="reg-button">
          <button class="button">Вы ещё не зареганы?</button>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const inputValue1 = ref('')
const inputValue2 = ref('')
const areInputsFilled = ref(false)

const checkInput = () => {
  areInputsFilled.value = inputValue1.value.trim().length > 0 && inputValue2.value.trim().length > 0
}
</script>

<style scoped>
@media (max-width: 750px) {
  .button {
    position: relative;
    padding: 10px 22px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background-color: #ff7f00;
    transition: all 0.2s ease;
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
    background-size:
        10% 10%,
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
      background-position:
          5% 90%,
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
      background-position:
          0% 80%,
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
      background-position:
          0% 70%,
          0% 10%,
          10% 30%,
          20% -10%,
          30% 20%,
          22% 40%,
          50% 40%,
          65% 10%,
          90% 20%;
      background-size:
          0% 0%,
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
    background-size:
        15% 15%,
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
      background-position:
          10% -10%,
          30% 10%,
          55% -10%,
          70% -10%,
          85% -10%,
          70% -10%,
          70% 0%;
    }

    50% {
      background-position:
          0% 80%,
          20% 80%,
          45% 60%,
          60% 100%,
          75% 70%,
          95% 60%,
          105% 0%;
    }

    100% {
      background-position:
          0% 90%,
          20% 90%,
          45% 70%,
          60% 110%,
          75% 80%,
          95% 70%,
          110% 10%;
      background-size:
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%;
    }
  }

  .empty-panel {
    width: 70%;
    height: 50%;
    border: 6px solid #ff5733;
    border-radius: 25px;
    transition: box-shadow 0.3s ease;
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
    background-size:
        10% 10%,
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
      background-position:
          5% 90%,
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
      background-position:
          0% 80%,
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
      background-position:
          0% 70%,
          0% 10%,
          10% 30%,
          20% -10%,
          30% 20%,
          22% 40%,
          50% 40%,
          65% 10%,
          90% 20%;
      background-size:
          0% 0%,
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
    background-size:
        15% 15%,
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
      background-position:
          10% -10%,
          30% 10%,
          55% -10%,
          70% -10%,
          85% -10%,
          70% -10%,
          70% 0%;
    }

    50% {
      background-position:
          0% 80%,
          20% 80%,
          45% 60%,
          60% 100%,
          75% 70%,
          95% 60%,
          105% 0%;
    }

    100% {
      background-position:
          0% 90%,
          20% 90%,
          45% 70%,
          60% 110%,
          75% 80%,
          95% 70%,
          110% 10%;
      background-size:
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%,
          0% 0%;
    }
  }
  .empty-panel {
    width: 35%;
    height: 35%;
    border: 6px solid #ff5733;
    border-radius: 25px;
    transition: box-shadow 0.3s ease;
  }

  .empty-panel:hover {
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
  }


}
.Nlogin-input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid red;
  transition: border-color 0.3s ease;
  width: 350px;
  height: 25px;
  font-size: large;
}
.Nlogin-input:focus {
  outline: none;

  border: 1px solid red;
  box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
}
.login-input {
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  width: 350px;
  height: 25px;
  font-size: large;
}
.login-input:focus {
  outline: none;
  border-color: #ff7f00;
  box-shadow: 0 0 5px rgba(255, 127, 0, 0.5);
}
.router-link-exact-active {
  text-decoration: none;
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

.enter {
  display: flex;
  justify-content: center;
  height: 12%;
}
.reg {
  display: flex;
  justify-content: center;
  height: 12%;
  margin-top: 20px;
  margin-bottom: 20px;
}
.reg-button {
  display: flex;
  justify-content: center;
  height: 12%;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
