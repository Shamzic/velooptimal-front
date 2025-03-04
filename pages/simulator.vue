<script setup lang="ts">
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

const currentQuestion = ref(0);
const answers = ref<number[]>([]);
const showResult = ref(false);
const bikeScores = ref<Record<string, number>>({});
const recommendedBike = ref('');

const bikeDescriptions = {
  'gravel': {
    name: 'Vélo Gravel',
    description: 'Polyvalent et robuste, parfait pour rouler sur route et chemins. Idéal pour l\'aventure et les longues distances sur terrains variés.',
    image: '/img/gravel.svg'
  },
  'vtt': {
    name: 'VTT (Vélo Tout Terrain)',
    description: 'Conçu pour les terrains accidentés et les sentiers. Parfait pour les amateurs de sensations fortes et de nature.',
    image: '/img/mtb.svg'
  },
  'vtc': {
    name: 'Vélo Tout Chemin',
    description: 'Le compromis idéal entre confort et polyvalence. Adapté à un usage quotidien sur tous types de surfaces.',
    image: '/img/vtc.svg'
  },
  'route': {
    name: 'Vélo de Route',
    description: 'Léger et rapide, optimisé pour les longues distances sur route. Parfait pour le sport et la performance.',
    image: '/img/road.svg'
  },
  'pliant': {
    name: 'Vélo Pliant',
    description: 'Pratique et compact, parfait pour les trajets multimodaux. Idéal pour les citadins qui manquent d\'espace.',
    image: '/img/folding.svg'
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

  bikeScores.value = scores;
  recommendedBike.value = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  showResult.value = true;
};

const answerQuestion = (optionId: number) => {
  answers.value[currentQuestion.value] = optionId;
  if (currentQuestion.value < questions.length - 1) {
    currentQuestion.value++;
  } else {
    calculateResult();
  }
};

const resetSimulator = () => {
  currentQuestion.value = 0;
  answers.value = [];
  showResult.value = false;
  bikeScores.value = {};
  recommendedBike.value = '';
};

const progressPercentage = computed(() => {
  return ((currentQuestion.value) / questions.length) * 100;
});
</script>

<template>
  <div class="container mx-auto px-4 py-8 mt-16">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">Trouvez votre vélo idéal</h1>
      
      <!-- Progress Bar -->
      <div class="w-full bg-base-200 rounded-full h-2.5 mb-8">
        <div class="bg-primary h-2.5 rounded-full transition-all duration-500" :style="{ width: progressPercentage + '%' }"></div>
      </div>

      <!-- Questions Section -->
      <div v-if="!showResult" class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6">{{ questions[currentQuestion].text }}</h2>
          <div class="space-y-4">
            <button
              v-for="option in questions[currentQuestion].options"
              :key="option.id"
              @click="answerQuestion(option.id)"
              class="btn btn-outline w-full text-left justify-start hover:bg-primary hover:text-primary-content"
            >
              {{ option.text }}
            </button>
          </div>
        </div>
      </div>

      <!-- Results Section -->
      <div v-else class="space-y-8">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title text-3xl mb-4">Votre vélo recommandé :</h2>
            <div class="flex flex-col items-center">
              <img 
                :src="bikeDescriptions[recommendedBike].image" 
                :alt="bikeDescriptions[recommendedBike].name"
                class="rounded-xl w-full max-w-md mb-6"
              />
              <h3 class="text-2xl font-bold mb-4">{{ bikeDescriptions[recommendedBike].name }}</h3>
              <p class="text-lg mb-6">{{ bikeDescriptions[recommendedBike].description }}</p>
              
              <div class="flex gap-4">
                <NuxtLink :to="'/' + recommendedBike" class="btn btn-primary">
                  Voir les recommandations
                </NuxtLink>
                <button @click="resetSimulator" class="btn btn-outline">
                  Recommencer
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Autres options -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h3 class="card-title text-2xl mb-6">Autres options qui pourraient vous convenir :</h3>
            <div class="space-y-4">
              <div 
                v-for="[type, score] in Object.entries(bikeScores).sort((a, b) => b[1] - a[1]).slice(1, 4)"
                :key="type"
                class="flex items-center justify-between p-4 bg-base-200 rounded-lg"
              >
                <div>
                  <h4 class="text-lg font-semibold">{{ bikeDescriptions[type].name }}</h4>
                  <p class="text-sm opacity-70">{{ bikeDescriptions[type].description }}</p>
                </div>
                <NuxtLink :to="'/' + type" class="btn btn-sm">
                  En savoir plus
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>