<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import { useFavoritesStore } from '~/stores/favorites';
import { useBadgeStore } from '~/stores/badge';

const favoritesStore = useFavoritesStore();
const badgeStore = useBadgeStore();

const { items } = storeToRefs(favoritesStore);
const { clearBadge } = badgeStore;

onMounted(() => {
    clearBadge('favorites');
});
</script>

<template>
    <div class="favorites-content">
        <section class="favorites-content__header">
            <h3 class="favorites-content__title">Избранное</h3>
        </section>
        <section class="favorites-content__main">
            <div
                v-if="items.length"
                class="favorites-content__cards"
            >
                <AppProductCardMini
                    v-for="item in items"
                    :key="item.id"
                    :product="item"
                />
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
.favorites-content {
    padding: 0 $padding-6x;
    animation: modal-top 0.4s ease forwards;

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
    }

    &__cards {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: $gap-4x;
    }
}
</style>
