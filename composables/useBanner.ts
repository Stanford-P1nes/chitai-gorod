import { useFetch } from '#imports';
import { ref, nextTick } from 'vue';
import type { Banner } from '~/types/banner';

export function useBanner() {
    const bannerData = ref<Banner[]>([]);
    const loading = ref(false);
    const fetchError = ref<Error | null>(null);

    async function getBanner(): Promise<void> {
        loading.value = true;
        fetchError.value = null;

        await nextTick();

        try {
            const { data, error } = await useFetch<Banner[]>('/api/banner');

            if (error?.value) {
                fetchError.value = error.value as Error;
                console.error('useFetch error:', error.value);
                bannerData.value = [];
                return;
            }

            bannerData.value = data.value ?? [];

            loading.value = false;
        } catch (e) {
            fetchError.value = e as Error;
            console.log('Ошибка при получении данных: ', e);
        } finally {
            loading.value = false;
        }
    }

    return {
        bannerData,
        loading,
        fetchError,
        getBanner,
    };
}
