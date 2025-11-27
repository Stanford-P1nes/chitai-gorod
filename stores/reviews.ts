import type { Review } from '~/types/review';
import { ref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '#imports';

export const useReviewStore = defineStore('review', () => {
    const reviewsData = ref<Review[]>([]);
    const loadingReview = ref<boolean>(false);

    async function fetchReviews() {
        loadingReview.value = true;
        await nextTick();

        try {
            const { data, error } = await useFetch<Review[]>('/api/reviews', {
                key: 'reviews',
                server: false,
            });

            if (error.value) {
                console.error('Ошибка при получении данных:', error.value);
                return;
            }

            if (data.value) {
                reviewsData.value = data.value;
            } else {
                console.warn('Никакие данные не получены от API');
            }
        } catch (error) {
            console.log('Произошла ошибка во время получения данных: ', error);
            return [];
        } finally {
            loadingReview.value = false;
        }
    }

    function getByProductId (productId: number) {
        return reviewsData.value.filter(review => review.productId === productId)
    }

    return {
        reviewsData,
        loadingReview,
        fetchReviews,
        getByProductId,
    };
});
