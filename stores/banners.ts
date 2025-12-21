import type { Banner } from '~/types/banner';
import { banners } from '~/data/banners';
import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useBannerStore = defineStore('banners', () => {
    const { supabase } = useSupabase();
    const bannersData = ref<Banner[]>([]);
    const loadingBanner = ref(false);

    function setFallbackContents() {
        bannersData.value = banners;
    }

    async function getBanners() {
        loadingBanner.value = true;

        nextTick();

        try {
            const { data, error } = await supabase.from('banners').select<Banner[]>('*');

            if (error) {
                console.error('Supabase error: ', error);
                setFallbackContents();
                return;
            }

            bannersData.value = transformKeysToCamel<Banner[]>(data);
        } catch (error) {
            console.error('Произошла ошибка во время получения данных: ', error);

            setFallbackContents();
        } finally {
            loadingBanner.value = false;
        }
    }

    return {
        bannersData,
        loadingBanner,
        getBanners,
    };
});
