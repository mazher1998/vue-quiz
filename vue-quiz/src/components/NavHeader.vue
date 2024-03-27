<template>
  <q-header
    class="q-py-md q-px-xl flex items-center bg-F7F8FC nav-header-bottom-border"
    style="z-index: 9; height: 4.5rem"
  >
    <div class="flex items-center justify-between full-width">
      <p class="text-18 text-242526 font-weight-600">VUE-QUIZ</p>
      <div>
        <p class="text-242526">Time to answer: <span class="text-6A6969">{{countdownObj.m + ' minutes : '+countdownObj.s+' seconds'}}</span></p>
      </div>
    </div>
  </q-header>
</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';
import useCountdown from 'vue-countdown-hook';
import {watch,ref} from 'vue'
const quizStore = QuizStore(store);
let count = ref(0);
const { setCountdown, countdownObj, onFinish } = useCountdown();
watch(
  () => quizStore.startTest,
  (newValue) => {
    if(newValue){
      if(quizStore.info.difficulty === 1){
        count.value = 120;
      }else if(quizStore.info.difficulty === 2){
        count.value = 60;
      }else {
        count.value = 30;
      }
      quizStore.showQuestion = 0
      setCountdown(count.value)
    }
  }
);
watch(
  () => quizStore.showQuestion,
  (newValue) => {
    setCountdown(count.value)
  }
);
onFinish(() => {
  if(quizStore.showQuestion < quizStore.questionsList.length-1){
    quizStore.showQuestion++;
    quizStore.failedToAnswer = true;
    setCountdown(count.value)
  }else{
    quizStore.quizCompleted = true;
  }
});
</script>
<style>
.nav-header-bottom-border {
  border-bottom: 1px solid #eef1f7;
}
</style>
