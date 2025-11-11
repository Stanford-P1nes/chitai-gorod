<script setup lang="ts">
import { menu } from '~/data/menu';
</script>

<template>
    <div class="header-top">
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
                    <li
                        v-for="(item, idx) in menu"
                        :key="idx"
                        class="header-menu__item"
                    >
                        <nuxt-link
                            class="header-menu__link"
                            :to="item.link"
                            :title='item.name'
                        >{{ item.name }}</nuxt-link>
                    </li>
                </ul>
            </menu>
        </div>
    </div>
</template>

<style lang="scss">
.header-top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
            &__link {
                font-family: $font-family-title;
                font-weight: 300;
                font-size: $font-size-sm;
                line-height: $line-height-xl;
            }
        }
    }
}
</style>
