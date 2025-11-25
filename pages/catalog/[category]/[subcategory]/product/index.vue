<script setup lang="ts">
import { products } from '~/data/products';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.product;

// const product = products.find(p => p.id === parseInt(productId))
</script>

<template>
    <div class="page">
        <div class="product-detail-page">
            <div class="product-detail-page__main">
                <section class="product-detail-page__title-wrapper">
                    <h2 class="product-detail-page__title">
                        Дневник Стива. Книга 15. Остров невезения
                    </h2>
                    <sup class="product-age-restrictions">12+</sup>
                </section>
                <section class="product-detail-page__badges">
                    <ul class="product-badges-list">
                        <li>-15%</li>
                    </ul>
                </section>
                <section class="product-detail-page__statistics-share">
                    <div class="product-statistics">
                        <div class="product-statistics__rating">
                            <div class="rating">
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                            </div>
                        </div>
                        <div class="go-to-reviews-button">
                            <UiButton
                                text="10 отзывов"
                                color="active"
                            />
                        </div>
                    </div>
                    <UiButton
                        text="Поделиться с друзьями"
                        color="active"
                    />
                </section>
                <div class="product-detail-page__media">
                    <div class="product-media">
                        <div class="product-media__preview">
                            <img
                                src="/images/posters/1984.webp"
                                alt=""
                            />
                        </div>
                        <ul class="product-media__thumbnails">
                            <li class="product-media__thumbnail-item">
                                <button>
                                    <img
                                        src="/images/posters/1984.webp"
                                        alt=""
                                    />
                                </button>
                            </li>
                            <li class="product-media__thumbnail-item">
                                <button>
                                    <img
                                        src="/images/posters/1984.webp"
                                        alt=""
                                    />
                                </button>
                            </li>
                            <li class="product-media__thumbnail-item">
                                <button>
                                    <img
                                        src="/images/posters/1984.webp"
                                        alt=""
                                    />
                                </button>
                            </li>
                            <li class="product-media__thumbnail-item">
                                <button>
                                    <img
                                        src="/images/posters/1984.webp"
                                        alt=""
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="product-detail-page__short">
                    <ul class="product-tag-list">
                        <li class="product-tag-list__item">
                            <UiButton
                                text="Вселенная истории"
                                color="active"
                            />
                        </li>
                        <li class="product-tag-list__item">
                            <UiButton
                                text="Читайте и помогайте!"
                                color="active"
                            />
                        </li>
                        <li class="product-tag-list__item">
                            <UiButton
                                text="Понравиться всем"
                                color="active"
                            />
                        </li>
                    </ul>
                    <p class="product-detail-page__description">
                        Вау, я снова в игре! Лучше начну с самого начала… Помните Дирка, с которым я
                        даже успел подружиться? Так вот, он всё такой же задира! Из-за спора с ним я
                        СНОВА оказался в «Майнкрафте» и должен доказать, что я не какой-то там нуб и
                        много чего знаю и умею в игре. Чтобы доказать свою правоту, я должен пройти
                        сложные испытания в игре: встреча с враждебным ЗОГЛИНОМ (почему-то он не
                        захотел стать моим лучшим другом, а я ведь ему помочь пытался!), а ещё
                        морское путешествие в поисках КНИГИ, которая поможет мне вернуться домой. Но
                        не буду забегать вперёд… вспомнить бы, как всё крафтить! Уж это мне очень
                        пригодится, чтобы поскорее оказаться дома и утереть нос вредному Дирку!
                    </p>
                    <div class="product-detail-page__short-buttons">
                        <UiButton
                            text="Перейти к характеристикам"
                            color="active"
                        />
                    </div>
                </div>
                <aside class="product-detail-page__offer">
                    <div class="product-offer">
                        <header class="product-offer__header">
                            <div class="product-offer__price">
                                <div class="product-offer-price">
                                    <div class="product-offer-price__old"><s>471 ₽</s></div>
                                    <div class="product-offer-price__actual">399 ₽</div>
                                </div>
                                <div class="product-actions">
                                    <UiButton
                                        variant="primary"
                                        text="Купить"
                                        class="product-card__button product-card__button--buy"
                                        color="active"
                                    />
                                    <UiButton
                                        variant="secondary"
                                        src="/ico/like.svg"
                                        alt="Белая иконка закладка"
                                        class="product-card__button product-card__button--like"
                                        color="active"
                                    />
                                </div>
                                <div class="product-offer-status">В наличии</div>
                            </div>
                        </header>
                    </div>
                </aside>
                <div class="product-reviews product-detail-page__reviews">
                    <header class="reviews-header">
                        <h2 class="reviews-header__title">
                            <span>Отзывы</span>
                            <span class="reviews-header__count"></span>
                        </h2>
                        <UiButton
                            text="Оставить отзыв"
                            color="active"
                        />
                    </header>
                    <div class="product-rating-detail">
                        <header class="product-rating-detail__header">
                            <span class="product-rating-detail__count">5.0</span>
                            <div class="rating">
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                                <span>
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                            </div>
                            <div class="product-rating__votes">
                                <span>29 оценок</span>
                            </div>
                        </header>
                        <div class="product-reviews__list">
                            <div class="review-item review-item--best">
                                <div class="review-item__body">
                                    <div class="review-item__author">
                                        <span class="review-item__author"> Стив </span>
                                    </div>
                                    <div class="rating">
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                    </div>
                                    <div class="review-item__content">
                                        Покупала внуку 6 лет книги «Дневник Стива» Майнкрафт, заказ
                                        пришел в магазин «Читай Город» в ТЦ «Солнечный ветер»
                                    </div>
                                    <div class="review-item__subtitle"><strong>Плюсы</strong></div>
                                    <div class="review-item__content">
                                        Быстро, удобно, внимательное обслуживание в магазине.
                                    </div>
                                    <div class="review-item__subtitle"><strong>Минусы</strong></div>
                                    <div class="review-item__content">Минусов нет.</div>
                                </div>
                                <footer class="review-item__footer">
                                    <UiButton
                                        variant="secondary"
                                        src="/ico/like-1.svg"
                                        alt="Картинка нравиться"
                                    />
                                    <UiButton
                                        variant="secondary"
                                        src="/ico/dislike.svg"
                                        alt="Картинка не нравиться"
                                    />
                                </footer>
                            </div>
                            <div class="review-item review-item--good">
                                <div class="review-item__body">
                                    <div class="review-item__author">
                                        <span class="review-item__author"> Стив </span>
                                    </div>
                                    <div class="rating">
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                    </div>
                                    <div class="review-item__content">
                                        Покупала внуку 6 лет книги «Дневник Стива» Майнкрафт, заказ
                                        пришел в магазин «Читай Город» в ТЦ «Солнечный ветер»
                                    </div>
                                    <div class="review-item__subtitle"><strong>Плюсы</strong></div>
                                    <div class="review-item__content">
                                        Быстро, удобно, внимательное обслуживание в магазине.
                                    </div>
                                    <div class="review-item__subtitle"><strong>Минусы</strong></div>
                                    <div class="review-item__content">Минусов нет.</div>
                                </div>
                                <footer class="review-item__footer">
                                    <UiButton
                                        variant="secondary"
                                        src="/ico/like-1.svg"
                                        alt="Картинка нравиться"
                                    />
                                    <UiButton
                                        variant="secondary"
                                        src="/ico/dislike.svg"
                                        alt="Картинка не нравиться"
                                    />
                                </footer>
                            </div>
                            <div class="review-item review-item--bad">
                                <div class="review-item__body">
                                    <div class="review-item__author">
                                        <span class="review-item__author"> Стив </span>
                                    </div>
                                    <div class="rating">
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                        <span>
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                    </div>
                                    <div class="review-item__content">
                                        Покупала внуку 6 лет книги «Дневник Стива» Майнкрафт, заказ
                                        пришел в магазин «Читай Город» в ТЦ «Солнечный ветер»
                                    </div>
                                    <div class="review-item__subtitle"><strong>Плюсы</strong></div>
                                    <div class="review-item__content">
                                        Быстро, удобно, внимательное обслуживание в магазине.
                                    </div>
                                    <div class="review-item__subtitle"><strong>Минусы</strong></div>
                                    <div class="review-item__content">Минусов нет.</div>
                                </div>
                                <footer class="review-item__footer">
                                    <UiButton
                                        variant="secondary"
                                        src="/ico/like-1.svg"
                                        alt="Картинка нравиться"
                                    />
                                    <UiButton
                                        variant="secondary"
                                        src="/ico/dislike.svg"
                                        alt="Картинка не нравиться"
                                    />
                                </footer>
                            </div>
                        </div>
                    </div>
                    <footer class="product-reviews__footer">
                        <UiButton
                            text="Показать больше отзывов"
                            color="active"
                        />
                    </footer>
                </div>
                <ul class="product-properties product-detail-page__product-properties">
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Тип обложки</span
                        ><span class="product-properties-item__content">Твёрдый переплёт</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Количество страниц </span
                        ><span class="product-properties-item__content">80</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Вес, г</span
                        ><span class="product-properties-item__content">230</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Размер</span
                        ><span class="product-properties-item__content">1.1x14.5x21.7</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Издательство</span
                        ><span class="product-properties-item__content">Эксмо</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Серия</span
                        ><span class="product-properties-item__content"
                            >Майнкрафт. Дневник Стива</span
                        >
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Возрастные ограничения</span
                        ><span class="product-properties-item__content">12+</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Год издания</span
                        ><span class="product-properties-item__content">2025</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">ID товара</span
                        ><span class="product-properties-item__content">2616700</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Разделы</span
                        ><span class="product-properties-item__content">Понравится детям </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product-detail-page {
    &__main {
        display: grid;
        column-gap: 48px;
        row-gap: 20px;
        grid-template-columns: 304px 1fr 392px;
    }

    &__title-wrapper {
        grid-column: span 3;
        display: flex;
    }

    &__badges {
        grid-column: span 3;
    }

    &__statistics-share {
        grid-column: span 3;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__media {
        grid-column: span 1;
    }

    &__short {
        grid-column: span 1;
        display: flex;
        flex-direction: column;
        gap: $gap-3x;
    }

    &__description {
        font-size: $font-size-3x;
        line-height: $line-height-6x;
    }

    &__offer {
        grid-column: span 1;
        grid-row: span 2;
    }

    &__reviews {
        grid-column: span 3;
    }

    &__product-properties {
        grid-column: span 2;
    }
}

.product-badges-list {
    display: flex;
}

.product-statistics {
    display: flex;
    align-items: center;
    gap: $gap-5x;
}

.product-media {
    &__preview {
        margin-bottom: 20px;
        @include LampEffect($b-r: $radius-2x);
    }

    &__thumbnails {
        display: flex;
        gap: $gap-2x;
    }

    &__thumbnail-item {
        position: relative;
        width: 100px;
        height: 100px;
        cursor: pointer;
        @include LampEffect($b-r: $radius-1x);

        &:last-child::after {
            content: 'ещё';
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: $font-size-5x;
            font-family: $font-family-1x;
            font-weight: 400;
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background-color: $color-background-2x;
        }
    }
}

.product-tag-list {
    display: flex;
    gap: $gap-2x;

    &__item * {
        font-size: $font-size-1x;
        line-height: $line-height-1x;
    }
}

.product-offer {
    position: sticky;
    top: 0;
    padding: $padding-6x;
    @include LampEffect($b-r: $radius-2x);

    &__price {
        display: flex;
        flex-direction: column;
        gap: $gap-3x;
    }
}

.product-offer-price {
    &__old {
        margin-bottom: 10px;
        font-size: $font-size-3x;
        line-height: $line-height-5x;
    }

    &__actual {
        font-size: $font-size-6x;
        line-height: $line-height-7x;
        color: $color-red;
    }
}

.product-actions {
    display: flex;
    gap: $gap-2x;
}

.product-offer-status {
    color: $color-lime;
    font-size: $font-size-3x;
    line-height: $line-height-4x;
}

.reviews-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.product-reviews {
    &__list {
        display: flex;
        flex-direction: column;
        gap: $gap-5x;
    }
}

.product-rating-detail {
    @include LampEffect($b-r: $radius-2x);
    padding: $padding-5x $padding-6x;
    margin-bottom: 16px;

    &__header {
        display: flex;
        align-items: center;
        gap: $gap-4x;
        margin-bottom: 32px;
    }
}

.review-item {
    padding: $padding-5x $padding-6x;
    @include LampEffect($b-r: $radius-2x);

    &--best {
        @include LampEffect($b-r: $radius-2x, $bg: $color-active-blue);
    }

    &--good {
        @include LampEffect($b-r: $radius-2x, $bg: $color-active-yellow);
    }

    &--bad {
        @include LampEffect($b-r: $radius-2x, $bg: $color-active-red);
    }

    &__body {
        display: flex;
        flex-direction: column;
        gap: $gap-4x;
        margin-bottom: 20px;
    }

    &__footer {
        display: flex;
        gap: $gap-2x;
        justify-content: end;
    }
}

.product-properties {
    list-style: disc;
    font-size: $font-size-3x;
    line-height: $line-height-4x;
    display: flex;
    flex-direction: column;
    gap: $gap-3x;
}

.product-properties-item {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &__title {
        color: $color-darkgray;
    }

    &__title, &__content {
        font-weight: 400;
    }
}
</style>
