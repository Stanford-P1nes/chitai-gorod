<script setup>
import { ref } from 'vue';

const isDark = ref(false);

function toggleTheme() {
    isDark.value = !isDark.value;
}
</script>

<template>
    <header class="app-header">
        <div class="app-header__wrapper container">
            <div class="app-header__row">
                <AppLogo />
                <div class='app-header__catalog'>
                    <UiButton variant='secondary' src='/ico/books.svg' alt='Иконка книг' text='Каталог' />
                    <AppSearch />
                    <AppControls />
                </div>
            </div>
        </div>
    </header>
</template>

<style lang='scss'>

.app-header {
    position: sticky;
    top: 0;
    z-index: 30;

    &__wrapper {
        border-radius: 0 0 24px 24px;
        padding: 8px 32px 20px;
        background: $color-white;
        box-shadow: $box-shadow;
    }

    &__row {
        width: 100%;
        display: flex;
        align-items: center;
    }

    &__catalog {
        width: 100%;
        padding: 0px 24px;
        display: flex;
        align-items: center;
        gap: $gap-sm;
    }
}

</style>