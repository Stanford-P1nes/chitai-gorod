<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useCartStore } from '~/stores/cart';
import { useOrdersStore } from '~/stores/orders';
import { useBadgeStore } from '~/stores/badge';

const cartStore = useCartStore();
const ordersStore = useOrdersStore();
const badgeStore = useBadgeStore();

const { items } = storeToRefs(cartStore);
const { clear } = cartStore;
const { createOrder } = ordersStore;
const { showBadge, clearBadge } = badgeStore;

const buy = () => {
    if (!items.value.length) return;
    createOrder(items.value);
    clear();
    showBadge('orders');
};

onMounted(() => {
    clearBadge('cart');
});
</script>

<template>
    <div class="page">
        <div class="basket-content page__content">
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
                <aside class="basket-content__aside">
                    <UiButton
                        :text="items.length ? 'Купить' : 'Корзина пустая'"
                        :color="items.length ? 'active' : 'default'"
                        class="basket-content__button-buy"
                        @click="buy"
                    />
                </aside>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
.basket-content {
    padding: 0 $padding-6x;
    animation: modal-top 0.4s ease forwards;

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
        display: flex;
        padding-top: 5px;
        padding-bottom: 25px;
    }

    &__cards {
        width: 80%;
        display: flex;
        flex-direction: column;
        gap: $gap-4x;
    }

    &__aside {
        width: 20%;
        position: sticky;
        height: fit-content;
        top: 144px;
    }

    &__button-buy {
        width: 100%;
    }
}
</style>
