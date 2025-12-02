import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useBadgeStore = defineStore('badge', () => {
    const cart = ref(false);
    const favorites = ref(false);
    const orders = ref(false);

    function showBadge(type: 'cart' | 'favorites' | 'orders') {
        const map = { cart, favorites, orders };
        map[type].value = true;
    }

    function clearBadge(type: 'cart' | 'favorites' | 'orders') {
        const map = { cart, favorites, orders };
        map[type].value = false;
    }

    return {
        cart,
        favorites,
        orders,
        showBadge,
        clearBadge,
    };
});
