import { defineStore } from 'pinia'

interface SimulatorState {
  currentQuestion: number;
  answers: number[];
  showResult: boolean;
  bikeScores: Record<string, number>;
  recommendedBike: string;
  isEditing: boolean;
}

export const useSimulatorStore = defineStore('simulator', {
  state: (): SimulatorState => ({
    currentQuestion: 0,
    answers: [],
    showResult: false,
    bikeScores: {},
    recommendedBike: '',
    isEditing: false
  }),

  actions: {
    answerQuestion(questionId: number, optionId: number) {
      this.answers[questionId] = optionId;
    },

    nextQuestion() {
      this.currentQuestion++;
    },

    previousQuestion() {
      if (this.currentQuestion > 0) {
        this.currentQuestion--;
      }
    },

    editQuestion(questionId: number) {
      this.currentQuestion = questionId;
      this.showResult = false;
      this.isEditing = true;
    },

    calculateResult(scores: Record<string, number>) {
      this.bikeScores = scores;
      this.recommendedBike = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
      this.showResult = true;
      this.isEditing = false;
    },

    reset() {
      this.currentQuestion = 0;
      this.answers = [];
      this.showResult = false;
      this.bikeScores = {};
      this.recommendedBike = '';
      this.isEditing = false;
    }
  },

  persist: true
}); 