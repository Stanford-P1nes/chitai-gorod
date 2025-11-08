import { useFetch } from "#imports";
import { computed } from 'vue'
import type { FooterData } from '~/types/footer';
import { footerData as fallback } from '~/data/footer';

export async function useFooter() {
    const { data, error } = await useFetch<FooterData>('/api/footer');
    return computed(() => data.value || fallback);
}