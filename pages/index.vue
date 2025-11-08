<script setup lang="ts">
import { useSwiper } from '#imports';
import { ref } from 'vue';
import { products } from '~/data/products';
import { contentCards } from '~/data/contentCards';

// SWIPER
const productsSwiper = ref(null);
const contentSwiper = ref(null);

const productsSwiperInstance = useSwiper(productsSwiper, {
    effect: 'creative',
    loop: false,
    autoplay: {
        delay: 10000,
    },
});

const contentSwiperInstance = useSwiper(contentSwiper, {
    effect: 'creative',
    loop: false,
    autoplay: {
        delay: 10000,
    },
});
</script>

<template>
    <div class="page">
        <!-- Главный банер -->
        <SectionMainBanner />
        <!-- Карточки продуктов -->
        <section class="products-shelf page__products-shelf">
            <header class="shelf-header products-shelf__header">
                <div class="shelf-header__wrapper">
                    <h2 class="shelf-header__heading">Новинки</h2>
                    <nuxt-link
                        to="/"
                        class="shelf-header__see-all"
                    >
                        Смотреть ещё
                        <img
                            src="/ico/arrow-right.svg"
                            alt="Иконка стрелка направо оранжевого цвета"
                            class="shelf-header__see-all-img"
                        />
                    </nuxt-link>
                </div>
            </header>
            <section class="products-cards products-shelf__products-cards">
                <ClientOnly>
                    <swiper-container
                        ref="productsSwiper"
                        :slides-per-view="5"
                        :space-between="50"
                    >
                        <swiper-slide
                            v-if="products.length"
                            v-for="product in products"
                            :key="product.id"
                        >
                            <AppProductCard :product="product" />
                        </swiper-slide>
                    </swiper-container>
                    <!-- BUTTONS -->
                    <template v-if='products.length > 5'>
                        <button
                            class="swiper-basic-button swiper-basic-button--left"
                            @click="productsSwiperInstance.prev()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--left"
                            />
                        </button>
                        <button
                            class="swiper-basic-button swiper-basic-button--right"
                            @click="productsSwiperInstance.next()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--right"
                            />
                        </button>
                    </template>
                </ClientOnly>
            </section>
        </section>
        <section class="products-shelf page__products-shelf">
            <header class="shelf-header products-shelf__header">
                <div class="shelf-header__wrapper">
                    <h2 class="shelf-header__heading">Популярные авторы</h2>
                    <nuxt-link
                        to="/"
                        class="shelf-header__see-all"
                    >
                        Смотреть ещё
                        <img
                            src="/ico/arrow-right.svg"
                            alt="Иконка стрелка направо оранжевого цвета"
                            class="shelf-header__see-all-img"
                        />
                    </nuxt-link>
                </div>
            </header>
            <section class="products-cards products-shelf__products-cards">
                <ClientOnly>
                    <swiper-container
                        ref="contentSwiper"
                        :slides-per-view="3"
                        :space-between="50"
                    >
                        <swiper-slide
                            v-if="contentCards.length"
                            v-for="contentCard in contentCards"
                            :key="contentCard.id"
                        >
                            <AppContentCard :contentCard="contentCard" />
                        </swiper-slide>
                    </swiper-container>
                    <!-- BUTTONS -->
                    <template v-if='contentCards.length > 3'>
                        <button
                            class="swiper-basic-button swiper-basic-button--left"
                            @click="contentSwiperInstance.prev()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--left"
                            />
                        </button>
                        <button
                            class="swiper-basic-button swiper-basic-button--right"
                            @click="contentSwiperInstance.next()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--right"
                            />
                        </button>
                    </template>
                </ClientOnly>
            </section>
        </section>
    </div>
</template>

<style lang="scss">
.page {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: $gap-page;
    border-radius: $border-r-xl;
    background-color: $color-white;
    padding: $padding-wrap;

    &__products-shelf {
        width: 100%;
    }
}

.products-shelf {
    &__header {
        margin-bottom: 40px;
    }
}

.shelf-header {
    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__heading {
        font-family: $font-family-title;
        font-weight: 500;
        font-size: $font-size-xxxl;
        line-height: $line-height-xxxxl;
        color: $color-black;
    }

    &__see-all {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-orange;
        display: flex;
        align-items: center;
        gap: $gap-md;
    }

    &__see-all-img {
        width: 24px;
        height: 24px;
    }
}

.products-cards {
    position: relative;
    overflow: hidden;
}
</style>
