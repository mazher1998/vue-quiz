<template>
  <div class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1 q-mt-lg">
    <p class="text-0F2830 text-20 font-weight-600">Instructions</p>
    <p class="q-mt-sm">Hi {{quizStore.info.firstName}},</p>
    <p>
      This test consists of 10 questions. The time to solve one question is {{checkDifficulty()}}.<br>
      Make sure you have enough time and then start the test.<br><br>
      Good luck!
    </p>
  </div>
  <q-btn padding="8px 16px"  unelevated class="q-mt-lg font-weight-500 text-capitalize text-14 border-radius-6 btn-gradient bg-07182A text-white" label="Start Test" @click="quizStore.startTest = true;" />

</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';
const quizStore = QuizStore(store)

function checkDifficulty(){
  if(quizStore.info.difficulty === 1){
    return '2 minutes';
  }else if(quizStore.info.difficulty === 2){
    return '1 minutes';
  }else{
    return '30 seconds';
  }
}
</script>
