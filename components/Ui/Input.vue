<script setup lang="ts">
import { ref } from 'vue';
import { Country, countryData } from '~/types/country';

const country = ref<Country>(Country.RUSSIA);
const showListCountry = ref<boolean>(false);
const phoneNumber = ref<string>('');

const toggleCountryList = (): void => {
    showListCountry.value = !showListCountry.value;
};

const getCurrentFlag = (): string => countryData[country.value].flag;
const getCurrentPlaceholder = (): string => countryData[country.value].placeholder;
const getCountryName = (countryCode: Country): string => countryData[countryCode].name;

const selectCountry = (selectedCountry: Country): void => {
    country.value = selectedCountry;
    showListCountry.value = false;
};
</script>

<template>
    <div class="ui-input">
        <div class="ui-input__item">
            <div
                class="ui-input__icon"
                aria-hidden="true"
                @click="toggleCountryList"
            >
                <img
                    v-if="getCurrentFlag()"
                    class="ui-input__img"
                    :src="getCurrentFlag()"
                    :alt="`Флаг ${country}`"
                />
            </div>
            <div
                class="ui-input__select"
                :class="{ 'ui-input__select--active': showListCountry }"
            >
                <button
                    v-for="countryCode in Object.values(Country)"
                    :key="countryCode"
                    :value="countryCode"
                    class="ui-input__button ui-input__button--hover"
                    @click="selectCountry(countryCode)"
                >
                    <div class="ui-input__button-content">
                        <img
                            :src="countryData[countryCode].flag"
                            :alt="countryData[countryCode].name"
                            class="ui-input__button-flag"
                        />
                        <span class="ui-input__button-name">
                            {{ countryData[countryCode].name }}
                        </span>
                        <span class="ui-input__button-placeholder">
                            {{ countryData[countryCode].placeholder }}
                        </span>
                    </div>
                </button>
            </div>
        </div>
        <input
            type="tel"
            class="ui-input__input"
            id="phone-number"
            :placeholder="getCurrentPlaceholder()"
            v-model="phoneNumber"
            autocomplete="off"
            autofocus
            required
        />
    </div>
</template>

<style lang="scss">
.ui-input {
    position: relative;
    width: 100%;
    height: max-content;
    z-index: 1000;
    display: flex;
    gap: $gap-md;
    padding: $padding-xs $padding-md;
    @include LampEffect($b-r: $border-r-md, $overflow: visible);

    &__icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
        user-select: none;
    }

    &__img {
        width: 100%;
        height: 100%;
    }

    &__select {
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        padding: $padding-xxs;
        display: flex;
        flex-direction: column;
        gap: $gap-xs;
        cursor: pointer;

        @include LampEffect($b-r: $border-r-md, $overflow: auto);
        height: 165px;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;

        &--active {
            opacity: 1;
            transform: translateY(5px);
        }
    }

    &__button {
        min-height: 50px;
        text-align: start;
        padding: 12px 17px;
        @include LampEffect($b-r: $border-r-md);
        transition: background 0.2s linear;
        &--hover:hover {
            background-color: $color-orange;
        }

        &-content {
            display: flex;
            justify-content: space-between;
        }

        &-flag {
            width: 20px;
            height: 20px;
            user-select: none;
        }

        &-name,
        &-placeholder {
            font-family: $font-family-text;
            font-weight: 400;
            font-size: $font-size-md;
            line-height: $line-height-xl;
        }
    }

    &__input {
        width: 100%;
        font-family: $font-family-text;
        font-weight: 400;
        font-size: $font-size-lg;
        line-height: $line-height-xl;
    }
}
</style>
