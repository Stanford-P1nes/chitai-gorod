<script setup lang="ts">
import type { Product } from '~/types/product';
import type { Loading } from '~/types/loading';
import { useCartStore } from '~/stores/cart';
import { useFavoritesStore } from '~/stores/favorites';
import { useBadgeStore } from '~/stores/badge';

const cartSore = useCartStore();
const favoritesStore = useFavoritesStore();
const badgeStore = useBadgeStore();

const { toggleItem, isInCart } = cartSore;
const { toggle, isInFavorite } = favoritesStore;
const { showBadge } = badgeStore;

function addToCart(product: Product) {
    toggleItem(product);
    showBadge('cart');
}

function addToFavorites(product: Product) {
    toggle(product);
    showBadge('favorites');
}

defineProps<{
    product: Product;
    loading?: Loading;
}>();
</script>

<template>
    <article class="product-card">
        <UiSkeleton
            v-if="loading"
            width="204px"
            height="343px"
        />
        <div
            v-else
            class="product-card__image-wrapper"
        >
            <img
                :src="product.img"
                :alt="product?.name"
                class="product-card__img"
            />
            <nuxt-link
                :to="`/catalog/${product.category}/${product.subcategory}/${product.id}`"
                class="product-card__link"
            />
        </div>

        <UiSkeleton
            v-if="loading"
            width="204px"
            height="170px"
        />
        <div
            v-else
            class="product-card__content"
        >
            <div class="product-card-price product-card__price">
                <span class="product-card-price__price"> {{ product?.price }} ₽ </span>
                <div class="product-card-price__side">
                    <s class="product-card-price__oldprice"> {{ product?.oldPrice }} ₽ </s>
                    <span class="product-card-price__discount"> {{ product?.discount }} </span>
                </div>
            </div>
            <div class="product-card__caption">
                <p class="product-card__title">{{ product?.name }}</p>
                <p class="product-card__subtitle">{{ product?.author }}</p>
            </div>
            <div class="rating product-card__rating">
                <span
                    v-for="star in product?.rating"
                    :key="star"
                    class="rating__icon"
                ></span>
            </div>
            <div class="product-card__actions">
                <UiButton
                    variant="primary"
                    :text="isInCart(product?.id) ? 'Удалить' : 'Добавить'"
                    :color="isInCart(product?.id) ? 'active' : 'default'"
                    class="product-card__button product-card__button--buy"
                    @click="addToCart(product)"
                />
                <UiButton
                    variant="secondary"
                    :color="isInFavorite(product?.id) ? 'active' : 'default'"
                    src="/ico/like.svg"
                    alt="Избранное"
                    class="product-card__button product-card__button--like"
                    @click="addToFavorites(product)"
                />
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.product-card {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2000;
    grid-gap: $gap-2x;

    &__image-wrapper {
        position: relative;
        border-radius: 4px;
        height: 345px;
        overflow: hidden;

        @include LampEffect($radius: $radius-3x);

        @include media(tablet) {
            height: 280px;
        }
    }

    &__img {
        width: 100%;
        height: 100%;
        user-select: none;
    }

    &__content {
        display: flex;
        flex-direction: column;
        @include LampEffect($radius: $radius-3x);
        padding: $padding-3x;
        gap: $gap-2x;

        @include media(tablet) {
            padding: $padding-2x;
        }
    }

    &__caption {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__title {
        font-weight: 400;
        font-size: clamp($font-size-2x, 1.5vw, $font-size-3x);
        line-height: clamp($line-height-3x, 1.5vw, $line-height-4x);
    }

    &__subtitle {
        font-weight: 400;
        color: $color-darkgray;
        font-size: clamp($font-size-1x, 1.5vw, $font-size-2x);
        line-height: clamp($line-height-1x, 1.5vw, $line-height-2x);
    }

    &__actions {
        display: flex;
        gap: 4px;
    }

    &__button {
        &--buy {
            flex-grow: 1;
            font-weight: 400;
            font-size: $font-size-2x;
            line-height: $line-height-2x;
        }
        &--like {
            aspect-ratio: 1;
            padding: 12px;
        }
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }
}

.product-card-price {
    display: flex;
    align-items: center;
    gap: $gap-2x;

    @include media(tablet) {
        flex-direction: column;
        align-items: flex-start;
    }

    @include media(mobile) {
        flex-direction: row;
        align-items: center;
    }

    @include media(small-mobile) {
        flex-direction: column;
        align-items: flex-start;
    }

    &__price {
        font-weight: 500;
        font-size: clamp($font-size-3x, 1.5vw, $font-size-4x);
        line-height: clamp($line-height-2x, 1.5vw, $line-height-3x);
        text-wrap: nowrap;
    }

    &__side {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__oldprice {
        font-weight: 400;
        font-size: clamp($font-size-1x, 1.5vw, $font-size-2x);
        line-height: clamp($line-height-2x, 1.5vw, $line-height-3x);
        color: $color-red;
        text-wrap: nowrap;
    }

    &__discount {
        padding: 2px 2px;
        font-weight: 700;
        font-size: $font-size-2x;
        line-height: $line-height-2x;
        text-wrap: nowrap;
        @include LampEffect($radius: $radius-1x);
        background: $color-active-red;
    }
}

.rating {
    display: flex;
    gap: $gap-1x;
    &__icon {
        width: 20px;
        height: 20px;
        background-image: url('@/public/ico/star.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
}
</style>
