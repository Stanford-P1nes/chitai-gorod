<script setup lang="ts">
import { useFooter } from '#imports';

const footer = await useFooter();
</script>

<template>
    <footer class="app-footer">
        <div class="container">
            <div class="app-footer__inner">
                <!-- CONTACTS -->
                <div class="app-footer__item app-footer__item--information">
                    <a
                        :href="`tel:${footer.contacts.phone}`"
                        class="app-footer__phone"
                        title="Позвонить на номер телефона"
                        >{{ footer.contacts.phone }}</a
                    >
                    <div class="app-footer__contacts-links">
                        <nuxt-link
                            v-for="link in footer.contacts.links"
                            :key="link.to"
                            to="/"
                            class="app-footer__info-links-link"
                            :title="link.title"
                            >{{ link.title }}
                        </nuxt-link>
                    </div>
                    <div class="app-copyright app-footer__copyright-desktop">
                        <p aria-hidden="true">&copy 2025, Читай-город</p>
                    </div>
                </div>

                <!-- COLUMNS -->
                <div
                    v-for="column in footer.columns"
                    class="app-footer__item app-footer__item--info-links"
                >
                    <p
                        class="app-footer__info-links-header"
                        aria-hidden="true"
                    >
                        {{ column.title }}
                    </p>
                    <div class="app-footer__info-links-content">
                        <nuxt-link
                            v-for="link in column.links"
                            :key="link.to"
                            to="/"
                            class="app-footer__info-links-link"
                            :title="link.title"
                            >{{ link.title }}</nuxt-link
                        >
                    </div>
                </div>

                <!-- PAYMENT -->
                <div class="app-footer__item app-footer__item--social-block">
                    <AppSocial :socials="footer.contacts.socials" />
                </div>

                <!-- NOTE -->
                <div class="app-footer__item app-footer__item--payments-and-recom-tech">
                    <div class="app-footer__payments">
                        Принимаем к оплате
                        <a
                            href="#"
                            class="app-footer__recom-tech-link"
                            title="Принимаем к оплате"
                        >
                            <span
                                v-for="(payment, idx) in footer.payment"
                                :key="idx"
                                :class="[
                                    'app-footer__payments-icon',
                                    `app-footer__payments-icon--${payment}`,
                                ]"
                            ></span>
                        </a>
                    </div>
                    <div class="app-footer__recom-tech">
                        {{ footer.note.text }}
                        <nuxt-link
                            :to="footer.note.link.to"
                            class="app-footer__recom-tech-link"
                            title="рекомендательные технологии"
                        >
                            {{ footer.note.link.title }}</nuxt-link
                        >
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
.app-footer {
    &__inner {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: $gap-xl;
        padding-top: 56px;
        padding-bottom: 30px;
        padding-left: $padding-lg;
        padding-right: $padding-lg;

        @include media(laptop) {
            grid-template-columns: repeat(3, 1fr);
            padding-left: $padding-sm;
            padding-right: $padding-sm;
        }

        @include media(tablet) {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    &__item {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        gap: $gap-xl;

        &--payments-and-recom-tech {
            gap: 0;
            grid-column: span 3;
            
            @include media(laptop) {
                grid-column: span 1;
            }
        }
    }

    &__phone {
        font-weight: 400;
        font-size: $font-size-lg;
        line-height: $line-height-md;
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
    }

    &__copyright-desktop {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
    }

    // info-links

    &__info-links-header {
        font-weight: 400;
        font-size: $font-size-lg;
        line-height: $line-height-md;
        color: $color-orange;
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
    }

    &__recom-tech-link {
        font-weight: 400;
        font-size: $font-size-sm;
        line-height: $line-height-md;
    }
}
</style>
