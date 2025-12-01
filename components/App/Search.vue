<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/stores/products';

const store = useProductStore();
const { loading } = storeToRefs(store);
const { getBySearch, loadingProducts } = store;

onMounted(async () => {
    await loadingProducts();
});

const searchProduct = ref('');

const products = computed(() => getBySearch(searchProduct.value));

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
        <div
            v-if="products.length"
            class="app-search__cards"
        >
            <AppProductCardMini 
                v-for="product in products" 
                :key="product.id"
                :product='product' 
                :loading='loading'
            />
        </div>
    </div>
</template>

<style scoped lang="scss">
.app-search {
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
        position: absolute;
        width: 100%;
        top: 110%;
        left: 0;
        right: 0;
        padding: $padding-1x;
        display: flex;
        gap: $gap-1x;
        @include LampEffect($radius: $radius-2x, $overflow: auto);
        overflow-y: hidden;
        overflow-x: auto;
    }
}
</style>
