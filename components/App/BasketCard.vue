<script setup lang="ts">
import type { Product } from '~/types/product';
import { useCartStore } from '~/stores/cart';
import { useFavoritesStore } from '~/stores/favorites';

const cartStore = useCartStore();
const favoritesStore = useFavoritesStore();

const { removeItem } = cartStore;
const { toggle, isInFavorite } = favoritesStore;


defineProps<{
    product: Product;
}>();
</script>

<template>
    <article class="basket-card">
        <div class="basket-card__image-wrapper">
            <img
                class="basket-card__image"
                :src="product?.img"
                :alt="product?.alt"
            />
            <nuxt-link
                :to="`/catalog/${product.category}/${product.subcategory}/${product.id}`"
                class="basket-card__link"
            />
        </div>
        <div class="basket-card__content">
            <div class="basket-card__description">
                <p class="basket-card__title">{{ product?.name }}</p>
                <p class="basket-card__subtitle">{{ product?.author }}</p>
            </div>
            <div class="basket-card__info">
                <div class="basket-card__cost">
                    <sup
                        ><s class="basket-card__oldprice">{{ product?.oldPrice }}</s></sup
                    >
                    <div class="basket-card__price">{{ product?.price }}</div>
                </div>
                <div class="basket-card__actions">
                    <UiButton
                        variant="secondary"
                        :color="isInFavorite(product.id) ? 'active' : 'default'"
                        src="/ico/like.svg"
                        alt="Иконка избранное"
                        class="basket-card__button"
                        @click="toggle(product)"
                    />
                    <UiButton
                        variant="secondary"
                        src="/ico/trash.svg"
                        alt="Иконка мусорного бака"
                        class="basket-card__button"
                        @click="removeItem(product?.id)"
                    />
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
.basket-card {
    position: relative;
    width: 100%;
    height: 125px;
    display: flex;
    align-items: flex-start;

    &__image-wrapper {
        position: relative;
        width: 100px;
        height: 100%;
        z-index: 100;
        @include LampEffect($radius: $radius-2x, $overflow: visable);
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    &__image {
        width: 100%;
        height: 100%;
    }

    &__content {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 20px;
        z-index: 1000;
    }

    &__description {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__cost {
        text-align: end;
    }

    &__price {
        font-size: $font-size-4x;
        line-height: $line-height-3x;
    }

    &__oldprice {
        color: $color-red;
        font-size: $font-size-2x;
        line-height: $line-height-3x;
    }

    &__title {
        font-size: $font-size-3x;
        line-height: $line-height-5x;
    }

    &__subtitle {
        font-size: $font-size-2x;
        line-height: $line-height-3x;
        color: $color-darkgray;
    }

    &__info {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__actions {
        display: flex;
        height: 50px;
        margin-top: auto;
        gap: $gap-3x;
    }

    &__button {
        aspect-ratio: 1;
    }
}
</style>
