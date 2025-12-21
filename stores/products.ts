import type { Product } from '../types/product';
import { products } from '~/data/products';
import { defineStore } from 'pinia';
import { ref, nextTick } from 'vue';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useProductStore = defineStore('products', () => {
    const { supabase } = useSupabase();
    const productsData = ref<Product[]>([]);
    const loadingProducts = ref(false);

    function setFallbackProducts() {
        productsData.value = products;
    }

    async function getProducts() {
        loadingProducts.value = true;

        await nextTick();

        try {
            const { data, error } = await supabase.from('products').select('*');

            if (error) {
                console.error('Supabase error: ', error);
                setFallbackProducts();
                return;
            }

            productsData.value = transformKeysToCamel<Product[]>(data);
        } catch (error) {
            console.error('Произошла ошибка во время получения данных: ', error);
            
            setFallbackProducts();
        } finally {
            loadingProducts.value = false;
        }
    }

    function getByCategory(params: {
        category?: Product['category'];
        subcategory?: Product['subcategory'];
    }) {
        return productsData.value.filter(el => {
            return (
                (!params.category || el.category === params.category) &&
                (!params.subcategory || el.subcategory === params.subcategory)
            );
        });
    }

    function getByStatus(status: Product['status']) {
        if (!status) return [];
        return productsData.value.filter(el => el.status === status);
    }

    function getBySearch(searchProduct: string): Product[] {
        const q = String(searchProduct).trim().toLowerCase();
        if (!q) return [];
        return productsData.value.filter(el => (el.name ?? '').toLowerCase().includes(q));
    }

    function getById(id: number) {
        if (id == null || Number.isNaN(id)) return undefined;
        return productsData.value.find(p => p.id === id);
    }

    return {
        products,
        loadingProducts,
        getProducts,
        getByCategory,
        getByStatus,
        getBySearch,
        getById,
    };
});
