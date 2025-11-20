<script setup lang="ts">
import { products } from '~/data/products';
</script>

<template>
    <div class="favorites-content">
        <section class="favorites-content__header">
            <h3 class="favorites-content__title">Избранное</h3>
        </section>
        <section class="favorites-content__main">
            <div class="favorites-content__cards">
                <AppProductCard
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    class='favorites-content__card'
                />
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.favorites-content {
    padding: 0 $padding-lg;
    animation: modal-right 0.4s ease forwards;

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
        height: 524px;
    }

    &__cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: $gap-lg;
    }
}
</style>
