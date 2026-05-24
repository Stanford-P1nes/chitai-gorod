<script setup lang="ts">
import type { Product } from '~/types/product';

defineProps<{
    products: Product[];
    loading?: boolean;
}>();

const emit = defineEmits<{
    clear: [];
}>();
</script>

<template>
    <div class="product-list">
        <ul class="product-list__list">
            <li
                v-for="product in products"
                :key="product.id"
                class="product-list__item"
            >

                <div class="product-list__content">
                    <strong class="product-list__title" :title="product?.name">
                        {{ product?.name }}
                    </strong>
                    <sub class="product-list__subtitle" :title="product?.author">
                        {{ product?.author }}
                    </sub>
                </div>

                <nuxt-link
                    :to="`/catalog/${product?.category}/${product?.subcategory}/${product?.id}`"
                    class="product-list__link"
                    @click="emit('clear')"
                />
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.product-list {
    width: 100%;
    z-index: 1000;
    max-height: 315px;
    overflow-y: auto;
    
    &__list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: $gap-1x;
    }

    &__item {
        display: flex;
        align-items: center;
        padding: $padding-1x;
        background: $color-white;
        border-radius: $radius-1x;
        position: relative;
        @include LampEffect($radius: $radius-1x);
        
    }

    &__content {
        padding: 0 $padding-1x;
        flex: 1 1 auto;
        min-width: 0;
    }

    &__title {
        font-size: $font-size-3x;
        line-height: $line-height-2x;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__subtitle {
        font-size: $font-size-1x;
        color: $color-darkgray;
    }

    &__link {
        position: absolute;
        inset: 0;
        z-index: 1000;
    }
}
</style>
