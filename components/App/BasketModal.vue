<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '~/stores/cart';
import { useOrdersStore } from '~/stores/orders';
import { useBadgeStore } from '~/stores/badge';

const cartStore = useCartStore();
const ordersStore = useOrdersStore();
const badgeStore = useBadgeStore()

const { items } = storeToRefs(cartStore);
const { clear } = cartStore;
const { createOrder } = ordersStore;
const { showBadge, clearBadge } = badgeStore
 
const buy = () => {
    if (!items.value.length) return;
    createOrder(items.value);
    clear();
    showBadge('orders')
};

onMounted(() => {
    clearBadge('cart')
})
</script>

<template>
    <div class="basket-content">
        <section class="basket-content__header">
            <h3 class="basket-content__title">Корзина</h3>
        </section>
        <section class="basket-content__main">
            <div class="basket-content__cards">
                <AppBasketCard
                    v-for="item in items"
                    :key="item?.id"
                    :product="item"
                />
            </div>
        </section>
        <footer class="basket-content__footer">
            <UiButton
                :text="items.length ? 'Купить' : 'Корзина пустая'"
                :color="items.length ? 'active' : 'default'"
                class="basket-content__button-buy"
                @click="buy"
            />
        </footer>
    </div>
</template>

<style scoped lang="scss">
.basket-content {
    padding: 0 $padding-6x;
    animation: modal-right 0.4s ease forwards;

    &__header {
        padding: 36px 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__title {
        font-weight: 500;
        font-size: $font-size-6x;
        line-height: $line-height-7x;
    }

    &__main {
        padding-top: 5px;
        padding-bottom: 25px;
        overflow-y: auto;
        min-height: 100px;
        max-height: 350px;
    }

    &__cards {
        display: flex;
        flex-direction: column;
        gap: $gap-4x;
    }

    &__footer {
        padding: 10px 0;
    }

    &__button-buy {
        width: 100%;
    }
}
</style>
