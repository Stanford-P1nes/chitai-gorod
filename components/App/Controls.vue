<template>
    <div class="controls">
        <button class="controls__button controls__button--hover">
            <div class="controls__icon">
                <img
                    src="@/public/ico/person.svg"
                    alt=""
                    class="controls__img"
                />
            </div>
            <span class="controls__text">Войти</span>
        </button>
        <button class="controls__button controls__button--hover">
            <div class="controls__icon">
                <img
                    src="@/public/ico/box.svg"
                    alt=""
                    class="controls__img"
                />
            </div>
            <span class="controls__text controls__button--hover">Заказы</span>
        </button>
        <button class="controls__button controls__button--hover">
            <div class="controls__icon">
                <img
                    src="@/public/ico/bookmark.svg"
                    alt=""
                    class="controls__img"
                />
            </div>
            <span class="controls__text">Избранное</span>
        </button>
        <button class="controls__button controls__button--hover">
            <div class="controls__icon">
                <img
                    src="@/public/ico/basket.svg"
                    alt=""
                    class="controls__img"
                />
            </div>
            <span class="controls__text">Корзина</span>
        </button>
    </div>
</template>

<style lang="scss">
.controls {
    height: 48px;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;

    &__button {
        height: 100%;
        flex-basis: 55px;
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;

        &--hover {
            &:hover {
                .controls__text {
                    text-shadow: $box-shadow-btn;
                }

                .controls__img {
                    // если нужно стилизовать иконку тоже
                    filter: drop-shadow($box-shadow-btn);
                }
            }
        }
    }

    &__icon {
        width: 35px;
        height: 35px;
    }

    &__img {
        width: 100%;
        height: 100%;
        transition: filter 0.2s linear;
    }

    &__text {
        font-family: $font-family-text;
        font-weight: 400;
        font-size: $font-size-xs;
        line-height: $line-height-xs;
        color: $color-black;
        transition: text-shadow 0.2s linear;
    }
}
</style>
