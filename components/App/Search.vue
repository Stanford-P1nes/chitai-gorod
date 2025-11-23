<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useProductStore } from '~/stores/products';

const store = useProductStore();

const { searchProduct, loadingProducts } = store;

onMounted(async () => {
    await loadingProducts();
});

const searchString = ref('');

const filteredProducts = computed(() => searchProduct(searchString.value));

function handleSubmit(event: any) {
    event.preventDefault();
}
</script>

<template>
    <div class="app-search">
        <form
            @submit.prevent="handleSubmit"
            class="search-form app-search__form"
        >
            <div class="search-form__input-wrapper">
                <input
                    class="search-form__input"
                    type="text"
                    placeholder="Найти..."
                    autocomplete="off"
                    v-model="searchString"
                />
            </div>
        </form>
        <UiButton
            variant="secondary"
            src="/ico/search.svg"
            alt="Кнопка с иконкой лупы для поиска"
            color="active"
        />
        <div
            v-if="filteredProducts.length"
            class="app-search__drop-product"
        >
            <ClientOnly>
                <swiper-container :space-between="4">
                    <swiper-slide
                        v-for="product in filteredProducts"
                        :key="product.id"
                    >
                        <UiSkeleton
                            width="100px"
                            height="150px"
                        />
                    </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-search {
    flex-grow: 4;
    display: flex;
    @include LampEffect($b-r: $border-r-md, $overflow: visible);

    .search-form {
        width: 100%;
        display: flex;
        align-items: center;

        &__input-wrapper {
            width: 100%;
            padding: 12px 16px;
        }

        &__input {
            width: 100%;
            font-weight: 400;
            font-size: $font-size-md;
        }
    }

    &__drop-product {
        position: absolute;
        max-width: 100%;
        top: 110%;
        left: 0;
        right: 0;
        padding: 4px;
        display: flex;
        gap: $gap-xs;
        @include LampEffect($b-r: $border-r-md, $overflow: auto);
    }
}
</style>
