<template>
    <article class="product-card">
        <div class="product-card__image-wrapper">
            <img
                src="./../../assets/images/posters/Фото-Гарри-Поттера.webp"
                alt=""
                class="product-card__img"
            />
        </div>
        <div class="product-card__content">
            <div class="product-card-price product-card__price">
                <span class="product-card-price__price"> 1 105 ₽ </span>
                <div class="product-card-price__side">
                    <s class="product-card-price__oldprice"> 1299 ₽ </s>
                    <span class="product-card-price__discount"> -15% </span>
                </div>
            </div>
            <div class="product-card__caption">
                <p class="product-card__title">Гарри Поттер</p>
                <p class="product-card__subtitle">Джоа́н Ро́улинг</p>
            </div>
            <div class="rating product-card__rating">
                <span class="rating__icon"></span>
                <span class="rating__icon"></span>
                <span class="rating__icon"></span>
                <span class="rating__icon"></span>
                <span class="rating__icon"></span>
            </div>
            <div class="product-card__actions">
                <UiButton
                    variant="primary"
                    text="Купить"
                    class="product-card__button product-card__button--buy"
                />
                <UiButton
                    variant="secondary"
                    src="/ico/bookmark-white.svg"
                    alt="Белая иконка закладка"
                    class="product-card__button product-card__button--bookmark"
                />
            </div>
        </div>
    </article>
</template>

<style lang="scss">
.product-card {
    display: flex;
    flex-direction: column;
    gap: 8px;

    &__image-wrapper {
        border-radius: 4px;
        height: 345px;
        max-height: 345px;
        background-color: $color-gray;
        overflow: hidden;
    }

    &__img {
        width: 100%;
        height: 100%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__caption {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    &__title {
        font-weight: 400;
        font-size: $font-size-lg;
        line-height: $line-height-xl;
        color: $color-black;
    }

    &__subtitle {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-sm;
        color: $color-darkgray;
    }

    &__actions {
        display: flex;
        gap: 4px;
    }

    &__button {
        height: 32px;
        &--buy {
            flex-grow: 1;
            font-weight: 400;
            font-size: $font-size-sm;
            line-height: $line-height-sm;
        }
        &--bookmark {
            width: 32px;
            padding: 8px;
        }
    }
}

.product-card-price {
    display: flex;
    align-items: center;
    gap: $gap-sm;

    &__price {
        font-weight: 500;
        font-size: $font-size-lg;
        line-height: $line-height-md;
        color: $color-black;
    }

    &__side {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    &__oldprice {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-black;
    }

    &__discount {
        border-radius: $border-r-xxl;
        padding: 0px 4px;
        font-weight: 400;
        background-color: $color-red;
        font-size: $font-size-sm;
        line-height: $line-height-sm;
        color: $color-white;
    }
}

.rating {
    display: flex;
    gap: $gap-xs;
    &__icon {
        width: 20px;
        height: 20px;
        background-image: url('@/public/ico/star.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }
}
</style>
