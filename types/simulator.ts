export interface Question {
  id: number;
  text: string;
  options: Array<{
    id: number;
    text: string;
    points: Record<string, number>;
  }>;
}

export enum BikeType {
  GRAVEL = 'gravel',
  VTT = 'vtt',
  VTC = 'vtc',
  ROUTE = 'route',
  PLIANT = 'pliant'
}

export interface BikeDescription {
  name: string;
  description: string;
}
