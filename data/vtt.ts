import type { EnrichedProduct } from '@/types/products';

export const vttProducts: EnrichedProduct[] = [
  { 
    id: 0, 
    brand: 'Rockrider', 
    model: 'EXPL 500', 
    price: 499, 
    url: 'https://www.decathlon.fr/p/velo-vtt-randonnee-expl-500-29/_/R-p-330628?mc=8615848&c=noir', 
    imgSrc: 'https://contents.mediadecathlon.com/p2623157/k$56a387f834df8816d5aabd60fd676bba/sq/velo-vtt-randonnee-expl-500-noir-29.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.4, negative: 0.6 },
    features: [
      'Cadre aluminium',
      'Freins à disque mécaniques',
      'Fourche suspendue 100mm'
    ],
    pros: [
      'Excellent rapport qualité/prix',
      'Polyvalent',
      'Bonne suspension'
    ],
    cons: [
      'Un peu lourd',
      'Transmission basique'
    ]
  },
  { 
    id: 1, 
    brand: 'Rockrider', 
    model: 'ST 100', 
    price: 299, 
    url: 'https://www.decathlon.fr/p/velo-vtt-st-100-jaune/_/R-p-309154', 
    imgSrc: 'https://contents.mediadecathlon.com/p2153180/k$f0f3e5a0f5f5e9e9f5f5e9e9f5f5e9e9/sq/vtt-st-100-jaune.jpg?format=auto&f=800x800',
    rating: { positive: 4.1, negative: 0.9 },
    features: [
      'Cadre acier',
      'Freins V-brake',
      'Fourche suspendue 80mm'
    ],
    pros: [
      'Prix accessible',
      'Robuste',
      'Idéal pour débuter'
    ],
    cons: [
      'Freins basiques',
      'Composants d\'entrée de gamme'
    ]
  },
  { 
    id: 2, 
    brand: 'Rockrider', 
    model: 'ST 530', 
    price: 499, 
    url: 'https://www.decathlon.fr/p/velo-vtt-st-530-noir/_/R-p-309156', 
    imgSrc: 'https://contents.mediadecathlon.com/p2153181/k$f0f3e5a0f5f5e9e9f5f5e9e9f5f5e9e9/sq/vtt-st-530-noir.jpg?format=auto&f=800x800',
    rating: { positive: 4.5, negative: 0.5 },
    features: [
      'Cadre aluminium',
      'Freins à disque hydrauliques',
      'Fourche suspendue 120mm'
    ],
    pros: [
      'Excellents freins',
      'Bonne suspension',
      'Transmission fiable'
    ],
    cons: [
      'Stock limité',
      'Pneus à upgrader'
    ]
  }
]; 