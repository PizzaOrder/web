<template>
  <div class="text">
    <h1>
      История "ПиццанПацан": Дуэт Димы и Миши <br>
      <span class="centered-text">против Мистера Карпенко</span>
    </h1>

    <div v-html="storyText1"></div>
    <img
      src="assets/discounts/1699906596524ukxawvnp-transformed.png"
      alt="Описание картинки"
      class="img"
    />

    <div v-html="storyText2"></div>

    <div v-html="storyText3"></div>
    <img src="assets/discounts/1699906880215580b6emr.png" alt="Описание картинки" class="img" />

    <div v-html="storyText4"></div>
    <img src="assets/discounts/1699907449382cvz31c7y.png" alt="Описание картинки" class="img" />

    <div v-html="storyText5"></div>
    <div v-html="storyText6"></div>
    <img src="assets/discounts/1699907811745jqlrysli.png" alt="Описание картинки" class="img" />

    <div v-html="storyText7"></div>
    <img src="assets/discounts/1699908349191dc6xwrla.png" alt="Описание картинки" class="img" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      storyText1: `
        <p><strong>Глава 1: Зарождение Идеи</strong></p>
        <p>В самом начале своего пути Дима и Миша были простыми друзьями, разделявшими страсть к кулинарии и в частности - к пицце. Им было суждено создать нечто уникальное, идеальное место для ценителей вкусной еды.</p>

      `,
      storyText2:
        '<p><strong>Глава 2: Трудные Начала</strong></p>\n        <p>Изначально, у Димы и Миши не было больших средств. Они начали свой путь с небольшого кафе, где готовили пиццу в уютной атмосфере. Назвали они свою пиццерию "ПиццанПацан" в честь своей неформальной философии: хорошая еда должна быть доступной каждому парню.</p>\n       ',
      storyText3:
        ' <p><strong>Глава 3: Зловещий Мистер Карпенко</strong></p>\n        <p>Но как это часто бывает в сказках, на пути к успеху появился темный персонаж. Мистер Карпенко, жадный и хитрый бизнесмен, решил, что "ПиццанПацан" стоит слишком близко его ресторану "Элегантный Вкус". Он начал использовать различные грязные методы, чтобы вытеснить Диму и Мишу из бизнеса.</p>\n   ',
      storyText4:
        ' <p><strong>Глава 4: Борьба за Свою Мечту</strong></p>\n        <p>Дима и Миша не собирались сдаваться. Они стали сражаться с Карпенко, предлагая своим клиентам уникальные акции, новые вкусные блюда и нестандартные решения. Вместо того, чтобы ответить тем же, они выбрали путь творчества и инноваций.</p>\n ',
      storyText5:
        '<p><strong>Глава 5: Развитие Империи "ПиццанПацан"</strong></p>\n        <p>Благодаря своей преданности и таланту, Дима и Миша стали настоящими звездами в мире пиццы. Их ресторан "ПиццанПацан" привлекал не только своей вкусной едой, но и уникальной атмосферой. Небольшое кафе превратилось в настоящую империю, сеть ресторанов, где каждый посетитель чувствовал себя частью большой и дружной семьи.</p>\n ',
      storyText6:
        '<p><strong>Глава 6: Поражение Мистера Карпенко</strong></p>\n        <p>С каждым днем популярность "ПиццанПацан" росла, а репутация Мистера Карпенко становилась все хуже. Его грязные игры и попытки подорвать бизнес Димы и Миши привлекли внимание общественности. В конечном итоге, он был вынужден покинуть свой ресторанный трон, позволив "ПиццанПацан" занять заслуженное место в сердцах горожан.</p>\n   ',
      storyText7:
        '<p><strong>Эпилог: Победа Вкуса и Дружбы</strong></p>\n        <p>Дима и Миша поняли, что настоящая сила в том, чтобы делиться вкусом и дружбой. Их история стала легендой, и "ПиццанПацан" стал не просто рестораном, а символом того, что сила мечты и дружбы способна преодолеть любые трудности.</p> '
    }
  }
})
</script>

<style scoped>
.img {
  width: 600px;
  object-fit: cover;
  margin-left: 20%;
  margin-right: auto;
}
h1 {
  text-align: center;
}

.centered-text {
  display: inline-block;
}
.centered-text:hover {
  animation: shake 0.5s;
  animation-iteration-count: infinite;

}

@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(5px); }
  0% { background-color: transparent; color: inherit; }
  25% { background-color: #FF4500; color: #FFF; }
  50% { background-color: transparent; color: inherit; }
  75% { background-color: #FF4500; color: #FFF; }
  100% { background-color: transparent; color: inherit; }
}

.text {
  font-size: 25px;
}
</style>
