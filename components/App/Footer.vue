<template>
    <footer class="app-footer">
        <div class="container app-footer__container">
            <div class="app-footer__content">
                <div class="app-footer__item app-footer__item--information">
                    <a
                        href="tel:8 988 644-87-39"
                        class="app-footer__phone"
                        title='Позвонить на номер телефона'
                        >8 988 644-87-39</a
                    >
                    <div class="app-footer__contacts-links">
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Вопросы и ответы'
                            >Вопросы и ответы
                        </nuxt-link>
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Поучаствовать в интервью'
                            >Поучаствовать в интервью
                        </nuxt-link>
                    </div>
                    <div class="app-copyright app-footer__copyright-desktop">
                        <p aria-hidden="true">&copy 2025, Читай-город</p>
                    </div>
                </div>

                <div class="app-footer__item app-footer__item--info-links">
                    <p class="app-footer__info-links-header" aria-hidden="true">Интернет-магазин</p>
                    <div class="app-footer__info-links-content">
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Акции'
                            >Акции</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Распродажа'
                            >Распродажа</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Доставка и оплата'
                            >Доставка и оплата</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Программа лояльности'
                            >Программа лояльности</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Подарочные сертификаты'
                            >Подарочные сертификаты</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Правила продажи'
                            >Правила продажи</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Политика конфиденциальности'
                            >Политика конфиденциальности</nuxt-link
                        >
                    </div>
                </div>

                <div class="app-footer__item app-footer__item--info-links">
                    <p class="app-footer__info-links-header" aria-hidden="true">Розничная сеть</p>
                    <div class="app-footer__info-links-content">
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Адреса магазинов'
                            >Адреса магазинов</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Книжний дозор'
                            >Книжний дозор</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='О компании'
                            >О компании</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Читай-город для бизнеса'
                            >Читай-город для бизнеса</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Хотите у нас работать'
                            >Хотите у нас работать</nuxt-link
                        >
                    </div>
                </div>

                <div class="app-footer__item app-footer__item--info-links">
                    <p class="app-footer__info-links-header" aria-hidden="true">Знаем, что почитать</p>
                    <div class="app-footer__info-links-content">
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Скоро в продаже'
                            >Скоро в продаже</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Эксклюзивные новинки'
                            >Эксклюзивные новинки</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Лучшие из лучших'
                            >Лучшие из лучших</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Читай-журнал'
                            >Читай-журнал</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Книжные циклы'
                            >Книжные циклы</nuxt-link
                        >
                        <nuxt-link
                            to="/"
                            class="app-footer__info-links-link"
                            title='Что ещё почитать?'
                            >Что ещё почитать?</nuxt-link
                        >
                    </div>
                </div>

                <div class="app-footer__item app-footer__item--social-block">
                    <AppSocial />
                </div>

                <div class="app-footer__item app-footer__item--payments-and-recom-tech">
                    <div class="app-footer__payments">
                        Принимаем к оплате
                        <a
                            href=""
                            class="app-footer__recom-tech-link"
                            title='Принимаем к оплате'
                        >
                            <span
                                class="app-footer__payments-icon app-footer__payments-icon--visa"
                            ></span>
                            <span
                                class="app-footer__payments-icon app-footer__payments-icon--mir"
                            ></span>
                        </a>
                    </div>
                    <div class="app-footer__recom-tech">
                        На информационном ресурсе применяются
                        <a
                            href=""
                            class="app-footer__recom-tech-link"
                            title='рекомендательные технологии'
                        >
                            рекомендательные технологии.</a
                        >
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.app-footer {
    &__container {
        padding: 56px 52px 30px;
    }

    &__content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    &__item {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: $gap-xl;

        &--payments-and-recom-tech {
            padding-top: 40px;
            gap: 0;
            grid-column: span 3;
        }
    }

    &__phone {
        font-weight: 400;
        font-size: $font-size-md;
        line-height: $line-height-md;
        color: $color-black;
    }

    &__contacts-links {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    &__info-links-link {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-black;
    }

    &__copyright-desktop {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-lightgray;
    }

    // info-links

    &__info-links-header {
        font-weight: 400;
        font-size: $font-size-md;
        line-height: $line-height-md;
        color: $color-black;
    }

    &__info-links-content {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: $gap-md;
    }

    &__info-links-link {
        font-weight: 400;
        font-size: $font-size-md;
        line-height: $line-height-md;
        color: $color-black;
    }

    // payments-and-recom-tech
    &__payments {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: $gap-md;
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-darkgray;
    }

    &__recom-tech-link {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: row;
        gap: 12px;
        margin-left: 4px;
    }

    &__payments-icon {
        width: 16px;
        height: 16px;
        user-select: none;

        &--visa {
            background-image: url('@/public/ico/credit-card-visa.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }

        &--mir {
            background-image: url('@/public/ico/credit-card-mir.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }
    }

    &__recom-tech {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: row;
        gap: 0px;
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-lightgray;
    }

    &__recom-tech-link {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
        color: $color-darkgray;
    }
}
</style>
