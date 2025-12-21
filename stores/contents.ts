import type { Content } from '~/types/content';
import { contents } from '~/data/contents';
import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useContentStore = defineStore('contents', () => {
    const { supabase } = useSupabase();
    const contentsData = ref<Content[]>([]);
    const loadingContents = ref(false);

    function setFallbackContents() {
        contentsData.value = contents;
    }

    async function getContents() {
        loadingContents.value = true;

        nextTick();

        try {
            const { data, error } = await supabase.from('contents').select('*');

            if (error) {
                console.error('Supabase error: ', error);
                setFallbackContents();
                return;
            }

            contentsData.value = transformKeysToCamel<Content[]>(data);
        } catch (error) {
            console.error('Произошла ошибка во время получения данных: ', error);

            setFallbackContents();
        } finally {
            loadingContents.value = false;
        }
    }

    return {
        contentsData,
        loadingContents,
        getContents,
    };
});
