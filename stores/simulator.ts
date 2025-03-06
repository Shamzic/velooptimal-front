import { defineStore } from 'pinia'

interface SimulatorState {
  currentQuestion: number;
  answers: number[];
  showResult: boolean;
  bikeScores: Record<string, number>;
  recommendedBike: string;
}

export const useSimulatorStore = defineStore('simulator', {
  state: (): SimulatorState => ({
    currentQuestion: 0,
    answers: [],
    showResult: false,
    bikeScores: {},
    recommendedBike: ''
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

    calculateResult(scores: Record<string, number>) {
      this.bikeScores = scores;
      this.recommendedBike = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
      this.showResult = true;
    },

    reset() {
      this.currentQuestion = 0;
      this.answers = [];
      this.showResult = false;
      this.bikeScores = {};
      this.recommendedBike = '';
    }
  },

  persist: true
}); 