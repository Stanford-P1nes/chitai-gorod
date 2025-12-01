<script setup lang="ts">
import type { Product } from '~/types/product';
import type { Loading } from '~/types/loading';
import { useFavoritesStore } from '~/stores/favorites';
const favoritesStore = useFavoritesStore();

const { toggle, isInFavorite } = favoritesStore;

defineProps<{
    product: Product;
    loading?: Loading;
}>();
</script>

<template>
    <article class="product-card-mini">
        <UiSkeleton
            v-if="loading"
            width="100%"
            height="100%"
        />
        <div class="product-card-mini__image-wrapper">
            <img
                class="product-card-mini_image"
                :src="product?.img"
                :alt="product?.alt"
            />
            <UiButton
                variant="secondary"
                :color="isInFavorite(product?.id) ? 'active' : 'default'"
                src="/ico/like.svg"
                alt="Иконка сердечка"
                class="product-card-mini__button-close"
                @click="toggle(product)"
            />
            <nuxt-link
                :to="`/catalog/${product?.category}/${product?.subcategory}/${product?.id}`"
                class="product-card__link"
            />
        </div>
        <div class="product-card-mini__content">
            <strong
                class="product-card-mini__title"
                :title="product?.name"
            >
                {{ product?.name }}
            </strong>
            <br />
            <sub
                class="product-card-mini__subtitle"
                :title="product?.author"
            >
                {{ product?.author }}
            </sub>
        </div>
    </article>
</template>

<style scoped lang="scss">
.product-card-mini {
    position: relative;
    min-width: 114px;
    min-height: 194px;
    max-width: 114px;
    max-height: 194px;
    @include LampEffect($radius: $radius-2x);
    cursor: pointer;
    z-index: 1000;

    &__image-wrapper {
        width: 100%;
        height: 100%;
    }

    &__image-wrapper {
        width: 100%;
        height: 100%;
    }

    &__button-close {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 1000;
    }

    &__link {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 100;
    }

    &__content {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        padding: $padding-1x;
        @include LampEffect($radius: $radius-1x);
        z-index: 1000;
    }

    &__title {
        font-size: $font-size-3x;
        line-height: $line-height-2x;
    }

    &__subtitle {
        font-size: $font-size-1x;
        line-height: $line-height-1x;
        color: $color-darkgray;
    }
}
</style>
