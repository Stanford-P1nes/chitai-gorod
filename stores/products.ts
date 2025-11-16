import type { Product } from '../types/product';
import { ref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { useFetch } from '#imports';

export const useProductStore = defineStore('products', () => {
    const productsData = ref<Product[]>([]);
    const loading = ref(false);

    async function loadingProducts() {
        loading.value = true;

        await nextTick();

        try {
            console.log('Загрузка продуктов...');

            const { data, error } = await useFetch<Product[]>('/api/products', {
                key: 'products',
                server: false,
            });

            // await new Promise(resolve => setTimeout(resolve, 2000));

            console.log('Необработанный ответ:', { data, error });

            if (error.value) {
                console.error('Ошибка при получении данных:', error.value);
                return;
            }

            if (data.value) {
                productsData.value = data.value;
                console.log('Ответ:', { data: data.value, error });
                console.log('Загруженные продукты:', productsData.value);
            } else {
                console.warn('Никакие данные не получены от API');
            }
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

    return {
        productsData,
        loading,
        loadingProducts,
        getByCategory,
        getByStatus,
    };
});
