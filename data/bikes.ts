import { BikeType, type BikeDescription } from '../types/simulator';

export const bikeDescriptions: Record<BikeType, BikeDescription> = {
  [BikeType.GRAVEL]: {
    name: 'Vélo Gravel',
    description: 'Polyvalent et robuste, parfait pour rouler sur route et chemins. Idéal pour l\'aventure et les longues distances sur terrains variés.'
  },
  [BikeType.VTT]: {
    name: 'Vélo Tout-Terrain (VTT)',
    description: 'Conçu pour les terrains accidentés et les sentiers. Parfait pour les amateurs de sensations fortes et de nature.'
  },
  [BikeType.VTC]: {
    name: 'Vélo Tout Chemin (VTC)',
    description: 'Le compromis idéal entre confort et polyvalence. Adapté à un usage quotidien sur tous types de surfaces.'
  },
  [BikeType.ROUTE]: {
    name: 'Vélo de Route',
    description: 'Léger et rapide, optimisé pour les longues distances sur route. Parfait pour le sport et la performance.'
  },
  [BikeType.PLIANT]: {
    name: 'Vélo Pliant',
    description: 'Pratique et compact, parfait pour les trajets multimodaux. Idéal pour les citadins qui manquent d\'espace.'
  }
}; 