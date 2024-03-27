<template>
  <div  class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1 q-mt-lg">
    <p class="text-14 font-weight-400">RESPONDENT</p>
    <div class="flex items-center q-pa-sm">
      <p class="text-0F2830 text-capitalize text-20 font-weight-600 q-ml-sm">{{quizStore.info.firstName + ' '+quizStore.info.lastName}}</p>
    </div>
  </div>
  <div  class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1 q-mt-lg">
    <p class="text-14 font-weight-400">SUMMARY</p>
    <div class="flex items-center q-pa-sm">
      <p class="text-0F2830 text-16 font-weight-400 q-ml-sm">{{getSummary()}}</p>
    </div>
  </div>
  <div class="row q-col-gutter-md">
    <div class="col-xs-12 col-md-6">
      <div  class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1 q-mt-lg">
        <p class="text-14 font-weight-400">RESULT</p>
        <div class="flex items-center q-pa-sm">
          <p :class="[quizStore.marksObtained<5?'text-red':'text-green-7', 'text-capitalize', 'text-16', 'font-weight-400']">{{quizStore.marksObtained<5?'Test Failed':'Test Passed'}}</p>
        </div>
        <p class="text-0F2830 text-16 font-weight-400 q-ml-sm">Your scores are {{quizStore.marksObtained+' / 10'}}</p>
      </div>
    </div>
    <div class="col-xs-12 col-md-6">
      <div  class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1 q-mt-lg">
        <p class="text-14 font-weight-400">TIMER</p>
        <div class="flex items-center q-pa-sm">
          <p class="text-0F2830 text-capitalize text-16 font-weight-400 ">Total Time</p>
        </div>
        <p class="text-0F2830 text-16 font-weight-400 q-ml-sm">{{formatSeconds(totalTime)+ ' / '+ formatSeconds(getTime())}}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';
import {onMounted,ref} from "vue";
const quizStore = QuizStore(store)
function getSummary(){
  if(quizStore.marksObtained<5){
    return 'Thank you for taking the test! Unfortunately your score was too low to pass the test.'
  }else if(quizStore.marksObtained>=5 && quizStore.marksObtained<8){
    return 'You have passed the test.'
  }else{
    return 'Congratulations, You have done great job.'
  }
}
function formatSeconds(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
function getTime(){
  if(quizStore.info.difficulty === 1){
    return 120*10;
  }else if(quizStore.info.difficulty === 2){
    return 60*10;
  }else {
    return 30*10;
  }
}
let totalTime = ref(0)
onMounted(()=>{
  totalTime.value = quizStore.totalTime
})
</script>
