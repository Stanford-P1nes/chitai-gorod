<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '~/stores/favorites';
const favoritesStore = useFavoritesStore();
const { items } = storeToRefs(favoritesStore)
</script>

<template>
    <div class="favorites-content">
        <section class="favorites-content__header">
            <h3 class="favorites-content__title">Избранное</h3>
        </section>
        <section class="favorites-content__main">
            <div v-if='items.length' class="favorites-content__cards">
                <AppProductCardMini
                    v-for="item in items"
                    :key="item.id"
                    :product='item'
                />
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.favorites-content {
    padding: 0 $padding-6x;
    animation: modal-right 0.4s ease forwards;

    &__header {
        padding: 36px 0 20px;
    }

    &__title {
        font-weight: 500;
        font-size: $font-size-6x;
        line-height: $line-height-7x;
    }

    &__main {
        padding-top: 5px;
        padding-bottom: 25px;
        overflow: hidden;
        overflow-y: auto;
        min-height: 100px;
        max-height: 350px;
    }

    &__cards {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: $gap-4x;
    }
}
</style>
