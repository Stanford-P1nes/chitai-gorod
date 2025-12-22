<script setup>
const colorMode = useColorMode();

const toggleTheme = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
};
</script>

<template>
    <button
        class="theme-switch"
        @click="toggleTheme"
    >
        <div
            class="theme-switch__item theme-switch__item--light"
            :class="{ 'theme-switch__item--light-active': colorMode.value === 'light' }"
        >
            <img
                src="/ico/dark-mode.svg"
                alt="Луна"
                class="theme-switch__icon"
            />
        </div>
        <div
            class="theme-switch__item theme-switch__item--dark"
            :class="{ 'theme-switch__item--dark-active': colorMode.value === 'dark' }"
        >
            <img
                src="/ico/light-mode.svg"
                alt="Лампочка"
                class="theme-switch__icon"
            />
        </div>
    </button>
</template>

<style scoped lang="scss">
.theme-switch {
    position: relative;
    max-width: 30px;
    min-width: 30px;
    aspect-ratio: 1;
    @include LampEffect($radius: $radius-3x);
    border-radius: $radius-3x;

    &__item {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.4s ease;

        &--light {
            top: 0;
            transform: translateY(100%);
        }

        &--light-active {
            top: 0;
            transform: translateY(0);
        }

        &--dark {
            top: 0;
            transform: translateY(100%);
        }

        &--dark-active {
            top: 0;
            transform: translateY(0);
        }
    }

    &__icon {
        width: 20px;
        height: 20px;
    }
}
</style>
