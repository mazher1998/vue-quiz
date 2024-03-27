<template>
  <div>
    {{quizStore.marksObtained}}
  </div>
</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';
const quizStore = QuizStore(store)
</script>
