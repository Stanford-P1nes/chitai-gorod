import type { Rating } from '~/types/rating';

export interface Review {
    id: number;
    productId: number;
    author: string;
    text: string;
    rating: Rating;
    prosText: string;
    consText: string;
}