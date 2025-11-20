<script setup lang='ts'>
interface Props {
    variant?: 'primary' | 'secondary';
    text?: string;
    src?: string;
    alt?: string;
    color: 'default' | 'active' | 'unactive' | 'red';
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
        :class='{"ui-button--icon": src, "ui-button--default": color === "default", "ui-button--active": color === "active", "ui-button--unactive": color === "unactive", "ui-button--red": color === "red"}'
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
    // @include LampEffect($b-r: $border-r-md, $bg: $color-active);
    padding: 12px 16px;
    font-weight: 700;
    line-height: $line-height-xl;
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 400;
    font-size: $font-size-md;
    line-height: $line-height-md;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &--icon {
        padding: 12px;
    }

    &--default {
        @include LampEffect($b-r: $border-r-md, $bg: $color-bg-components);
        color: $color-text;
    }

    &--active {
        @include LampEffect($b-r: $border-r-md, $bg: $color-active);
        color: $color-text;
    }

    &--unactive {
        @include LampEffect($b-r: $border-r-md, $bg: $color-unactive);
        color: $color-darkgray;
    }

    &--red {
        @include LampEffect($b-r: $border-r-md, $bg: $color-active-red);
        color: $color-text;
    }

    &__icon-wrapper {
        min-width: 24px;
        min-height: 24px;
        width: 24px;
        height: 24px;
    }

    &__icon {
        width: 100%;
        height: 100%;
    }
}
</style>
