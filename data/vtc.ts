import type { EnrichedProduct } from '@/types/products';

export const vtcProducts: EnrichedProduct[] = [
  { 
    id: 0, 
    brand: 'B\'Twin', 
    model: 'Riverside 500', 
    price: 399.99, 
    url: 'https://www.decathlon.fr/p/velo-tout-chemin-riverside-500-bleu-nuit/_/R-p-300777?mc=8577925', 
    imgSrc: 'https://contents.mediadecathlon.com/p2131458/k$6185b3e6d76770102bf16f96173e5a53/sq/velo-tout-chemin-riverside-500-bleu-nuit.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.3, negative: 0.7 },
    features: [
      'Cadre aluminium',
      'Freins V-brake',
      'Transmission Shimano 8 vitesses'
    ],
    pros: [
      'Excellent rapport qualité/prix',
      'Confortable pour la ville',
      'Facile à entretenir'
    ],
    cons: [
      'Freins basiques',
      'Pas de porte-bagages inclus'
    ]
  },
  { 
    id: 1, 
    brand: 'B\'Twin', 
    model: 'Riverside 120', 
    price: 299.99, 
    url: 'https://www.decathlon.fr/p/velo-tout-chemin-riverside-120-gris/_/R-p-300806?mc=8771010&c=gris', 
    imgSrc: 'https://contents.mediadecathlon.com/p2191810/k$7a0f0bb0f0a2cfa13886b19146b4b90f/sq/velo-tout-chemin-riverside-120-gris.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.0, negative: 1.0 },
    features: [
      'Cadre acier',
      'Freins V-brake',
      'Transmission 6 vitesses'
    ],
    pros: [
      'Prix très accessible',
      'Robuste',
      'Idéal pour débuter'
    ],
    cons: [
      'Un peu lourd',
      'Équipement basique'
    ]
  },
  { 
    id: 2, 
    brand: 'Nakamura', 
    model: 'Crossland', 
    price: 399.99, 
    url: 'https://www.intersport.fr/vtc_adulte_crossland_b-nakamura-p-YF60Z1~1PV/', 
    imgSrc: 'https://meilleur-velo-electrique.com/wp-content/uploads/2024/09/Nakamura-Crossland.png',
    rating: { positive: 4.2, negative: 0.8 },
    features: [
      'Cadre aluminium',
      'Freins V-brake',
      'Transmission 21 vitesses'
    ],
    pros: [
      'Polyvalent',
      'Bonne position',
      'Nombreuses vitesses'
    ],
    cons: [
      'Assemblage à vérifier',
      'Pneus moyens'
    ]
  }
]; 