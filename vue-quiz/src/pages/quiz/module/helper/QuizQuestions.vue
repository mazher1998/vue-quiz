<template>
  <div class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1">
    <p>Question: {{ quizStore.showQuestion + 1 }}/{{ quizStore.questionsList.length }}</p>
    <p>{{quizStore.questionsList[quizStore.showQuestion]?.question}}</p>
    <p>Options</p>
    <div v-for="(option, index) in quizStore.questionsList[quizStore.showQuestion]?.options" :key="index+'options'">
      <q-radio  v-model="answer" :val="index" :label="option" />
    </div>
    <p></p>
  </div>
  <q-btn padding="8px 16px" :disable="submitCheck" unelevated class="q-mt-sm font-weight-500 text-capitalize text-14 border-radius-6 btn-gradient bg-07182A text-white" label="Submit" @click="submitAnswer()" />
</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';
import { useQuasar } from 'quasar'
import {ref, watch} from 'vue'
const quizStore = QuizStore(store);
let answer = ref(-1);
let submitCheck = ref(true)
const $q = useQuasar()

watch(
  () => quizStore.failedToAnswer,
  () => {
    if(quizStore.failedToAnswer){
      quizStore.failedToAnswer = false;
      answer.value = -1;
      submitCheck.value = true;
    }
  }
);
watch(
  () => answer.value,
  () => {
    console.log(answer.value)
    if(answer.value !== -1){
      submitCheck.value = false;
    }
  }
);
function submitAnswer(){
  let check = answer.value === quizStore.questionsList[quizStore.showQuestion].answer;
  console.log(check)
    if(check){
      quizStore.marksObtained++;
    }
    let text  = (check)?'correct':'wrong'
  $q.notify({
    message: 'Your answer was '+text+'. Your Score is '+quizStore.marksObtained+'/10',
    color: (check)?'green':'red'
  })
  if(quizStore.showQuestion < quizStore.questionsList.length-1){
    answer.value = -1;
    submitCheck.value = true;
    quizStore.showQuestion++;
  }else{
    quizStore.quizCompleted = true;
  }

}

</script>
