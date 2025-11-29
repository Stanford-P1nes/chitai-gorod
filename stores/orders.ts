import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useOrdersStore = defineStore(
    'orders',
    () => {
        const orders = ref<any[]>([]);

        function createOrder(cartItems: any[]) {
            const newOrder = {
                id: Date.now(),
                items: cartItems.map(item => ({ ...item })),
                date: new Date().toISOString(),
            };

            orders.value.push(newOrder);
        }

        return { orders, createOrder };
    },
    // { persist: true },
);