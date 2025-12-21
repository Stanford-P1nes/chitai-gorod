import type { Rating } from '~/types/rating';

export interface Review {
    id: number;
    userId?: number | null;
    productId: number;
    authorName?: string | null;
    text: string;
    prosText?: string;
    consText?: string;
    rating: Rating;
    verifiedPurchase: boolean;
    created_at: string;
    updated_at: string;
}