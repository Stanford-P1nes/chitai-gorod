import type { Banner } from '~/types/banner';
import { banners } from '~/data/banners';
import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useBannerStore = defineStore('banners', () => {
    const { supabase } = useSupabase();
    const bannersData = ref<Banner[]>([]);
    const loadingBanners = ref(false);

    function setFallbackContents() {
        bannersData.value = banners;
    }

    async function getBanners() {
        loadingBanners.value = true;

        nextTick();

        try {
            const { data, error } = await supabase.from('banners').select('*');

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
            loadingBanners.value = false;
        }
    }

    return {
        bannersData,
        loadingBanners,
        getBanners,
    };
});
