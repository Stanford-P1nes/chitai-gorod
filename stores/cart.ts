import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore(
    'cart',
    () => {
        const items = ref<any[]>([]);

        function addItem(product: any) {
            const existed = items.value.find(i => i.id === product.id);
            if (existed) {
                existed.qty++;
            } else {
                items.value.push({ ...product, qty: 1 });
            }
        }

        function removeItem(id: number) {
            items.value = items.value.filter(i => i.id !== id);
        }

        function toggleItem(product: any) {
            const existed = items.value.find(i => i.id === product.id);

            if (existed) {
                removeItem(product.id);
            } else {
                addItem(product);
            }
        }

        function isInCart(id: number) {
            return items.value.some(i => i.id === id);
        }

        function clear() {
            items.value = [];
        }

        return { items, addItem, removeItem, toggleItem, isInCart, clear };
    },
);
