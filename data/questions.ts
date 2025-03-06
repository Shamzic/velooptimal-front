import type { Question } from '../types/simulator';
import { BikeType } from '../types/simulator';

export const questions: Question[] = [
  {
    id: 1,
    text: "Où comptez-vous principalement utiliser votre vélo ?",
    options: [
      { 
        id: 1, 
        text: "En ville uniquement",
        points: { [BikeType.PLIANT]: 3, [BikeType.VTC]: 2, [BikeType.ROUTE]: 1 }
      },
      { 
        id: 2, 
        text: "Sur route et chemins",
        points: { [BikeType.GRAVEL]: 3, [BikeType.VTC]: 2, [BikeType.ROUTE]: 1 }
      },
      { 
        id: 3, 
        text: "Principalement hors route",
        points: { [BikeType.VTT]: 3, [BikeType.GRAVEL]: 1 }
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
        points: { [BikeType.PLIANT]: 3, [BikeType.VTC]: 1 }
      },
      { 
        id: 2, 
        text: "Entre 5 et 20km",
        points: { [BikeType.VTC]: 3, [BikeType.GRAVEL]: 2, [BikeType.ROUTE]: 2 }
      },
      { 
        id: 3, 
        text: "Plus de 20km",
        points: { [BikeType.ROUTE]: 3, [BikeType.GRAVEL]: 2 }
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
        points: { [BikeType.VTC]: 3, [BikeType.PLIANT]: 2 }
      },
      { 
        id: 2, 
        text: "Intermédiaire",
        points: { [BikeType.GRAVEL]: 2, [BikeType.ROUTE]: 2, [BikeType.VTT]: 2 }
      },
      { 
        id: 3, 
        text: "Avancé",
        points: { [BikeType.ROUTE]: 3, [BikeType.VTT]: 3 }
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
        points: { [BikeType.PLIANT]: 3 }
      },
      { 
        id: 2, 
        text: "Dans un garage ou local à vélo",
        points: { [BikeType.VTC]: 1, [BikeType.ROUTE]: 1, [BikeType.VTT]: 1, [BikeType.GRAVEL]: 1 }
      },
      { 
        id: 3, 
        text: "Je n'ai pas de contrainte particulière",
        points: { [BikeType.ROUTE]: 1, [BikeType.VTT]: 1, [BikeType.GRAVEL]: 1 }
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
        points: { [BikeType.VTC]: 3, [BikeType.PLIANT]: 2 }
      },
      { 
        id: 2, 
        text: "Sport et loisir",
        points: { [BikeType.ROUTE]: 2, [BikeType.VTT]: 2, [BikeType.GRAVEL]: 2 }
      }
    ]
  }
]; 