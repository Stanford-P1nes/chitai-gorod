<script setup lang="ts">
import type { Product } from '~/types/product';
import type { Loading } from '~/types/loading';

defineProps<{
    product: Product;
    loading?: boolean;
}>();
</script>

<template>
    <article class="product-card-mini">
        <div class="product-card-mini__image-wrapper">
            <img
                class="product-card-mini_image"
                :src="product.img"
                :alt="product.alt"
            />
            <UiButton variant='secondary' src='/ico/like.svg' alt='Иконка сердечка' class='product-card-mini__button-close'/>
        </div>
        <div class="product-card-mini__content">
            <strong class="product-card-mini__title" :title='product.name'> {{ product.name }} </strong>
            <br>
            <sub class="product-card-mini__subtitle" :title='product.author'> {{ product.author }} </sub>
        </div>
    </article>
</template>

<style scoped lang="scss">
.product-card-mini {
    position: relative;
    @include LampEffect($b-r: $radius-2x);
    cursor: pointer;
    z-index: 1000;

    &__button-close {
        position: absolute;
        top: 5px;
        right: 5px;
    }

    &__content {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        padding: $padding-1x;
        @include LampEffect($b-r: $radius-1x);
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
