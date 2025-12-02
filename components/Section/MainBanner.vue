<script setup lang="ts">
import { useSwiper } from '#imports';
import { onMounted, ref } from 'vue';
import { banners } from '~/data/banners';
import { useBanner } from '~/composables/useBanner';

const { bannerData, loading, fetchError, getBanner } = useBanner();

onMounted(async () => {
    await getBanner();
});

const bannersSwiper = ref(null);
const bannerSwiperInstance = useSwiper(bannersSwiper, {
    effect: 'creative',
    loop: true,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
});
</script>

<template>
    <section class="common-main-banners">
        <div class="common-main-banners__slider-wrapper">
            <ClientOnly>
                <swiper-container
                    ref="bannersSwiper"
                    class="main-banners common-main-banners__main-banner"
                    style="--swiper-theme-color: #2e2e2e"
                >
                    <UiSkeleton
                        v-if="loading"
                        width="745px"
                        height="400px"
                    />
                    <swiper-slide
                        v-else
                        v-for="banner in bannerData"
                        :key="banner.id"
                        class="main-banners__slide"
                        :title="banner.title"
                    >
                        <img
                            class="main-banners__img"
                            :src="banner.img"
                            :alt="banner.alt"
                        />
                    </swiper-slide>
                </swiper-container>
                <template v-if="bannerData.length > 1">
                    <button
                        class="swiper-basic-button swiper-basic-button--left"
                        @click="bannerSwiperInstance.prev()"
                    >
                        <img
                            src="/ico/arrow.svg"
                            alt="Стрелка направо"
                            class="swiper-basic-button__img swiper-basic-button__img--left"
                        />
                    </button>
                    <button
                        class="swiper-basic-button swiper-basic-button--right"
                        @click="bannerSwiperInstance.next()"
                    >
                        <img
                            src="/ico/arrow.svg"
                            alt="Стрелка направо"
                            class="swiper-basic-button__img swiper-basic-button__img--right"
                        />
                    </button>
                </template>
            </ClientOnly>
        </div>
        <div class="main-mini-banners common-main-banners__main-mini-banners">
            <div class="main-mini-banners__banner">
                <div class="main-mini-banners__banner-wrapper">
                    <div class="main-mini-banners__banner-information">
                        <p class="main-mini-banners__title">Встречайте Spooky Season</p>
                        <p class="main-mini-banners__subtitle">
                            8 книг о тыквах, страшилках и готике
                        </p>
                    </div>
                    <div class="main-mini-banners__banner-image">
                        <img
                            src="/ico/books.svg"
                            alt="Оранжевая иконка книг"
                            class="main-mini-banners__img"
                        />
                    </div>
                </div>
            </div>
            <div class="main-mini-banners__banner">
                <div class="main-mini-banners__banner-wrapper">
                    <div class="main-mini-banners__banner-information">
                        <p class="main-mini-banners__title">Настольный клуб</p>
                        <p class="main-mini-banners__subtitle">От «Имаджинариума» до «Мафии»</p>
                    </div>
                    <div class="main-mini-banners__banner-image">
                        <img
                            src="/ico/dice.svg"
                            alt="Оранжевая иконка книг"
                            class="main-mini-banners__img"
                        />
                    </div>
                </div>
            </div>
            <div class="main-mini-banners__banner">
                <div class="main-mini-banners__banner-wrapper">
                    <div class="main-mini-banners__banner-information">
                        <p class="main-mini-banners__title">Эксклюзивно в «Читай-городе»</p>
                        <p class="main-mini-banners__subtitle">Невозможно пропустить!</p>
                    </div>
                    <div class="main-mini-banners__banner-image">
                        <img
                            src="/ico/octahedron.svg"
                            alt="Оранжевая иконка книг"
                            class="main-mini-banners__img"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.common-main-banners {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: $gap-6x;
    flex-direction: column;

    &__slider-wrapper {
        position: relative;
        display: flex;
        justify-content: center;
    }
}

.main-banners {
    height: 400px;
    width: 100%;
    @include LampEffect($radius: $radius-3x);

    &__img {
        height: 100%;
        user-select: none;
    }
}

.main-mini-banners {
    display: flex;
    gap: $gap-5x;
    @include media(tablet) {
        display: none;
    }

    &__banner {
        width: 100%;
        padding: $padding-4x;
        @include LampEffect($radius: $radius-3x);
    }

    &__banner-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: $gap-3x;
    }

    &__title {
        font-weight: 400;
        font-size: $line-height-2x;
        line-height: $line-height-6x;
    }

    &__subtitle {
        font-weight: 400;
        font-size: $font-size-1x;
        line-height: $line-height-4x;
        color: $color-darkgray;
    }

    &__banner-image {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: $padding-1x;
        min-width: 53px;
        min-height: 53px;
        @include LampEffect($radius: $radius-2x);
        @include media(laptop) {
            display: none;
        }
    }

    &__img {
        width: 43px;
        height: 43px;
    }
}
</style>
