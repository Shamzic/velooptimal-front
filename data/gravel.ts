import type { EnrichedProduct } from '@/types/products';

export const gravelBikes: EnrichedProduct[] = [
  { 
    id: 0, 
    brand: 'Nakamura', 
    model: 'Allroad 250', 
    price: 1199.99, 
    url: 'https://www.intersport.fr/velo_gravel_adulte_allroad_250-nakamura-p-YF60H6~8QQ/', 
    imgSrc: 'https://www.transitionvelo.com/content/uploads/2024/04/Nakamura-Allroad-250.jpg',
    rating: { positive: 4.5, negative: 0.5 },
    features: [
      'Cadre aluminium',
      'Freins à disque hydrauliques',
      'Transmission Shimano 2x9 vitesses'
    ],
    pros: [
      'Excellent rapport qualité/prix',
      'Polyvalent route et chemins',
      'Confortable sur longues distances'
    ],
    cons: [
      'Poids moyen (11.2kg)',
      'Pneus d\'origine basiques'
    ]
  },
  { 
    id: 1, 
    brand: 'Triban', 
    model: 'GRVL 120', 
    price: 800, 
    url: 'https://www.decathlon.fr/p/velo-gravel-triban-grvl-120/_/R-p-312397?mc=8575940&c=vert', 
    imgSrc: 'https://contents.mediadecathlon.com/p1956473/k$16ac0a30a404e2ecf763d5d98f8dec80/sq/velo-gravel-triban-grvl-520-homme-subcompact.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.2, negative: 0.8 },
    features: [
      'Cadre aluminium 6061',
      'Freins mécaniques',
      'Transmission Microshift 1x10 vitesses'
    ],
    pros: [
      'Prix très accessible',
      'Idéal pour débuter',
      'Robuste et fiable'
    ],
    cons: [
      'Freins mécaniques moins performants',
      'Composants d\'entrée de gamme'
    ]
  },
  { 
    id: 2, 
    brand: 'Triban', 
    model: 'GRVL 520', 
    price: 1200, 
    url: 'https://www.decathlon.fr/p/velo-gravel-triban-grvl-520-homme-subcompact/_/R-p-313015?mc=8587697', 
    imgSrc:'https://contents.mediadecathlon.com/p2579595/k$a4d99da7969620f9715ba2c7ad39b833/sq/velo-gravel-triban-grvl-120.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.7, negative: 0.3 },
    features: [
      'Cadre aluminium hydroformé',
      'Freins à disque hydrauliques',
      'Transmission Shimano GRX'
    ],
    pros: [
      'Excellent équipement',
      'Très polyvalent',
      'Finitions soignées'
    ],
    cons: [
      'Stock limité',
      'Délais de livraison variables'
    ]
  }
]; 