<template>
    <article class="basket-card">
        <div class="basket-card__image-wrapper">
            <img
                class="basket-card__image"
                src="/images/posters/Гарри-Поттер-и-тайная-комната.webp"
                alt="Гарри-Поттер-и-тайная-комната"
            />
        </div>
        <div class="basket-card__content">
            <div class="basket-card__description">
                <p class="product-card__title">Название</p>
                <p class="product-card__subtitle">Автор</p>
            </div>
            <div class='basket-card__info'>
                <div class="basket-card__cost">
                    <sup><s class="basket-card__oldprice">707</s></sup>
                    <div class="basket-card__price">599</div>
                </div>
                <div class="basket-card__actions">
                    <UiButton
                        variant="secondary"
                        src="/ico/like.svg"
                        alt="Иконка избранное"
                        class='basket-card__button'
                    />
                    <UiButton
                        variant="secondary"
                        src="/ico/trash.svg"
                        alt="Иконка мусорного бака"
                        class='basket-card__button'
                    />
                </div>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
.basket-card {
    width: 100%;
    height: 125px;
    display: flex;
    align-items: flex-start;

    &__image-wrapper {
        width: 100px;
        height: 100%;
        @include LampEffect($b-r: $border-r-md);
    }

    &__image {
        width: 100%;
        height: 100%;
    }

    &__content {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 20px;
    }

    &__description {
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    &__cost {
        text-align: end;
    }

    &__price {
        font-size: $font-size-lg;
        line-height: $line-height-md;
    }

    &__oldprice {
        color: $color-red;
        font-size: $font-size-sm;
        line-height: $line-height-md;
    }

    &__title {
        font-size: $font-size-md;
        line-height: $line-height-xl;
    }

    &__subtitle {
        font-size: $font-size-sm;
        line-height: $line-height-md;
    }

    &__info {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    &__actions {
        display: flex;
        height: 50px;
        margin-top: auto;
        gap: $gap-md;
    }

    &__button {
        aspect-ratio: 1;
    }
}
</style>
