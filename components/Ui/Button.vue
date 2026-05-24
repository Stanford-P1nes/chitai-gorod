<script setup lang='ts'>
interface Props {
    variant?: 'primary' | 'secondary';
    text?: string;
    src?: string;
    alt?: string;
    color?: 'default' | 'active' | 'unactive' | 'danger';
    disable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    text: '',
    src: '/ico/image-not-found-01.svg',
    alt: 'Изображение',
    color: 'default',
    disable: false,
});
</script>

<template>
    <button
        class="ui-button"
        :class='{"ui-button--icon": src, "ui-button--default": color === "default", "ui-button--active": color === "active", "ui-button--unactive": color === "unactive", "ui-button--danger": color === "danger"}'
        :disable="disable"
    >
        <template v-if="variant === 'secondary'">
            <div class='ui-button__icon-wrapper'>
                <img
                    v-if="src"
                    class="ui-button__icon"
                    :src="src"
                    :alt="alt"
                />
            </div>
            <p v-if='text'>{{ text }}</p>
        </template>
        <template v-else>
            {{ text }}
        </template>
    </button>
</template>

<style lang="scss">
.ui-button {
    padding: 12px 16px;
    font-weight: 700;
    line-height: $line-height-5x;
    display: flex;
    align-items: center;
    justify-content: center;
    height: max-content;
    font-weight: 400;
    font-size: $font-size-3x;
    line-height: $line-height-3x;
    box-shadow: none !important;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &--icon {
        padding: 12px;
    }

    &--default {
        @include LampEffect($radius: $radius-2x, $blur: 0);
    }

    &--active {
        @include LampEffect($radius: $radius-2x, $blur: 0);
        background-color: $color-active-blue;
    }

    &--unactive {
        @include LampEffect($radius: $radius-2x, $blur: 0);
        background-color: $color-unactive;
    }

    &--danger {
        @include LampEffect($radius: $radius-2x, $blur: 0);
        background-color: $color-active-red;
    }

    &__icon-wrapper {
        min-width: 16px;
        min-height: 16px;
        width: 16px;
        height: 16px;
    }

    &__icon {
        width: 100%;
        height: 100%;
    }
}
</style>
