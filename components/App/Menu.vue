<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { menu } from '~/data/menu';

// WINDOW WIDTH
const windowWidth = ref(0);

onMounted(() => {
    windowWidth.value = window.innerWidth;

    const handleResize = () => {
        windowWidth.value = window.innerWidth;
    };

    window.addEventListener('resize', handleResize);

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize);
    });
});

const showElement = computed(() => {
    if (windowWidth.value < 620) return false;
    return true;
});

// DROPDOWN LIST
const showList = ref(false);

onMounted(() => {
    if (windowWidth.value < 620) showList.value = false;
});

function toggleClick(): void {
    showList.value = !showList.value;
}
</script>

<template>
    <menu class="app-menu">
        <ul class="app-menu__list">
            <li
                v-if="showElement"
                v-for="(item, idx) in menu"
                :key="idx"
                class="app-menu__link"
            >
                <nuxt-link
                    :to="item.link"
                    :title="item.name"
                    >{{ item.name }}</nuxt-link
                >
            </li>
            <li
                v-else
                class="app-menu__link"
                @click="toggleClick"
            >
                Ещё
                <ul v-if="showList" class="app-menu__list--dropdown">
                    <li
                        v-for="(item, idx) in menu"
                        :key="idx"
                        class="app-menu__item"
                    >
                        <nuxt-link
                            :to="item.link"
                            :title="item.name"
                            >{{ item.name }}</nuxt-link
                        >
                    </li>
                </ul>
            </li>
        </ul>
    </menu>
</template>

<style scoped lang="scss">
.app-menu {
    position: relative;
    display: flex;
    justify-content: center;

    &__list {
        display: flex;
        align-items: center;
        gap: $gap-lg;

        &--dropdown {
            position: absolute;
            top: 100%;
            right: 0;
            flex-direction: column;
            text-align: right;
            padding: $padding-xxs;
            @include LampEffect($b-r: $border-r-md);
            // animation: dropdown .2s ease forwards;
            z-index: 1000;
            @include animateDropdown;
        }
    }

    &__link {
        font-family: $font-family-title;
        font-weight: 300;
        font-size: $font-size-sm;
        line-height: $line-height-xl;
        text-wrap: nowrap;
        cursor: pointer;
    }
}
</style>
