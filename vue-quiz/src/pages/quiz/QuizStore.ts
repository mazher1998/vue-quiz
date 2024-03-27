import { defineStore } from 'pinia';
export const QuizStore = defineStore('Quiz', {
  state: () => ({
    questionsList:[
      {
        question:'1',
        answer:0,
        options:[
          '1',
          '2',
          '3',
          '4',
        ]
      },
      {
        question:'2',
        answer:0,
        options:[
          '1',
          '2',
          '3',
          '4',
        ]
      },
      {
        question:'3',
        answer:0,
        options:[
          '1',
          '2',
          '3',
          '4',
        ]
      },
    ],
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
    }
  }),
  actions: {

  },
});
