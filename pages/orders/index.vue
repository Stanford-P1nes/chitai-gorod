<script setup>
import { onMounted } from 'vue';
import { useOrdersStore } from '~/stores/orders';
import { storeToRefs } from 'pinia';
import { useBadgeStore } from '~/stores/badge';

const ordersStore = useOrdersStore();
const badgeStore = useBadgeStore();

const { orders } = storeToRefs(ordersStore);
const { clearBadge } = badgeStore;

onMounted(() => {
    clearBadge('orders');
});
</script>

<template>
    <div class="orders-content">
        <section class="orders-content__header">
            <div class="orders-content__top">
                <strong class="orders-content__navigate">Заказы</strong>
                <span class="orders-content__between-element"></span>
                <strong class="orders-content__navigate">Покупки</strong>
            </div>
            <div class="orders-content__bottom">
                <UiButton
                    text="Актуальные"
                    color="active"
                />
                <UiButton
                    text="Завершённые"
                    color="unactive"
                />
            </div>
        </section>
        <section class="orders-content__main">
            <div
                v-if="orders"
                class="orders-content__cards"
            >
                <div
                    v-for="order in orders"
                    :key="order?.id"
                    class="order-block orders-content__order-block"
                >
                    <p class="order-block__title-number">Заказ № {{ order?.id }}</p>
                    <p class="order-block__title-date">
                        Дата: {{ new Date(order?.date).toLocaleString() }}
                    </p>

                    <div class="order-block__order-items">
                        <AppProductCardMini
                            v-for="item in order?.items"
                            :key="item?.id"
                            :product="item"
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.orders-content {
    padding: 0 $padding-3x;
    animation: modal-top 0.4s ease forwards;

    &__header {
        padding: 36px 0 20px;
    }

    &__top {
        display: flex;
        align-items: center;
        gap: $gap-4x;
        margin-bottom: 20px;
    }

    &__bottom {
        display: flex;
        align-items: center;
        gap: $gap-4x;
    }

    &__navigate {
        font-weight: 700;
        font-size: $font-size-6x;
        line-height: $line-height-7x;
        cursor: pointer;
    }

    &__between-element {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: $color-white;
        border-radius: $radius-3x;
    }

    &__main {
        padding-top: 5px;
        padding-bottom: 25px;
    }

    &__cards {
        display: flex;
        flex-direction: column;
        gap: $gap-5x;
    }
}

.order-block {
    &__title-number {
        font-size: $font-size-3x;
        line-height: $line-height-4x;
    }

    &__title-date {
        font-size: $font-size-2x;
        line-height: $line-height-3x;
    }
    &__order-items {
        display: flex;
        gap: $gap-4x;
        margin-top: 16px;
    }
}
</style>
