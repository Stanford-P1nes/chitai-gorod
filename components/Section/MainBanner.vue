<script setup lang="ts">
import { useSwiper } from '#imports';
import { ref } from 'vue';
import { banners } from '~/data/banners'

const swiperBasicRef = ref(null);
const swiper = useSwiper(swiperBasicRef, {
    effect: 'creative',
    loop: true,
    autoplay: {
        delay: 2000,
    },
});
</script>

<template>
    <section class="common-main-banners">
        <div class="common-main-banners__slider-wrapper">
            <ClientOnly>
                <swiper-container
                    ref="swiperBasicRef"
                    class="main-banners common-main-banners__main-banners"
                    :loop="true"
                    :pagination="{ clickable: true }"
                    style="--swiper-theme-color: #ffffff"
                >
                    <swiper-slide
                        v-for="banner in banners"
                        :key="banner.id"
                        class="main-banners__slide"
                        :title='banner.title'
                    >
                        <img
                            class="main-banners__img"
                            :src="banner.img"
                            :alt="banner.alt"
                        />
                    </swiper-slide>
                </swiper-container>

                <div class="swiper-basic-buttons common-main-banners__swiper-basic-buttons">
                    <button
                        class="swiper-basic-buttons__button"
                        @click="swiper.prev()"
                    >
                        <img
                            src="/ico/arrow.svg"
                            alt="Стрелка направо"
                            class="swiper-basic-buttons__img swiper-basic-buttons__img--left"
                        />
                    </button>
                    <button
                        class="swiper-basic-buttons__button"
                        @click="swiper.next()"
                    >
                        <img
                            src="/ico/arrow.svg"
                            alt="Стрелка направо"
                            class="swiper-basic-buttons__img swiper-basic-buttons__img--right"
                        />
                    </button>
                </div>
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
    max-width: 850px;
    border-radius: $border-r-sm;
    overflow: hidden;

    &__img {
        width: 100%;
        height: 100%;
    }
}

.main-mini-banners {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: $gap-xl;

    &__banner {
        width: 100%;
        flex-grow: 1;
        border: $border-banner;
        border-radius: $border-r-sm;
        padding: 20px;
    }

    &__banner-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: $border-r-xl;
    }

    &__title {
        font-weight: 400;
        font-size: $line-height-sm;
        line-height: $line-height-xxl;
        color: $color-black;
    }

    &__subtitle {
        font-weight: 400;
        font-size: $font-size-xs;
        line-height: $line-height-lg;
        color: $color-darkgray;
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
