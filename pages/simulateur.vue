<script setup lang="ts">
import { useSimulatorStore } from '../stores/simulator';
import { BikeType } from '../types/simulator';
import { bikeDescriptions } from '../data/bikes';
import { questions } from '../data/questions';

const store = useSimulatorStore();

const currentQuestion = computed(() => store.currentQuestion);
const answers = computed(() => store.answers);
const showResult = computed(() => store.showResult);
const bikeScores = computed(() => store.bikeScores);
const isEditing = computed(() => store.isEditing);

const recommendedBike = computed(() => {
  const bike = store.recommendedBike;
  return bike ? bike as BikeType : BikeType.VTC;
});

const currentBikeDescription = computed(() => bikeDescriptions[recommendedBike.value]);

const answeredQuestions = computed(() => {
  return questions.map((question, index) => ({
    ...question,
    selectedOption: question.options.find(opt => opt.id === answers.value[index]),
    questionNumber: index + 1
  })).filter(q => q.selectedOption);
});

const otherOptions = computed(() => {
  if (!bikeScores.value) return [];
  return Object.entries(bikeScores.value)
    .filter(([type]) => type !== recommendedBike.value)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([type, score]) => ({
      type,
      score,
      ...bikeDescriptions[type as BikeType]
    }));
});

const calculateResult = () => {
  const scores: Record<string, number> = {
    [BikeType.GRAVEL]: 0,
    [BikeType.VTT]: 0,
    [BikeType.VTC]: 0,
    [BikeType.ROUTE]: 0,
    [BikeType.PLIANT]: 0
  };

  answers.value.forEach((answerId, questionIndex) => {
    const question = questions[questionIndex];
    const selectedOption = question.options.find(opt => opt.id === answerId);
    if (selectedOption) {
      Object.entries(selectedOption.points).forEach(([bikeType, points]) => {
        scores[bikeType] = (scores[bikeType] || 0) + points;
      });
    }
  });

  store.calculateResult(scores);
};

const answerQuestion = (optionId: number) => {
  store.answerQuestion(currentQuestion.value, optionId);
  if (currentQuestion.value < questions.length - 1) {
    store.nextQuestion();
  } else {
    calculateResult();
  }
};

const goToPreviousQuestion = () => {
  store.previousQuestion();
};

const resetSimulator = () => {
  store.reset();
};

const progressPercentage = computed(() => {
  if (showResult.value) return 100;
  return ((currentQuestion.value) / questions.length) * 100;
});

// Ajout des classes d'animation pour les transitions
const slideEnterActiveClass = "transition-all duration-500 ease-out";
const slideEnterFromClass = "opacity-0 transform translate-x-full";
const slideEnterToClass = "opacity-100 transform translate-x-0";
const slideLeaveActiveClass = "transition-all duration-500 ease-in";
const slideLeaveFromClass = "opacity-100 transform translate-x-0";
const slideLeaveToClass = "opacity-0 transform -translate-x-full";
</script>

<template>
  <div class="flex flex-col bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
    <main class="flex-1">
      <div class="container mx-auto px-4 py-4 sm:py-8 mt-16 mb-8">
        <div class="max-w-3xl mx-auto">
          <!-- En-tête animé -->
          <div class="text-center mb-8 sm:mb-12 animate-fade-in">
            <h1 class="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trouvez votre vélo idéal
            </h1>
            <p class="text-base sm:text-lg opacity-80">En quelques secondes, découvrez le vélo parfait pour votre usage et votre budget</p>
          </div>
          
          <!-- Progress Bar améliorée -->
          <div class="relative w-full h-3 sm:h-4 bg-base-200 rounded-full mb-8 sm:mb-12 overflow-hidden">
            <div 
              class="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out rounded-full"
              :style="{ width: progressPercentage + '%' }"
            ></div>
            <div class="absolute top-0 left-0 w-full h-full opacity-50">
              <div class="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>

          <!-- Section Questions avec Transitions -->
          <div v-if="!showResult" class="relative min-h-[400px] sm:min-h-[500px] overflow-hidden">
            <TransitionGroup
              :enter-active-class="slideEnterActiveClass"
              :enter-from-class="slideEnterFromClass"
              :enter-to-class="slideEnterToClass"
              :leave-active-class="slideLeaveActiveClass"
              :leave-from-class="slideLeaveFromClass"
              :leave-to-class="slideLeaveToClass"
            >
              <div 
                :key="currentQuestion"
                class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 absolute inset-x-0 w-full"
              >
                <div class="card-body p-4 sm:p-8">
                  <h2 class="card-title text-xl sm:text-2xl mb-4 sm:mb-8 text-primary">
                    Question {{ currentQuestion + 1 }}/{{ questions.length }}
                    <span v-if="isEditing" class="text-sm font-normal text-base-content/60">(Modification)</span>
                  </h2>
                  <p class="text-lg sm:text-xl mb-6 sm:mb-8">{{ questions[currentQuestion].text }}</p>
                  <div class="space-y-3 sm:space-y-4">
                    <button
                      v-for="option in questions[currentQuestion].options"
                      :key="option.id"
                      @click="answerQuestion(option.id)"
                      class="w-full p-3 sm:p-4 rounded-lg border-2 border-base-300 hover:border-primary hover:bg-primary hover:text-primary-content transition-all duration-300 transform hover:scale-102 hover:shadow-lg text-left text-sm sm:text-base"
                      :class="{ 'border-primary bg-primary/10': answers[currentQuestion] === option.id }"
                    >
                      {{ option.text }}
                    </button>
                  </div>
                  
                  <!-- Bouton Retour -->
                  <div class="mt-6 flex justify-start" v-if="currentQuestion > 0">
                    <button 
                      @click="goToPreviousQuestion" 
                      class="btn btn-outline btn-sm gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Question précédente
                    </button>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>

          <!-- Section Résultats avec Animations -->
          <div v-else class="space-y-6 animate-fade-in">
            <!-- Résultat Principal -->
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-1">
              <div class="bg-base-100 rounded-xl">
                <div class="card-body items-center text-center p-6 sm:p-10">
                  <div class="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  
                  <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon name="mdi:bicycle" class="h-8 w-8 sm:h-10 sm:w-10 text-primary" />
                  </div>

                  <h2 class="card-title text-2xl sm:text-3xl mb-2 text-primary font-bold">Votre vélo idéal</h2>
                  <p class="text-base text-base-content/60 mb-8">Basé sur vos réponses, voici notre recommandation personnalisée</p>

                  <!-- Résumé des réponses -->
                  <div class="w-full mb-8">
                    <div class="collapse collapse-arrow bg-base-200">
                      <input type="checkbox" /> 
                      <div class="collapse-title text-xl font-medium">
                        Voir vos réponses
                      </div>
                      <div class="collapse-content">
                        <div class="space-y-4">
                          <div v-for="question in answeredQuestions" :key="question.id" 
                               class="bg-base-100 p-4 rounded-lg hover:bg-base-300 transition-colors">
                            <div class="flex justify-between items-start gap-4">
                              <div class="flex-1 min-w-0">
                                <div class="flex items-center justify-between mb-2">
                                  <h4 class="font-medium">Question {{ question.questionNumber }}</h4>
                                  <button 
                                    class="btn btn-ghost btn-sm ml-2"
                                    @click.stop="store.editQuestion(question.questionNumber - 1)"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                  </button>
                                </div>
                                <p class="text-sm mb-2 break-words">{{ question.text }}</p>
                                <p class="text-sm font-medium text-primary break-words">
                                  Réponse : {{ question.selectedOption?.text }}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="max-w-2xl w-full">
                    <div class="bg-base-200 rounded-xl p-6 mb-8">
                      <h3 class="text-2xl sm:text-3xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {{ currentBikeDescription.name }}
                      </h3>
                      <p class="text-base sm:text-lg opacity-80">{{ currentBikeDescription.description }}</p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                      <NuxtLink :to="'/' + recommendedBike" class="btn btn-primary btn-lg gap-2 group">
                        <span>Voir les recommandations</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </NuxtLink>
                      <button @click="resetSimulator" class="btn btn-outline btn-lg">
                        Faire une nouvelle simulation
                        <Icon name="ph:arrows-counter-clockwise-bold" class="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Autres Options -->
            <div class="bg-base-100 rounded-2xl shadow-lg">
              <div class="p-6 sm:p-8">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Icon name="ph:list-magnifying-glass" class="h-5 w-5 text-secondary" />
                  </div>
                  <h3 class="text-xl sm:text-2xl font-bold">Autres options à considérer</h3>
                </div>

                <div class="space-y-4">
                  <div 
                    v-for="option in otherOptions"
                    :key="option.type"
                    class="group bg-base-200 hover:bg-base-300 rounded-xl p-5 transition-all duration-300"
                  >
                    <div class="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                          <h4 class="text-lg font-semibold">{{ option.name }}</h4>
                          <div class="px-2 py-1 rounded-full bg-base-300 text-xs">
                            Score: {{ option.score }}
                          </div>
                        </div>
                        <p class="text-sm opacity-70">{{ option.description }}</p>
                      </div>
                      <NuxtLink :to="'/' + option.type" class="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg bg-base-100 hover:bg-primary hover:text-white border border-base-300 hover:border-primary shadow-sm transition-all duration-300">
                        <span>Découvrir</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style>
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes shimmer {
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out forwards;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}

.scale-102 {
  scale: 1.02;
}
</style> 