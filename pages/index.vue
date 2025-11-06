<script setup lang="ts">
import { useSwiper } from '#imports';
import { ref } from 'vue';

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
                <AppProductCard />
                <AppProductCard />
                <AppProductCard />
                <AppProductCard />
                <AppProductCard />
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
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: $gap-xxl;
}
</style>
