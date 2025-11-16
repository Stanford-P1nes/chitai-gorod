<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/stores/products';
import { useRoute } from 'vue-router';

const route = useRoute();
const category = route.params.category as string;

const store = useProductStore();
const { loading } = storeToRefs(store);
const { getByCategory, loadingProducts } = store;

const products = computed(() => getByCategory( { category } ));

onMounted(async () => {
  await loadingProducts();
});
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
