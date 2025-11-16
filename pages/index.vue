<script setup lang="ts">
import { useSwiper } from '#imports';
import { onMounted, ref, computed, onUnmounted } from 'vue';
import { contentCards } from '~/data/contentCards';
import { useRoute } from 'vue-router';

const route = useRoute()

// WINDOW WIDTH
const windowWidth = ref(0)

onMounted(() => {
    windowWidth.value = window.innerWidth

    const handleResize = () => {
        windowWidth.value = window.innerWidth
    }

    window.addEventListener('resize', handleResize)

    onUnmounted(() => {
        window.removeEventListener('resize', handleResize)
    })
})

const slidesPerView = computed(() => {
    if (windowWidth.value < 360) return 1.5
    if (windowWidth.value < 480) return 2
    if (windowWidth.value < 620) return 3
    if (windowWidth.value < 768) return 3.5
    if (windowWidth.value < 1024) return 4
    if (windowWidth.value < 1200) return 5
    return 5; 
})

const contentsPerView = computed(() => {
    if (windowWidth.value < 480) return 1
    if (windowWidth.value < 768) return 2
    return 3; 
})

// PINIA
import { storeToRefs } from 'pinia'
import { useProductStore } from '~/stores/products';

const store = useProductStore();

const { productsData, loading } = storeToRefs(store);

const { loadingProducts, getByStatus } = store;

onMounted(async () => {
    await loadingProducts();
});

const getStatusNew = computed(() => getByStatus('new'));
const getStatusExclusive = computed(() => getByStatus('exclusive'));
const getStatusRatings = computed(() => getByStatus('ratings'));

// SWIPER
const productsNewSwiper = ref(null);
const productsExclusiveSwiper = ref(null);
const productsRatingsSwiper = ref(null);
const contentSwiper = ref(null);

const productsNewSwiperInstance = useSwiper(productsNewSwiper, {
    effect: 'creative',
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const productsExclusiveSwiperInstance = useSwiper(productsExclusiveSwiper, {
    effect: 'creative',
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const productsRatingsSwiperInstance = useSwiper(productsRatingsSwiper, {
    effect: 'creative',
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});

const contentSwiperInstance = useSwiper(contentSwiper, {
    effect: 'creative',
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
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
                        ref="productsNewSwiper"
                        :slides-per-view="slidesPerView"
                        :space-between="20"
                    >
                        <swiper-slide
                            v-if="getStatusNew.length"
                            v-for="product in getStatusNew"
                            :key="product.id"
                        >
                            <AppProductCard :product="product" :loading='loading' />
                        </swiper-slide>
                    </swiper-container>
                    <!-- BUTTONS -->
                    <template v-if="getStatusNew.length > slidesPerView">
                        <button
                            class="swiper-basic-button swiper-basic-button--left"
                            @click="productsNewSwiperInstance.prev()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--left"
                            />
                        </button>
                        <button
                            class="swiper-basic-button swiper-basic-button--right"
                            @click="productsNewSwiperInstance.next()"
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
                    <h2 class="shelf-header__heading">Эксклюзив</h2>
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
                        ref="productsExclusiveSwiper"
                        :slides-per-view="slidesPerView"
                        :space-between="20"
                    >
                        <swiper-slide
                            v-if="getStatusExclusive.length"
                            v-for="product in getStatusExclusive"
                            :key="product.id"
                        >
                            <AppProductCard :product="product" :loading='loading' />
                        </swiper-slide>
                    </swiper-container>
                    <!-- BUTTONS -->
                    <template v-if="getStatusExclusive.length > slidesPerView">
                        <button
                            class="swiper-basic-button swiper-basic-button--left"
                            @click="productsExclusiveSwiperInstance.prev()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--left"
                            />
                        </button>
                        <button
                            class="swiper-basic-button swiper-basic-button--right"
                            @click="productsExclusiveSwiperInstance.next()"
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
                    <h2 class="shelf-header__heading">Рейтинги</h2>
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
                        ref="productsRatingsSwiper"
                        :slides-per-view="slidesPerView"
                        :space-between="20"
                    >
                        <swiper-slide
                            v-if="getStatusRatings.length"
                            v-for="product in getStatusRatings"
                            :key="product.id"
                        >
                            <AppProductCard :product="product" :loading='loading' />
                        </swiper-slide>
                    </swiper-container>
                    <!-- BUTTONS -->
                    <template v-if="getStatusRatings.length > slidesPerView">
                        <button
                            class="swiper-basic-button swiper-basic-button--left"
                            @click="productsRatingsSwiperInstance.prev()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--left"
                            />
                        </button>
                        <button
                            class="swiper-basic-button swiper-basic-button--right"
                            @click="productsRatingsSwiperInstance.next()"
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
                        :slides-per-view="contentsPerView"
                        :space-between="20"
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
                    <template v-if="contentCards.length > contentsPerView">
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
    @include media(laptop) {
        padding: $padding-md;
    }

    @include media(tablet) {
        padding: $padding-sm;
    }

    @include media(mobile) {
        padding: $padding-xs;
    }

    &__products-shelf {
        width: 100%;
    }
}

.products-shelf {
    &__header {
        margin-bottom: 40px;
        border-bottom: 1px solid #595959;
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
        text-wrap: nowrap;
        
        @include media(tablet) {
            font-size: $font-size-xxl;
        }
    }

    &__see-all {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-orange;
        display: flex;
        align-items: center;
        gap: $gap-md;
        text-wrap: nowrap;
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
