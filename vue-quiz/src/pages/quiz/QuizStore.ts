import { defineStore } from 'pinia';
export const QuizStore = defineStore('Quiz', {
  state: () => ({
    totalTime:0,
    marksObtained:0,
    formSubmitted:false,
    startTest:false,
    showQuestion:-1,
    quizCompleted:false,
    failedToAnswer:false,
    info:{
      firstName:'',
      lastName:'',
      difficulty:null,
    },
    questionsList:[
      {
        question:'What is the primary benefit of the Composition API over the Options API in Vue.js 3?',
        answer:2,
        options:[
          'Simplified syntax',
          'Better TypeScript support',
          'Improved reusability and organization',
          'Enhanced performance',
        ]
      },
      {
        question:'Which of the following is a new feature introduced in Vue.js 3 for optimizing rendering performance?',
        answer:3,
        options:[
          'Fragments',
          'Teleport',
          'Suspense',
          'Reactivity API',
        ]
      },
      {
        question:'In Vue.js 3, what is the purpose of the ref function?',
        answer:0,
        options:[
          'To declare reactive state',
          'To create a reference to DOM elements',
          'To define component lifecycle hooks',
          'To handle asynchronous operations',
        ]
      },
      {
        question:'What is the main difference between v-model in Vue.js 2 and Vue.js 3?',
        answer:0,
        options:[
          'Vue.js 3 v-model supports two-way binding by default',
          'Vue.js 3 v-model is deprecated in favor of Composition API',
          'Vue.js 3 v-model can only be used with custom components',
          'Vue.js 3 v-model requires explicit event handling',
        ]
      },
      {
        question:'Which Vue.js 3 feature is used to optimize the rendering of asynchronous components?',
        answer:2,
        options:[
          'Fragments',
          'Teleport',
          'Suspense',
          'Reactivity API',
        ]
      },
      {
        question:'What does Vue.js 3 teleport feature allow you to do?',
        answer:0,
        options:[
          'Move DOM nodes to another part of the DOM tree',
          'Create virtual DOM elements',
          'Create reusable UI components',
          'Handle asynchronous operations',
        ]
      },
      {
        question:'Which of the following Vue.js 3 features is used for rendering multiple root nodes in a component?',
        answer:0,
        options:[
          'Fragments',
          'Teleport',
          'Suspense',
          'Reactivity API',
        ]
      },
      {
        question:'In Vue.js 3, which tool is commonly used for managing application-level state?',
        answer:0,
        options:[
          'Vuex',
          'Vue Router',
          'Vue DevTools',
          'Axios',
        ]
      },
      {
        question:'What is the primary advantage of using Vue.js 3 with TypeScript?',
        answer:2,
        options:[
          'Improved performance',
          'Better code organization',
          'Enhanced type checking',
          'Simplified syntax',
        ]
      },
      {
        question:'Which Vue.js 3 feature enables better code organization and reusability by encapsulating related logic in a single object?',
        answer:2,
        options:[
          'Fragments',
          'Teleport',
          'Composition API',
          'Options API',
        ]
      },
    ],
  }),
  actions: {

  },
});
