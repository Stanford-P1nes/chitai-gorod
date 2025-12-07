import type { Review } from '~/types/review';
import { ref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '#imports';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useReviewStore = defineStore('review', () => {
    const { supabase } = useSupabase()
    const reviewsData = ref<Review[]>([]);
    const loadingReview = ref<boolean>(false);

    async function fetchReviews() {
        loadingReview.value = true;
        await nextTick();

        try {
            const { data, error } = await supabase.from('reviews').select('*')
            
            if ( !error ) reviewsData.value = transformKeysToCamel<Review[]>(data);
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
