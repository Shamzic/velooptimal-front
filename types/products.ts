export type Product = {
    id: number;
    brand: string;
    model: string;
    price: number;
    url: string;
    imgSrc: string;
    rating?: {
        positive: number
        negative: number
    }
}

export interface EnrichedProduct extends Product {
    features?: string[];
    pros?: string[];
    cons?: string[];
}