export type ProductStatus = 'new' | 'exclusive' | 'ratings';
import type { Rating } from '~/types/rating';

export interface Product {
    id: number;
    img: string;
    covers: any;
    price: number;
    oldPrice: number;
    currency: string;
    discount: string;
    name: string;
    author: string;
    description: string;
    tag: any;
    characteristics: string;
    rating: Rating;
    status?: ProductStatus;
    category: string;
    subcategory: string;
    availability: boolean;
    restrictions: string;
    publication: number;
    publishingHouse: string;
    size: number;
    weight: number;
    numberPages: number;
    coverType: string;
}