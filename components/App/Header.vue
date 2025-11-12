<script setup>
import { ref } from 'vue';
import { useSidebar } from '~/composables/useSidebar';

const { toggleSidebar } = useSidebar();

const isDark = ref(false);

function toggleTheme() {
    isDark.value = !isDark.value;
}
</script>

<template>
    <header class="app-header">
        <div class="container">
            <div class="app-header__inner">
                <div class="app-header__top">
                    <AppTopHeader />
                </div>
                <div class="app-header__bottom">
                    <div class="app-header__row">
                        <AppLogo />
                        <UiButton
                            variant="secondary"
                            src="/ico/books-catalog.svg"
                            alt="Иконка книг"
                            text="Каталог"
                            @click="toggleSidebar"
                        />
                        <AppSearch />
                        <AppControls />
                    </div>
                    <!-- <div class="app-header__row">
                        <UiButton
                            variant="secondary"
                            src="/ico/books-catalog.svg"
                            alt="Иконка книг"
                            text="Каталог"
                        />
                        <AppControls />
                    </div> -->
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
.app-header {
    position: sticky;
    top: 0;
    z-index: 2000;

    &__inner {
        @include LampEffect;
        border-top: none;
        border-radius: 0 0 24px 24px;
    }

    &__top {
        padding: 8px 32px;
    }
    &__bottom {
        padding: 8px 32px 20px;
    }

    &__row {
        width: 100%;
        display: flex;
        align-items: center;
        gap: $gap-sm;
    }
}
</style>
