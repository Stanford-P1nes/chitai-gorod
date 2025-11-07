<script setup lang="ts">
import { controls } from '~/data/controls'
</script>

<template>
    <div class="controls">
        <nuxt-link
            v-for="control in controls"
            :key="control.id"
            :to="control.link"
            class="controls__button controls__button--hover"
        >
            <div class="controls__icon">
                <img
                    :src="control.icon"
                    :alt="control.alt"
                    class="controls__img"
                />
            </div>
            <span class="controls__text">{{ control.name }}</span>
        </nuxt-link>
    </div>
</template>

<style lang="scss">
.controls {
    height: 48px;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;

    &__button {
        height: 100%;
        flex-basis: 55px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        &--hover {
            &:hover {
                .controls__text {
                    color: $color-success;
                }

                .controls__img {
                    animation: controls-img 1s ease forwards;
                }

                @keyframes controls-img {
                    0% {
                        transform: translateY(0px);
                    }
                    40% {
                        transform: translateY(-10px);
                    }
                    100% {
                        transform: translateY(0px);
                    }
                }
            }
        }
    }

    &__icon {
        width: 35px;
        height: 35px;
    }

    &__img {
        width: 100%;
        height: 100%;
        transition: filter 0.2s linear;
    }

    &__text {
        font-family: $font-family-text;
        font-weight: 400;
        font-size: $font-size-xs;
        line-height: $line-height-xs;
        color: $color-black;
        transition: text-shadow 0.2s linear;
    }
}
</style>
