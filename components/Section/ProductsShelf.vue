<script setup lang="ts">
import { useSwiper } from '#imports';
import { ref } from 'vue';

const products = ref([
    
]);
</script>

<template>
    <section class="products-shelf">
        <header class="shelf-header products-shelf__header">
            <div class="shelf-header__wrapper">
                <h2 class="shelf-header__heading">Новинки</h2>
                <nuxt-link
                    to="/"
                    class="shelf-header__see-all"
                >
                    Смотреть ещё
                    <img
                        src="ico/arrow-right.svg"
                        alt="Иконка стрелка направо оранжевого цвета"
                    />
                </nuxt-link>
            </div>
        </header>
        <section class="products-shelf-slider">
            <ClientOnly>
                <swiper-container>
                    <swiper-slide> </swiper-slide>
                </swiper-container>
            </ClientOnly>
        </section>
    </section>
</template>
