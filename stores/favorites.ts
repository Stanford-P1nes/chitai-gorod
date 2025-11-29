import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore(
    'favorites',
    () => {
        const items = ref<any[]>([]);

        function toggle(product: any) {
            const exist = items.value.find(i => i.id === product.id);

            if (exist) {
                items.value = items.value.filter(i => i.id !== product.id);
            } else {
                items.value.push(product);
            }
        }

        function isInFavorite(id: number) {
            return items.value.some(i => i.id === id);
        }

        return { items, toggle, isInFavorite };
    },
    // { persist: true },
);
