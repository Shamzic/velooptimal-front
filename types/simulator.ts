export interface Question {
  id: number;
  text: string;
  options: Array<{
    id: number;
    text: string;
    points: Record<string, number>;
  }>;
}

export type BikeType = 'gravel' | 'vtt' | 'vtc' | 'route' | 'pliant';

export interface BikeDescription {
  name: string;
  description: string;
}
