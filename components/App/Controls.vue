<script setup lang="ts">
import { ref } from 'vue';
import { controls } from '~/data/controls';

const totalCount = ref<number | null>(null);
function controlClick(n: number): void {
    const step = 100 / controls.length;
    totalCount.value = n * step;
}
</script>

<template>
    <div
        class="controls"
        :style="`--n:${totalCount}%`"
    >
        <nuxt-link
            v-for="control in controls"
            :key="control.id"
            :to="control.link"
            class="controls__button controls__button--hover"
            @click="controlClick(control.id)"
        >
            <div class="controls__icon">
                <img
                    :src="control.icon"
                    :alt="control.alt"
                    class="controls__img"
                />
            </div>
        </nuxt-link>
    </div>
</template>

<style lang="scss">
.controls {
    position: relative;
    height: 48px;
    display: flex;
    width: 244px;
    justify-content: space-between;
    padding: $padding-xxxs;
    gap: $gap-md;
    @include LampEffect($b-r: $border-r-md);

    &::before {
        content: '';
        position: absolute;
        width: 21%;
        height: 38px;
        @include LampEffect($b-r: $border-r-md, $bg: $color-active);
        transition: margin 0.2s ease;
        margin-left: var(--n);
    }

    &__button {
        position: relative;
        height: 100%;
        flex-basis: 55px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;

        &--hover {
            &:hover,
            &:active,
            &:focus {
                .controls__img {
                    transform: scale(0.9);
                }
            }
        }
    }

    &__icon {
        width: 30px;
        height: 30px;
    }

    &__img {
        width: 100%;
        height: 100%;
        transition: transform 0.2s ease;
    }
}
</style>
