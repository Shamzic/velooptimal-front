import type { Question } from '../types/simulator';

export const questions: Question[] = [
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