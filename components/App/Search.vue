<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/stores/products';

const store = useProductStore();
const { loadingProducts } = storeToRefs(store);
const { getBySearch, getProducts } = store;

onMounted(async () => {
    await getProducts();
});

const searchProduct = ref('');

const products = computed(() => getBySearch(searchProduct.value));

function handleSubmit(event: any) {
    event.preventDefault();
}

function clearSearch() {
    searchProduct.value = '';
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
                    v-model="searchProduct"
                />
            </div>
        </form>
        <UiButton
            variant="secondary"
            src="/ico/search.svg"
            alt="Кнопка с иконкой лупы для поиска"
            color="active"
        />
        <div v-if="products.length" class="app-search__cards">
            <AppProductList
                :products="products"
                :loading="loadingProducts"
                @clear="clearSearch"
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-search {
    position: relative;
    z-index: 1000;
    flex-grow: 4;
    display: flex;
    @include LampEffect($radius: $radius-2x, $overflow: visible);

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
            font-size: $font-size-3x;
        }
    }

    &__cards {
        position: fixed;
        top: 110%;
        left: 0;
        right: 0;
        padding: $padding-1x;
        gap: $gap-1x;
        @include LampEffect($radius: $radius-2x);
        overflow-y: hidden;
        overflow-x: auto;
    }
}
</style>
