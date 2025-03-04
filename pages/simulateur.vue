<script setup lang="ts">
import { useSimulatorStore } from '../stores/simulator';

interface Question {
  id: number;
  text: string;
  options: Array<{
    id: number;
    text: string;
    points: Record<string, number>;
  }>;
}

const questions: Question[] = [
  {
    id: 1,
    text: "Où comptez-vous principalement utiliser votre vélo ?",
    options: [
      { 
        id: 1, 
        text: "En ville uniquement",
        points: { 'pliant': 3, 'vtc': 2, 'route': 1 }
      },
      { 
        id: 2, 
        text: "Sur route et chemins",
        points: { 'gravel': 3, 'vtc': 2, 'route': 1 }
      },
      { 
        id: 3, 
        text: "Principalement hors route",
        points: { 'vtt': 3, 'gravel': 1 }
      }
    ]
  },
  {
    id: 2,
    text: "Quelle distance moyenne comptez-vous parcourir ?",
    options: [
      { 
        id: 1, 
        text: "Moins de 5km",
        points: { 'pliant': 3, 'vtc': 1 }
      },
      { 
        id: 2, 
        text: "Entre 5 et 20km",
        points: { 'vtc': 3, 'gravel': 2, 'route': 2 }
      },
      { 
        id: 3, 
        text: "Plus de 20km",
        points: { 'route': 3, 'gravel': 2 }
      }
    ]
  },
  {
    id: 3,
    text: "Quel est votre niveau en vélo ?",
    options: [
      { 
        id: 1, 
        text: "Débutant",
        points: { 'vtc': 3, 'pliant': 2 }
      },
      { 
        id: 2, 
        text: "Intermédiaire",
        points: { 'gravel': 2, 'route': 2, 'vtt': 2 }
      },
      { 
        id: 3, 
        text: "Avancé",
        points: { 'route': 3, 'vtt': 3 }
      }
    ]
  },
  {
    id: 4,
    text: "Comment comptez-vous transporter/stocker votre vélo ?",
    options: [
      { 
        id: 1, 
        text: "Dans un petit espace (appartement, transport en commun)",
        points: { 'pliant': 3 }
      },
      { 
        id: 2, 
        text: "Dans un garage ou local à vélo",
        points: { 'vtc': 1, 'route': 1, 'vtt': 1, 'gravel': 1 }
      },
      { 
        id: 3, 
        text: "Je n'ai pas de contrainte particulière",
        points: { 'route': 1, 'vtt': 1, 'gravel': 1 }
      }
    ]
  },
  {
    id: 5,
    text: "Quel type d'utilisation prévoyez-vous ?",
    options: [
      { 
        id: 1, 
        text: "Transport quotidien",
        points: { 'vtc': 3, 'pliant': 2 }
      },
      { 
        id: 2, 
        text: "Sport et loisir",
        points: { 'route': 2, 'vtt': 2, 'gravel': 2 }
      }
    ]
  }
];

const store = useSimulatorStore();

const currentQuestion = computed(() => store.currentQuestion);
const answers = computed(() => store.answers);
const showResult = computed(() => store.showResult);
const bikeScores = computed(() => store.bikeScores);
const recommendedBike = computed(() => store.recommendedBike || 'vtc');

const currentBikeDescription = computed(() => bikeDescriptions[recommendedBike.value]);

const otherOptions = computed(() => {
  if (!bikeScores.value) return [];
  return Object.entries(bikeScores.value)
    .filter(([type]) => type !== recommendedBike.value)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([type, score]) => ({
      type,
      score,
      ...bikeDescriptions[type]
    }));
});

const bikeDescriptions = {
  'gravel': {
    name: 'Vélo Gravel',
    description: 'Polyvalent et robuste, parfait pour rouler sur route et chemins. Idéal pour l\'aventure et les longues distances sur terrains variés.'
  },
  'vtt': {
    name: 'Vélo Tout-Terrain (VTT)',
    description: 'Conçu pour les terrains accidentés et les sentiers. Parfait pour les amateurs de sensations fortes et de nature.'
  },
  'vtc': {
    name: 'Vélo Tout Chemin (VTC)',
    description: 'Le compromis idéal entre confort et polyvalence. Adapté à un usage quotidien sur tous types de surfaces.'
  },
  'route': {
    name: 'Vélo de Route',
    description: 'Léger et rapide, optimisé pour les longues distances sur route. Parfait pour le sport et la performance.'
  },
  'pliant': {
    name: 'Vélo Pliant',
    description: 'Pratique et compact, parfait pour les trajets multimodaux. Idéal pour les citadins qui manquent d\'espace.'
  }
};

const calculateResult = () => {
  const scores: Record<string, number> = {
    'gravel': 0,
    'vtt': 0,
    'vtc': 0,
    'route': 0,
    'pliant': 0
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
  <div class="flex flex-col min-h-screen bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
    <main class="flex-1 flex flex-col">
      <div class="container mx-auto px-4 py-8 mt-16">
        <div class="max-w-3xl mx-auto">
          <!-- En-tête animé -->
          <div class="text-center mb-12 animate-fade-in">
            <h1 class="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Trouvez votre vélo idéal
            </h1>
            <p class="text-lg opacity-80">En quelques secondes, découvrez le vélo parfait pour votre usage et votre budget</p>
          </div>
          
          <!-- Progress Bar améliorée -->
          <div class="relative w-full h-4 bg-base-200 rounded-full mb-12 overflow-hidden">
            <div 
              class="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-out rounded-full"
              :style="{ width: progressPercentage + '%' }"
            ></div>
            <div class="absolute top-0 left-0 w-full h-full opacity-50">
              <div class="animate-shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>

          <!-- Section Questions avec Transitions -->
          <div v-if="!showResult" class="relative min-h-[500px] overflow-hidden">
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
                <div class="card-body">
                  <h2 class="card-title text-2xl mb-8 text-primary">
                    Question {{ currentQuestion + 1 }}/{{ questions.length }}
                  </h2>
                  <p class="text-xl mb-8">{{ questions[currentQuestion].text }}</p>
                  <div class="space-y-4">
                    <button
                      v-for="option in questions[currentQuestion].options"
                      :key="option.id"
                      @click="answerQuestion(option.id)"
                      class="w-full p-4 rounded-lg border-2 border-base-300 hover:border-primary hover:bg-primary hover:text-primary-content transition-all duration-300 transform hover:scale-102 hover:shadow-lg text-left"
                    >
                      {{ option.text }}
                    </button>
                  </div>
                </div>
              </div>
            </TransitionGroup>
          </div>

          <!-- Section Résultats avec Animations -->
          <div v-else class="space-y-6 animate-fade-in">
            <!-- Résultat Principal -->
            <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div class="card-body items-center text-center">
                <h2 class="card-title text-3xl mb-6 text-primary">Votre vélo recommandé</h2>
                <div class="max-w-2xl mx-auto">
                  <h3 class="text-2xl font-bold mb-4">{{ currentBikeDescription.name }}</h3>
                  <p class="text-lg mb-8 opacity-80">{{ currentBikeDescription.description }}</p>
                  
                  <div class="flex gap-4 justify-center">
                    <NuxtLink :to="'/' + recommendedBike" class="btn btn-primary btn-lg gap-2 group">
                      Voir les recommandations
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </NuxtLink>
                    <button @click="resetSimulator" class="btn btn-outline btn-lg">
                      Recommencer
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Autres Options -->
            <div class="card bg-base-100 shadow-xl mb-48">
              <div class="card-body">
                <h3 class="card-title text-2xl mb-6">Autres options qui pourraient vous convenir</h3>
                <div class="space-y-4">
                  <div 
                    v-for="option in otherOptions"
                    :key="option.type"
                    class="flex items-center justify-between p-6 bg-base-200 rounded-xl hover:bg-base-300 transition-colors duration-300"
                  >
                    <div>
                      <h4 class="text-lg font-semibold">{{ option.name }}</h4>
                      <p class="text-sm opacity-70">{{ option.description }}</p>
                    </div>
                    <NuxtLink :to="'/' + option.type" class="btn btn-ghost btn-sm">
                      En savoir plus
                    </NuxtLink>
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