<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useProductStore } from '~/stores/products';
import { useReviewStore } from '~/stores/reviews';

const route = useRoute();
const productId = Number(route.params.product);

const productStore = useProductStore();
const reviewStore = useReviewStore();

const { loading } = storeToRefs(productStore);
const { loadingProducts, getByStatus, getById } = productStore;

const { loadingReview, reviewsData } = storeToRefs(reviewStore);
const { fetchReviews, getByProductId } = reviewStore;

onMounted(async () => {
    await loadingProducts();
    await fetchReviews();
});

const product = computed(() => getById(productId));
const reviews = computed(() => getByProductId(productId));

const status = computed(() => getByStatus('exclusive'));
</script>

<template>
    <div class="page">
        <div class="product-detail-page">
            <div class="product-detail-page__main">
                <section class="product-detail-page__title-wrapper">
                    <h2 class="product-detail-page__title">{{ product?.name }}</h2>
                    <sup class="product-age-restrictions">{{ product?.restrictions }}</sup>
                </section>
                <section class="product-detail-page__badges">
                    {{ product?.discount }}
                </section>
                <section class="product-detail-page__statistics-share">
                    <div class="product-statistics">
                        <div class="product-statistics__rating">
                            <div
                                v-if="product?.rating"
                                class="rating"
                            >
                                <span
                                    v-for="(star, idx) in product?.rating"
                                    :key="idx"
                                >
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
                                :src="product?.img"
                                :alt="product?.name"
                            />
                        </div>
                        <ul class="product-media__thumbnails">
                            <li
                                v-for="(cover, idx) in product?.covers"
                                :key="idx"
                                class="product-media__thumbnail-item"
                            >
                                <button>
                                    <img
                                        :src="cover?.img"
                                        :alt="product?.name"
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="product-detail-page__short">
                    <ul class="product-tag-list">
                        <li
                            v-for="(tag, idx) in product?.tag"
                            :key="idx"
                            class="product-tag-list__item"
                        >
                            <UiButton
                                :text="tag.text"
                                color="active"
                            />
                        </li>
                    </ul>
                    <p class="product-detail-page__description">
                        {{ product?.description }}
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
                                    <div class="product-offer-price__old">
                                        <s>{{ product?.oldPrice }}</s>
                                    </div>
                                    <div class="product-offer-price__actual">
                                        {{ product?.price }}
                                    </div>
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
                                <div
                                    class="product-offer-status"
                                    :class="{
                                        'product-offer-status--green': product?.availability,
                                        'product-offer-status--red': !product?.availability,
                                    }"
                                >
                                    {{ product?.availability ? 'В наличии' : 'Нет в наличии' }}
                                </div>
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
                            <span class="product-rating-detail__count">
                                {{ product?.rating + '.0' }}
                            </span>
                            <div
                                v-if="product?.rating"
                                class="rating"
                            >
                                <span
                                    v-for="(star, idx) in product?.rating"
                                    :key="idx"
                                >
                                    <img
                                        src="/ico/star.svg"
                                        alt="Иконка звезды"
                                    />
                                </span>
                            </div>
                            <div class="product-rating__votes">
                                <span>{{ reviews?.length }} оценок</span>
                            </div>
                        </header>
                        <div
                            v-if="reviews?.length"
                            class="product-reviews__list"
                        >
                            <div
                                v-for="review in reviews"
                                :key="review.id"
                                class="review-item"
                                :class="{
                                    'review-item--best': review?.rating === 5,
                                    'review-item--good': review?.rating <= 4,
                                    'review-item--bad': review?.rating <= 2,
                                }"
                            >
                                <div class="review-item__body">
                                    <div class="review-item__author">
                                        <span class="review-item__author">
                                            {{ review?.author }}
                                        </span>
                                    </div>
                                    <div class="rating">
                                        <span v-for="star in review?.rating">
                                            <img
                                                src="/ico/star.svg"
                                                alt="Иконка звезды"
                                            />
                                        </span>
                                    </div>
                                    <div class="review-item__content">
                                        {{ review?.text }}
                                    </div>
                                    <div class="review-item__subtitle"><strong>Плюсы</strong></div>
                                    <div class="review-item__content">
                                        {{ review?.prosText }}
                                    </div>
                                    <div class="review-item__subtitle"><strong>Минусы</strong></div>
                                    <div class="review-item__content">{{ review?.consText }}</div>
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
                        ><span class="product-properties-item__content">{{
                            product?.coverType
                        }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Количество страниц </span
                        ><span class="product-properties-item__content">{{
                            product?.numberPages
                        }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Вес, г</span
                        ><span class="product-properties-item__content">{{ product?.weight }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Размер</span
                        ><span class="product-properties-item__content">{{ product?.size }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Издательство</span
                        ><span class="product-properties-item__content">{{
                            product?.publishingHouse
                        }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Серия</span
                        ><span class="product-properties-item__content">{{ product?.name }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Возрастные ограничения</span
                        ><span class="product-properties-item__content">{{
                            product?.restrictions
                        }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Год издания</span
                        ><span class="product-properties-item__content">{{
                            product?.publication
                        }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">ID товара</span
                        ><span class="product-properties-item__content">{{ product?.id }}</span>
                    </li>
                    <li class="product-properties-item">
                        <span class="product-properties-item__title">Разделы</span
                        ><span class="product-properties-item__content">{{ product?.status }}</span>
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
        grid-template-columns: 250px 1fr 300px;
    }

    &__title-wrapper {
        grid-column: span 3;
        display: flex;
    }

    &__title {
        font-size: $font-size-6x;
        line-height: $line-height-7x;
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
        grid-column: span 2;
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
        user-select: none;
        @include LampEffect($b-r: $radius-2x);
    }

    &__thumbnails {
        max-width: 100%;
        display: flex;
        overflow-x: auto;
        overflow-y: hidden;
        gap: $gap-2x;
    }

    &__thumbnail-item {
        position: relative;
        min-width: 60px;
        height: 60px;
        cursor: pointer;
        @include LampEffect($b-r: $radius-1x);
        user-select: none;
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
    font-size: $font-size-3x;
    line-height: $line-height-4x;

    &--green {
        color: $color-lime;
    }

    &--red {
        color: $color-red;
    }
}

.reviews-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
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

    &__title,
    &__content {
        font-weight: 400;
    }
}
</style>
