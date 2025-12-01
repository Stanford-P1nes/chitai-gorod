<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useSidebar } from '~/composables/useSidebar';

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
    if (windowWidth.value < 768) return false;
    return true;
});

// SIDEBAR SHOW / CLOSE
const { toggleSidebar } = useSidebar();
</script>

<template>
    <header class="app-header">
        <div class="container">
            <div class="app-header__inner">
                <div class="app-header__top">
                    <AppTopHeader />
                    <UiThemeSwitch />
                </div>
                <div class="app-header__bottom">
                    <div class="app-header__row">
                        <AppLogo />
                        <UiButton
                            v-if="showElement"
                            variant="secondary"
                            src="/ico/books-catalog.svg"
                            alt="Иконка книг"
                            text="Каталог"
                            color="active"
                            @click="toggleSidebar"
                        />
                        <AppSearch />
                        <AppControls v-if="showElement" />
                    </div>
                    <div class="app-header__row app-header__row--media">
                        <UiButton
                            variant="secondary"
                            src="/ico/books-catalog.svg"
                            alt="Иконка книг"
                            text="Каталог"
                            color="active"
                            @click="toggleSidebar"
                        />
                        <AppControls />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.app-header {
    position: sticky;
    top: 0;
    z-index: 9000;

    &__inner {
        position: relative;
        @include LampEffect($overflow: visible);
        border-top: none;
        border-radius: 0 0 24px 24px;
    }

    &__top {
        display: flex;
        align-items: center;
        gap: $gap-4x;
        padding: $padding-2x $padding-5x;
        @include media(laptop) {
            padding: $padding-2x $padding-4x;
        }
    }
    &__bottom {
        display: flex;
        flex-direction: column;
        gap: $gap-3x;
        padding: $padding-2x $padding-5x 20px;
        @include media(laptop) {
            padding: $padding-2x $padding-4x 20px;
        }
    }

    &__row {
        width: 100%;
        display: flex;
        align-items: center;
        gap: $gap-2x;

        &--media {
            display: none;

            @include media(tablet) {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>
