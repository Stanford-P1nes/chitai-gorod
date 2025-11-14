<script setup lang="ts">
import type { ContentCard } from '~/types/contentCard';

defineProps<{
    contentCard: ContentCard;
}>();
</script>

<template>
    <article class="content-card">
        <div class='content-card__image-wrapper'>
            <img
                :src="contentCard.img"
                :alt="contentCard.alt"
                class="content-card__image"
            />
        </div>
        <div class='content-card__content'>
            <p class="content-card__title">{{ contentCard.title }}</p>
            <nuxt-link
                :to="contentCard.link"
                class="content-card__subtitle content-card__subtitle--absolute"
                >{{ contentCard.subtitle }}</nuxt-link
            >
        </div>
    </article>
</template>

<style lang="scss" scoped>
.content-card {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: $gap-sm;

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
        gap: $gap-sm;
    }

    &__title {
        font-weight: 400;
        font-size: $font-size-xxl;
        line-height: $line-height-xxl;
    }

    &__subtitle {
        font-weight: 400;
        font-size: $font-size-md;
        line-height: $line-height-xl;
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
