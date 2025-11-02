<script setup lang='ts'>
interface Props {
    variant?: 'primary' | 'secondary';
    text?: string;
    src?: string;
    alt?: string;
    disable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    text: '',
    src: '@/assets/images/ico/image-not-found-01.svg',
    alt: 'Изображение',
    disable: false,
});

// const props = defineProps({
//     variant: {
//         type: String,
//         default: 'primary',
//         validator: value => ['primary', 'secondary'].includes(value),
//     },
//     text: {
//         type: String,
//         default: '',
//     },
//     src: {
//         type: String,
//         default: '@/assets/images/ico/image-not-found-01.svg',
//     },
//     alt: {
//         type: String,
//         default: 'Изображение',
//     },
//     disable: {
//         type: Boolean,
//         default: false,
//     },
// });
</script>

<template>
    <button
        class="ui-button"
        :disable="disable"
    >
        <template v-if="variant === 'secondary'">
            <img
                v-if="src"
                class="ui-button__icon"
                :src="src"
                :alt="alt"
            />
        </template>
        <template v-else>
            {{ text }}
        </template>
    </button>
</template>

<style lang="scss">
.ui-button {
    border-radius: 8px;
    padding: 12px;
    background-color: $color-orange;
    color: $color-white;
    font-weight: 700;
    line-height: $line-height-xl;
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &__icon {
        width: 24px;
        height: 24px;
    }
}
</style>
