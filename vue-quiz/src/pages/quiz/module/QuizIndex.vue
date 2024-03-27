<template>
  <div class="q-px-xl q-py-lg">
    <div v-if="!quizStore.startTest || quizStore.quizCompleted" class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1">
      <p class="text-0F2830 text-20 font-weight-600">Topic: VUE</p>
    </div>
    <QuizForm v-if="!quizStore.formSubmitted && !quizStore.startTest"/>
    <QuizInto v-if="quizStore.formSubmitted && !quizStore.startTest"/>
    <quiz-questions v-if="quizStore.startTest && !quizStore.quizCompleted"/>
    <quiz-result v-if="quizStore.quizCompleted"/>
  </div>
</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';
import QuizForm from "pages/quiz/module/helper/QuizForm.vue";
import QuizInto from "pages/quiz/module/helper/QuizInto.vue";
import QuizQuestions from "pages/quiz/module/helper/QuizQuestions.vue";
import QuizResult from "pages/quiz/module/helper/QuizResult.vue";
const quizStore = QuizStore(store)
</script>
<style>
.box-shadow-1{
  box-shadow: 3px 4px 10px rgba(201,216,225,.34);
  background: #ffffff;
}
</style>
