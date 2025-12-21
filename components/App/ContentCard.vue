<script setup lang="ts">
import type { Content } from '~/types/content';
import type { Loading } from '~/types/loading';

defineProps<{
    content: Content;
    loading: Loading;
}>();
</script>

<template>
    <article class="content-card">
        <UiSkeleton
            v-if="loading"
            width="100%"
            height="300px"
        />
        <div
            v-else
            class="content-card__image-wrapper"
        >
            <img
                :src="content.img"
                :alt="content.title"
                class="content-card__image"
            />
        </div>
        <UiSkeleton
            v-if="loading"
            width="100%"
            height="100px"
        />
        <div class="content-card__content">
            <p class="content-card__title">{{ content.title }}</p>
            <nuxt-link
                :to="content.to"
                class="content-card__subtitle content-card__subtitle--absolute"
                >{{ content.subtitle }}</nuxt-link
            >
        </div>
    </article>
</template>

<style lang="scss" scoped>
.content-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: $gap-2x;

    &__image-wrapper {
        width: 100%;
        height: 345px;
        border-radius: 4px;
        overflow: hidden;
    }

    &__image {
        width: 100%;
        height: 100%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: $gap-2x;
    }

    &__title {
        font-weight: 400;
        font-size: $font-size-6x;
        line-height: $line-height-6x;
    }

    &__subtitle {
        font-weight: 400;
        font-size: $font-size-3x;
        line-height: $line-height-5x;
        color: $color-darkgray;

        &--absolute::after {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
        }
    }
}
</style>
