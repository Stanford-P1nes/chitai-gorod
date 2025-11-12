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
                <UiSkeleton
                    v-if="loading"
                    width="745px"
                    height="400px"
                />
                <swiper-container
                    v-else
                    ref="bannersSwiper"
                    class="main-banners common-main-banners__main-banners"
                    style="--swiper-theme-color: #ffffff"
                >
                    <swiper-slide
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
                <button
                    v-if="bannerData"
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
                    v-if="bannerData"
                    class="swiper-basic-button swiper-basic-button--right"
                    @click="bannerSwiperInstance.next()"
                >
                    <img
                        src="/ico/arrow.svg"
                        alt="Стрелка направо"
                        class="swiper-basic-button__img swiper-basic-button__img--right"
                    />
                </button>
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
    display: flex;
    gap: $gap-xxl;

    &__slider-wrapper {
        position: relative;
    }
}

.main-banners {
    height: 400px;
    max-width: 745px;
    @include LampEffect($b-r: $border-r-lg);

    &__img {
        user-select: none;
        width: 100%;
        height: 100%;
    }
}

.main-mini-banners {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: $gap-xl;

    &__banner {
        width: 100%;
        flex-grow: 1;
        padding: 20px;
        @include LampEffect($b-r: $border-r-lg);
    }

    &__banner-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: $gap-sm;
    }

    &__title {
        font-weight: 400;
        font-size: $line-height-sm;
        line-height: $line-height-xxl;
    }

    &__subtitle {
        font-weight: 400;
        font-size: $font-size-xs;
        line-height: $line-height-lg;
    }

    &__banner-image {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: $border-r-md;
        padding: 5px;
        height: 100%;
        overflow: hidden;
        background-color: $color-gray;
    }

    &__img {
        width: 100%;
        height: 100%;
    }
}
</style>
