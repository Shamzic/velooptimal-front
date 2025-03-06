import type { EnrichedProduct } from '@/types/products';

export const pliantProducts: EnrichedProduct[] = [
  { 
    id: 0, 
    brand: 'B\'Twin', 
    model: 'Fold 500', 
    price: 499.99, 
    url: 'https://www.decathlon.fr/p/velo-pliant-fold-500-bleu-fonce/_/R-p-343354?mc=8771462', 
    imgSrc: 'https://contents.mediadecathlon.com/p2488503/k$1d54ba6226f42ca27c15d11eae0689c9/sq/velo-pliant-fold-500-bleu-fonce.jpg?format=auto&f=969x969',
    rating: { positive: 4.3, negative: 0.7 },
    features: [
      'Cadre aluminium',
      'Freins V-brake',
      'Transmission 6 vitesses',
      'Pliage en 30 secondes'
    ],
    pros: [
      'Rapport qualité/prix',
      'Facile à plier',
      'Léger (12kg)'
    ],
    cons: [
      'Freins basiques',
      'Confort moyen'
    ]
  },
  { 
    id: 1, 
    brand: 'Brompton', 
    model: 'C Line Explore', 
    price: 1699, 
    url: 'https://fr.brompton.com/p/903/fr-c-line-explore', 
    imgSrc: 'https://cdn11.bigcommerce.com/s-y6rxtt0m81/products/903/images/44178/M6L033BB6B00R000B0050125333300FR_2__31225.1738834812.1280.1280.jpg?c=1',
    rating: { positive: 4.8, negative: 0.2 },
    features: [
      'Cadre acier',
      'Freins à disque',
      'Transmission 6 vitesses',
      'Pliage ultra-compact'
    ],
    pros: [
      'Qualité exceptionnelle',
      'Ultra compact plié',
      'Excellent en ville'
    ],
    cons: [
      'Prix élevé',
      'SAV spécialisé'
    ]
  },
  { 
    id: 2, 
    brand: 'Tern', 
    model: 'Link D8', 
    price: 999, 
    url: 'https://www.cyclable.com/13493-velo-pliant-tern-link-d8.html', 
    imgSrc: 'https://www.cyclable.com/47408-thickbox/velo-pliant-tern-link-d8.jpg',
    rating: { positive: 4.5, negative: 0.5 },
    features: [
      'Cadre aluminium',
      'Freins V-brake',
      'Transmission 8 vitesses',
      'Pliage rapide'
    ],
    pros: [
      'Très polyvalent',
      'Bonne stabilité',
      'Nombreuses vitesses'
    ],
    cons: [
      'Volume plié moyen',
      'Poids moyen'
    ]
  }
]; 