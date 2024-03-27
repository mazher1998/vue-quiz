<template>
  <div class="border-radius-8 full-width q-pa-md box-shadow-1 border-color-F1F1F1 q-mt-lg">
    <p class="text-101828 text-18 font-weight-600 q-mb-md">Test Start Form</p>
    <div class="row">
      <div class="col-xs-12 col-md-6 row q-col-gutter-md q-mb-md">
        <div class="col-xs-12 col-md-6 ">
          <p class="text-6F7887  text-14 q-mb-sm">First Name</p>
          <div class="bg-white">
            <q-input
              dense
              outlined
              color="blue-2"
              class="q-py-none border-radius-6"
              v-model="Info.firstName"
              placeholder="Write First Name"
              :error="(v$.firstName.$error)"
            />
          </div>
        </div>
        <div class=" col-xs-12 col-md-6">
          <p class="text-6F7887  text-14 q-mb-sm">Last Name</p>
          <div class="bg-white">
            <q-input
              dense
              outlined
              color="blue-2"
              class="q-py-none border-radius-6"
              v-model="Info.lastName"
              placeholder="Write Last Name"
              :error="(v$.lastName.$error)"
            />
          </div>
        </div>
        <div class="col-xs-12 col-md-6">
          <p class="text-6F7887  text-14 q-mb-sm">Difficulty</p>
          <div class="bg-white">
            <q-select
              dense
              outlined
              dropdown-icon="expand_more"
              color="blue-2"
              :class="['q-py-none border-radius-6', Info.difficulty === null || Info.difficulty === '' ?'':'q-select-selected']"
              v-model="Info.difficulty"
              :options="difficultyOptions"
              :display-value="Info.difficulty === undefined || Info.difficulty === null || Info.difficulty === '' ?  'Select Difficulty':difficultyOptions.find(dif => dif.value === Info.difficulty)?.name"
              emit-value
              map-options
              :error="!!(v$.difficulty.$error || errorMessage?.campaign_id)"
            />
          </div>
        </div>
        <div class="col-6"></div>
        <div class="col-xs-12 col-md-6">
          <q-btn padding="8px 16px" :loading="submittingForm" unelevated class="q-mt-sm font-weight-500 text-capitalize text-14 border-radius-6 btn-gradient bg-07182A text-white" label="Submit" @click="submitForm()" />
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
import {store} from 'src/stores/index'
import {QuizStore} from 'pages/quiz/QuizStore';
import {ref} from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';
const quizStore = QuizStore(store)
let Info = ref({
  firstName:'',
  lastName:'',
  difficulty:null,
})
let difficultyOptions = ref([
  {label:'Beginner',value:1},
  {label:'Intermediate',value:2},
  {label:'Senior',value:3},

  ]
)
const validations =  {
  firstName: {required, $lazy: true},
  lastName: {required, $lazy: true},
  difficulty: {required, $lazy: true},
}
const v$ = useVuelidate(validations,Info);
let submittingForm = ref(false)
async function submitForm(){
  submittingForm.value = true;
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) {
    submittingForm.value = false;
    return;
  }
  quizStore.info = Info.value;
  quizStore.formSubmitted = true;
}

</script>
