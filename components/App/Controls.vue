<script setup lang="ts">
import { ref } from 'vue';
import type { Control } from '~/types/control';
import { controls } from '~/data/controls';
import { useModal } from '~/composables/useModal';

const { isModalOpen, openModal, closeModal } = useModal();

const totalCount = ref<number | null>(null);
function controlClick(idx: Control['id'], name: Control['name']): void {
    const step = 100 / controls.length;
    totalCount.value = idx * step;
    openModal(name);
}
</script>

<template>
    <div
        class="controls"
        :class="{ 'controls--unactive': !isModalOpen, 'controls--active': isModalOpen }"
        :style="`--n:${totalCount}%`"
    >
        <button
            v-for="control in controls"
            :key="control.id"
            class="controls__button controls__button--hover"
            @click="controlClick(control.id, control.name)"
        >
            <div class="controls__icon">
                <img
                    :src="control.icon"
                    :alt="control.alt"
                    class="controls__img"
                />
            </div>
        </button>
    </div>
</template>

<style lang="scss">
.controls {
    position: relative;
    height: 48px;
    display: flex;
    width: 244px;
    justify-content: space-between;
    padding: $padding-1x;
    gap: $gap-3x;
    @include LampEffect($b-r: $radius-2x);

    &::before {
        content: '';
        position: absolute;
        width: 21%;
        height: 38px;
        transition: margin 0.2s ease;
        margin-left: var(--n);
    }

    &--unactive::before {
        @include LampEffect($b-r: $radius-2x, $bg: transparent);
    }

    &--active::before {
        @include LampEffect($b-r: $radius-2x, $bg: $color-active-blue);
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
