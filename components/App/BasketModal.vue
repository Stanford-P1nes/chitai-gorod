<script setup lang='ts'>
import { products } from '~/data/products';
</script>

<template>
    <div class="basket-content">
        <section class="basket-content__header">
            <h3 class="basket-content__title">Корзина</h3>
        </section>
        <section class="basket-content__main">
            <div class='basket-content__swiper'>
                <AppBasketCard />
                <AppBasketCard />
                <AppBasketCard />
                <AppBasketCard />
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.basket-content {
    padding: 0 $padding-lg;

    &__header {
        padding: 36px 0 20px;
    }

    &__title {
        font-weight: 500;
        font-size: $font-size-xxl;
        line-height: $line-height-xxxl;
    }

    &__main {
        padding-top: 5px;
        padding-bottom: 25px;
        overflow-y: auto;
        height: 300px;
    }

    &__swiper {
        display: flex;
        flex-direction: column;
        gap: $gap-lg;
    }
}
</style>