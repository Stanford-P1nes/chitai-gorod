import type { Review } from '~/types/review';
import { reviews } from '~/data/reviews';
import { ref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useReviewStore = defineStore('reviews', () => {
    const { supabase } = useSupabase();
    const reviewsData = ref<Review[]>([]);
    const loadingReviews = ref(false);

    function setFallbackReviews() {
        reviewsData.value = reviews;
    }

    async function getReviews() {
        loadingReviews.value = true;
        await nextTick();

        try {
            const { data, error } = await supabase.from('reviews').select('*');

            if (error) {
                console.error('Supabase error: ', error);
                setFallbackReviews();
                return;
            }

            reviewsData.value = transformKeysToCamel<Review[]>(data);
        } catch (error) {
            console.error('Произошла ошибка во время получения данных: ', error);
            
            setFallbackReviews();
        } finally {
            loadingReviews.value = false;
        }
    }

    function getByProductId(productId: number) {
        return reviewsData.value.filter(review => review.productId === productId);
    }

    return {
        reviewsData,
        loadingReviews,
        getReviews,
        getByProductId,
    };
});
