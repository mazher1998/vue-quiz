<template>
  <div>
    <p>{{quizStore.questionsList[0]}}</p>
  </div>
</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';

const quizStore = QuizStore(store)
</script>
