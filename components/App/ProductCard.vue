<script setup lang='ts'>
import type { Product } from '~/types/product';

defineProps<{
    product: Product,
    loading: {type: String, default: false}
}>()
</script>

<template>
    <article class="product-card">
        <UiSkeleton v-if='loading' width='204px' height='343px' />
        <div v-else class="product-card__image-wrapper">
            <img
                :src="product.img"
                :alt="product.alt"
                class="product-card__img"
            />
            <nuxt-link :to="product.to" class='product-card__link'></nuxt-link>
        </div>
        <UiSkeleton v-if='loading' width='204px' height='170px' />
        <div v-else class="product-card__content">
            <div class="product-card-price product-card__price">
                <span class="product-card-price__price"> 1 105 ₽ </span>
                <div class="product-card-price__side">
                    <s class="product-card-price__oldprice"> 1299 ₽ </s>
                    <span class="product-card-price__discount"> -15% </span>
                </div>
            </div>
            <div class="product-card__caption">
                <p class="product-card__title">{{ product.name }}</p>
                <p class="product-card__subtitle">{{ product.author }}</p>
            </div>
            <div class="rating product-card__rating">
                <span v-for='star in product.rating' :key='star' class="rating__icon"></span>
            </div>
            <div class="product-card__actions">
                <UiButton
                    variant="primary"
                    text="Купить"
                    class="product-card__button product-card__button--buy"
                />
                <UiButton
                    variant="secondary"
                    src="/ico/bookmark.svg"
                    alt="Белая иконка закладка"
                    class="product-card__button product-card__button--bookmark"
                />
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.product-card {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 2000;
    gap: $gap-sm;

    &__image-wrapper {
        position: relative;
        border-radius: 4px;
        max-height: 345px;
        overflow: hidden;
        @include LampEffect($b-r: $border-r-lg);
    }

    &__img {
        width: 100%;
        height: 100%;
        user-select: none;
    }

    &__content {
        display: flex;
        flex-direction: column;
        @include LampEffect($b-r: $border-r-lg);
        padding: $padding-xs;
        gap: $gap-sm;

        @include media(tablet) {
            padding: $padding-xxs;
        }
    }

    &__caption {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__title {
        font-weight: 400;
        font-size: $font-size-md;
        line-height: $line-height-lg;
    }

    &__subtitle {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-sm;
        color: $color-darkgray;
    }

    &__actions {
        display: flex;
        gap: 4px;
    }

    &__button {
        height: 32px;
        &--buy {
            flex-grow: 1;
            font-weight: 400;
            font-size: $font-size-sm;
            line-height: $line-height-sm;
        }
        &--bookmark {
            width: 32px;
            padding: 8px;
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
    gap: $gap-sm;

    &__price {
        font-weight: 500;
        font-size: $font-size-lg;
        line-height: $line-height-md;
        text-wrap: nowrap;
    }

    &__side {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__oldprice {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-red;
        text-wrap: nowrap;
    }

    &__discount {
        padding: 2px 2px;
        font-weight: 700;
        font-size: $font-size-sm;
        line-height: $line-height-sm;
        text-wrap: nowrap;
        @include LampEffect($b-r: $border-r-sm, $bg: $color-active-red)
    }
}

.rating {
    display: flex;
    gap: $gap-xs;
    &__icon {
        width: 20px;
        height: 20px;
        background-image: url('@/public/ico/star.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
}
</style>
