import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';
import type { Banner } from '~/types/banner';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useBannerStore = defineStore('banners', () => {
    const { supabase } = useSupabase();
    const banners = ref<Banner[]>([]);
    const loadingBanner = ref(false);

    async function getBanners() {
        loadingBanner.value = true;

        nextTick();

        try {
            const { data, error } = await supabase.from('banners').select('*');

            if (!error) banners.value = transformKeysToCamel<Banner[]>(data);
        } catch (error) {
            console.log('Произошла ошибка во время получения данных: ', error);
            return [];
        } finally {
            loadingBanner.value = false;
        }
    }

    return {
        banners,
        loadingBanner,
        getBanners,
    };
});
