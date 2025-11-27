import { defineEventHandler } from 'h3';
import type { Review } from '~/types/review';
import { reviews } from '~/data/reviews';

export default defineEventHandler((): Review[] => {
    return reviews;
});