<script setup lang="ts">
import { useSwiper } from '#imports';
import { ref } from 'vue';

const products = ref([
    {
        id: 0,
        img: '@/assets/images/covers/Фото-Гарри-Поттера.webp',
        alt: 'Обложка фильма "Гарри Поттер"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Гарри Поттер',
        author: 'Джоа́н Ро́улинг',
        rating: 5,
    },
    {
        id: 1,
        img: '@/assets/images/covers/Сто-лет-одиночества.webp',
        alt: 'Обложка фильма "Сто лет одиночества"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Сто лет одиночества',
        author: 'Габриэля Гарсиа Маркеса',
        rating: 5,
    },
    {
        id: 2,
        img: '@/assets/images/covers/Пусть-идет-снег.webp',
        alt: 'Обложка книги "Пусть идет снег"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Пусть идет снег',
        author: 'Морин Джонсон',
        rating: 5,
    },
    {
        id: 3,
        img: '@/assets/images/covers/Преступление-и-наказание.webp',
        alt: 'Обложка книги "Преступление и наказание"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Преступление и наказание',
        author: 'Фёдора Достоевского',
        rating: 5,
    },
    {
        id: 4,
        img: '@/assets/images/covers/Постер-Буратино.webp',
        alt: 'Обложка фильма "Постер Буратино"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Постер Буратино',
        author: 'Алексея Толстого',
        rating: 5,
    },
    {
        id: 5,
        img: '@/assets/images/covers/Первопоселенцы-Дикого-Поля.webp',
        alt: 'Обложка книги "Первопоселенцы Дикого Поля"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Первопоселенцы Дикого Поля',
        author: 'Погорелов С. А.',
        rating: 5,
    },
    {
        id: 6,
        img: '@/assets/images/covers/Мастер-и-Маргарита.webp',
        alt: 'Обложка книги "Мастер и Маргарита"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Мастер и Маргарита',
        author: 'Михаила Булгакова',
        rating: 5,
    },
    {
        id: 7,
        img: '@/assets/images/covers/Идиот.webp',
        alt: 'Обложка фильма "Идиот"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Идиот',
        author: 'Фёдора Достоевского',
        rating: 5,
    },
    {
        id: 8,
        img: '@/assets/images/covers/Война-и-мир.webp',
        alt: 'Обложка книги "Война и мир"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Война и мир',
        author: 'Льва Толстого',
        rating: 5,
    },
    {
        id: 9,
        img: '@/assets/images/covers/Властелин-колец.webp',
        alt: 'Обложка фильма "Властелин колец"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Властелин колец',
        author: 'Дж.Р.Р.',
        rating: 5,
    },
    {
        id: 10,
        img: '@/assets/images/covers/В-поисках-Аляски.webp',
        alt: 'Обложка фильма "В поисках Аляски"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'В поисках Аляски',
        author: 'Джон Грин',
        rating: 5,
    },
    {
        id: 11,
        img: '@/assets/images/covers/Богатый-Папа-бедный-Папа.webp',
        alt: 'Обложка книги "Богатый Папа, бедный Папа"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Богатый Папа, бедный Папа',
        author: 'Роберт Кийосаки Шэрон Лехтер',
        rating: 5,
    },
    {
        id: 12,
        img: '@/assets/images/covers/Алхимик.webp',
        alt: 'Обложка книги "Алхимик"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: 'Алхимик',
        author: 'Пауло Коэльо',
        rating: 5,
    },
    {
        id: 13,
        img: '@/assets/images/covers/1984.webp',
        alt: 'Обложка книги "1984"',
        price: 1105,
        oldPrice: 1299,
        currency: '₽',
        discount: '-15%',
        name: '1984',
        author: 'Джорджа Оруэлла',
        rating: 5,
    },
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
