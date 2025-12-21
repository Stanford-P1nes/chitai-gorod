import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';
import type { Product } from '../types/product';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useProductStore = defineStore('products', () => {
    const { supabase } = useSupabase();
    const products = ref<Product[]>([]);
    const loading = ref(false);

    async function loadingProducts() {
        loading.value = true;

        await nextTick();

        try {
            const { data, error } = await supabase.from('products').select('*');

            if (!error) products.value = transformKeysToCamel<Product[]>(data);
        } catch (error) {
            console.log('Произошла ошибка во время получения данных: ', error);
            return [];
        } finally {
            loading.value = false;
        }
    }

    function getByCategory(params: {
        category?: Product['category'];
        subcategory?: Product['subcategory'];
    }) {
        return products.value.filter(el => {
            return (
                (!params.category || el.category === params.category) &&
                (!params.subcategory || el.subcategory === params.subcategory)
            );
        });
    }

    function getByStatus(status: Product['status']) {
        if (!status) return [];
        return products.value.filter(el => el.status === status);
    }

    function getBySearch(searchProduct: string): Product[] {
        const q = String(searchProduct).trim().toLowerCase();
        if (!q) return [];
        return products.value.filter(el => (el.name ?? '').toLowerCase().includes(q));
    }

    function getById(id: number) {
        if (id == null || Number.isNaN(id)) return undefined;
        return products.value.find(p => p.id === id);
    }

    return {
        products,
        loading,
        loadingProducts,
        getByCategory,
        getByStatus,
        getBySearch,
        getById,
    };
});
