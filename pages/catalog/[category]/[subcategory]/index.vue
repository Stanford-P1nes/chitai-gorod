<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/stores/products';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = route.params.category as string;
const subcategory = route.params.subcategory as string;

const store = useProductStore();
const { loading } = storeToRefs(store);
const { loadingProducts, getByCategory } = store;

onMounted(async () => await loadingProducts());

const products = computed(() =>
    getByCategory({ category, subcategory })
);
</script>

<template>
    <SectionProductGrid v-if="products.length">
        <AppProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            :loading="loading"
        />
    </SectionProductGrid>
</template>
