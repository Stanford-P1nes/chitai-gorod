export type ProductStatus = 'new' | 'exclusive' | 'ratings';

export interface Product {
    id: number;
    img: string;
    alt: string;
    price: number;
    oldPrice: number;
    currency: string;
    discount: string;
    name: string;
    author: string;
    rating: number;
    status?: ProductStatus;
    to: string;
    category: string;
    subcategory: string;
}