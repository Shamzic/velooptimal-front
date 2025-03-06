import type { EnrichedProduct } from '@/types/products';

export const routeBikes: EnrichedProduct[] = [
  { 
    id: 0, 
    brand: 'Triban', 
    model: 'RC 120', 
    price: 499.99, 
    url: 'https://www.decathlon.fr/p/velo-route-cyclotourisme-rc120-frein-disque/_/R-p-302301', 
    imgSrc: 'https://contents.mediadecathlon.com/p2021839/k$9ef77d1c20368b5fd1bd0e44805b47a6/sq/velo-route-cyclotourisme-rc120-disque-gris-clair.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.3, negative: 0.7 },
    features: [
      'Cadre aluminium 6061',
      'Freins à disque mécaniques',
      'Transmission Microshift 2x8 vitesses'
    ],
    pros: [
      'Prix très compétitif',
      'Idéal pour débuter',
      'Freins à disque rassurants'
    ],
    cons: [
      'Transmission d\'entrée de gamme',
      'Roues basiques'
    ]
  },
  { 
    id: 1, 
    brand: 'Van Rysel', 
    model: 'EDR AF 105', 
    price: 1499, 
    url: 'https://www.decathlon.fr/p/velo-endurance-shimano-105-edr-af-femme-bleu-fonce/_/R-p-313178?mc=8576543', 
    imgSrc: 'https://contents.mediadecathlon.com/p1938186/k$77c8b356f2dc3e130abe9b20913e9725/sq/velo-endurance-shimano-105-edr-af-femme-bleu-fonce.jpg?format=auto&f=1200x1200',
    rating: { positive: 4.7, negative: 0.3 },
    features: [
      'Cadre aluminium hydroformé',
      'Freins à disque hydrauliques',
      'Transmission Shimano 105'
    ],
    pros: [
      'Excellent rapport qualité/prix',
      'Transmission performante',
      'Confort et rigidité bien équilibrés'
    ],
    cons: [
      'Roues un peu lourdes',
      'Montage à faire soi-même'
    ]
  },
  { 
    id: 2, 
    brand: 'Canyon', 
    model: 'Endurace CF 7', 
    price: 2399, 
    url: 'https://www.canyon.com/fr-fr/velos-de-route/velos-endurance/endurace/cf/endurace-cf-7/3707.html', 
    imgSrc: 'https://www.canyon.com/dw/image/v2/BCML_PRD/on/demandware.static/-/Sites-canyon-master/default/dw9dfc9bc3/images/full/3707_endur/2024/3707_endurace-cf-7_P08_P5.jpg?sw=1300&sfrm=png&q=90&bgcolor=F2F2F2',
    rating: { positive: 4.8, negative: 0.2 },
    features: [
      'Cadre carbone',
      'Freins à disque hydrauliques',
      'Transmission Shimano 105 Di2'
    ],
    pros: [
      'Cadre confortable et performant',
      'Transmission électronique',
      'Excellent comportement routier'
    ],
    cons: [
      'Prix élevé',
      'Délais de livraison variables'
    ]
  }
]; 