import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';
import type { Content } from '~/types/content';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useContentStore = defineStore('contents', () => {
    const { supabase } = useSupabase();
    const contents = ref<Content[]>([]);
    const loadingContent = ref(false);

    async function getContents() {
        loadingContent.value = true;

        nextTick();

        try {
            const { data, error } = await supabase.from('contents').select('*');

            if (!error) contents.value = transformKeysToCamel<Content[]>(data);
        } catch (error) {
            console.log('Произошла ошибка во время получения данных: ', error);
        } finally {
            loadingContent.value = false;
        }
    }

    return {
        contents,
        loadingContent,
        getContents,
    };
});
