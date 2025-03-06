<script setup lang="ts">
import { ref, onMounted } from 'vue';

const heroSection = ref<HTMLElement | null>(null);
const featuresSection = ref<HTMLElement | null>(null);
const comparatorsSection = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        if (target === heroSection.value) {
          target.classList.add('animate-fade-in');
        } else if (target === featuresSection.value) {
          target.classList.add('animate-slide-up');
        } else if (target === comparatorsSection.value) {
          target.classList.add('animate-fade-in');
        }
      }
    });
  });

  if (heroSection.value && heroSection.value instanceof Element) observer.observe(heroSection.value);
  if (featuresSection.value && featuresSection.value instanceof Element) observer.observe(featuresSection.value);
  if (comparatorsSection.value && comparatorsSection.value instanceof Element) observer.observe(comparatorsSection.value);
});

// Fonction pour le scroll smooth
const scrollToComparators = () => {
  const element = document.getElementById('comparators');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Données des comparateurs
interface Comparator {
  type: string;
  description: string;
  icon: string;
  color: string;
}

const comparators: Comparator[] = [
  {
    type: 'GRAVEL',
    description: 'Polyvalent et aventurier',
    icon: 'mdi:terrain',
    color: 'from-amber-500 to-orange-600'
  },
  {
    type: 'VTT',
    description: 'Pour les terrains accidentés',
    icon: 'mdi:mountain',
    color: 'from-green-500 to-emerald-600'
  },
  {
    type: 'ROUTE',
    description: 'Performance sur route',
    icon: 'mdi:road-variant',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    type: 'VTC',
    description: 'Confort au quotidien',
    icon: 'mdi:bike',
    color: 'from-purple-500 to-violet-600'
  },
  {
    type: 'PLIANT',
    description: 'Pratique et compact',
    icon: 'mdi:bike-fast',
    color: 'from-rose-500 to-pink-600'
  }
];
</script>

<template>
  <main class="min-h-screen">
    <!-- Hero Section -->
    <section 
      ref="heroSection"
      class="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 overflow-hidden"
    >
      <!-- Fond animé -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-base-100/50 to-base-100"></div>
      </div>

      <div class="container mx-auto px-4 py-16 relative">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <h1 class="text-4xl md:text-6xl font-bold">
            <span class="block mb-4">Trouvez le vélo parfait</span>
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              pour votre style
            </span>
          </h1>

          <p class="text-xl md:text-2xl text-base-content/70 max-w-2xl mx-auto">
            Notre simulateur intelligent analyse vos besoins pour vous recommander le vélo idéal parmi des centaines de modèles.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <NuxtLink 
              to="/simulateur"
              class="btn btn-primary btn-lg group gap-2 min-w-[200px]"
            >
              Lancer le simulateur
              <Icon 
                name="material-symbols:arrow-right-alt-rounded" 
                class="w-6 h-6 transition-transform group-hover:translate-x-1"
              />
            </NuxtLink>
            <button 
              class="btn btn-outline btn-lg min-w-[200px]"
              @click="scrollToComparators"
            >
              Voir les comparateurs
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div class="space-y-2">
              <div class="text-4xl font-bold text-primary">5+</div>
              <div class="text-base-content/60">Types de vélos</div>
            </div>
            <div class="space-y-2">
              <div class="text-4xl font-bold text-primary">100+</div>
              <div class="text-base-content/60">Modèles comparés</div>
            </div>
            <div class="space-y-2 col-span-2 md:col-span-1">
              <div class="text-4xl font-bold text-primary">1000+</div>
              <div class="text-base-content/60">Utilisateurs satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section 
      ref="featuresSection"
      class="py-24 bg-base-100"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">
            Comment ça marche ?
          </h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="card bg-base-200 hover:shadow-lg transition-shadow">
              <div class="card-body items-center text-center">
                <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="material-symbols:quiz" class="w-8 h-8 text-primary" />
                </div>
                <h3 class="card-title">1. Répondez au quiz</h3>
                <p class="text-base-content/70">
                  Quelques questions simples pour comprendre vos besoins et votre usage
                </p>
              </div>
            </div>

            <div class="card bg-base-200 hover:shadow-lg transition-shadow">
              <div class="card-body items-center text-center">
                <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="material-symbols:analytics" class="w-8 h-8 text-primary" />
                </div>
                <h3 class="card-title">2. Recevez des suggestions</h3>
                <p class="text-base-content/70">
                  Notre algorithme analyse vos réponses et vous propose le type de vélo idéal
                </p>
              </div>
            </div>

            <div class="card bg-base-200 hover:shadow-lg transition-shadow">
              <div class="card-body items-center text-center">
                <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="material-symbols:shopping-cart" class="w-8 h-8 text-primary" />
                </div>
                <h3 class="card-title">3. Comparez les modèles</h3>
                <p class="text-base-content/70">
                  Découvrez notre sélection des meilleurs vélos au meilleur rapport qualité/prix
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparators Section -->
    <section 
      id="comparators"
      ref="comparatorsSection"
      class="py-24 bg-gradient-to-br from-base-200/50 via-base-100 to-base-200/50"
    >
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-6">
            Découvrez nos comparateurs
          </h2>
          <p class="text-xl text-center text-base-content/70 mb-16 max-w-2xl mx-auto">
            Une sélection minutieuse des meilleurs vélos du marché au prix juste
          </p>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NuxtLink 
              v-for="comparator in comparators" 
              :key="comparator.type"
              :to="'/' + comparator.type.toLowerCase()"
              class="card bg-base-100 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
            >
              <div class="card-body">
                <div class="flex items-center gap-4">
                  <div :class="`w-12 h-12 rounded-xl bg-gradient-to-br ${comparator.color} flex items-center justify-center`">
                    <Icon :name="comparator.icon" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="card-title group-hover:text-primary transition-colors">
                      {{ comparator.type }}
                    </h3>
                    <p class="text-base-content/70">{{ comparator.description }}</p>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
.bg-grid-pattern {
  background-image: 
    linear-gradient(to right, currentColor 1px, transparent 1px),
    linear-gradient(to bottom, currentColor 1px, transparent 1px);
  background-size: 4rem 4rem;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
}

.animate-slide-up {
  animation: slide-up 1s ease-out forwards;
}
</style>
