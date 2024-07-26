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