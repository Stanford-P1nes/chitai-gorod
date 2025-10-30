<template>
    <div class="header-top">
        <div class="header-top__wrapper container">
            <div class="header-top__location">
                <button class="header-location">
                    <span class="header-location__icon">
                        <img
                            src="/ico/location.svg"
                            alt="Иконка локации"
                        />
                    </span>
                    <span class="header-location__side">Россия, Махачкала</span>
                    <span class="header-location__icon">
                        <img
                            src="/ico/arrow-down-2-fill.svg"
                            alt="Иконка стрелочки вниз"
                        />
                    </span>
                </button>
            </div>
            <div class="header-top__menu">
                <menu class="header-menu">
                    <ul class="header-menu__list">
                        <li class="header-menu__item">
                            <nuxt-link
                                class="header-menu__link"
                                to=""
                            >Магазины</nuxt-link>
                        </li>
                        <li class="header-menu__item">
                            <nuxt-link
                                class="header-menu__link"
                                to=""
                            >Акции</nuxt-link>
                        </li>
                        <li class="header-menu__item">
                            <nuxt-link
                                class="header-menu__link"
                                to=""
                            >Распродажа</nuxt-link>
                        </li>
                        <li class="header-menu__item">
                            <nuxt-link
                                class="header-menu__link"
                                to=""
                            >Сертификаты</nuxt-link>
                        </li>
                        <li class="header-menu__item">
                            <nuxt-link
                                class="header-menu__link"
                                to=""
                            >Программа лояльности</nuxt-link>
                        </li>
                        <li class="header-menu__item">
                            <nuxt-link
                                class="header-menu__link"
                                to=""
                            >Блог</nuxt-link>
                        </li>
                        <li class="header-menu__item">
                            <nuxt-link
                                class="header-menu__link"
                                to=""
                            >Ешё</nuxt-link>
                        </li>
                    </ul>
                </menu>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.header-top {
    &__wrapper {
        width: 100%;
        background-color: $color-white;
        padding-top: 8px;
        padding-bottom: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    &__location {
        .header-location {
            display: flex;
            align-items: center;

            &__icon {
                width: 24px;
                height: 24px;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 16px;
                    height: 16px;
                }
            }
            
            &__side {
                font-family: $font-family-title;
                font-weight: 300;
                font-size: $font-size-sm;
                line-height: 16px;
                color: $color-black;
            }
        }
    }

    &__menu {
        .header-menu {
            &__list {
                display: flex;
                align-items: center;
                gap: 16px;
            }
        }
    }
}
</style>
