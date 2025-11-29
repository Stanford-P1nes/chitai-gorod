<script setup lang="ts">
import { ref } from 'vue';
import { Country, countryData } from '~/types/country';

const country = ref<Country>(Country.RUSSIA);
const showListCountry = ref<boolean>(false);
const phoneNumber = ref<number>();

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
                v-if="showListCountry"
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
            type="number"
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
    gap: $gap-3x;
    padding: $padding-3x $padding-5x;
    @include LampEffect($b-r: $radius-2x, $overflow: visible);

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
        top: 110%;
        width: 100%;
        padding: $padding-2x;
        display: flex;
        flex-direction: column;
        gap: $gap-1x;
        cursor: pointer;
        @include LampEffect($b-r: $radius-2x, $overflow: auto);
        height: 165px;
    }

    &__button {
        min-height: 50px;
        text-align: start;
        padding: 12px 17px;
        @include LampEffect($b-r: $radius-2x);
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
            font-family: $font-family-2x;
            font-weight: 400;
            font-size: $font-size-3x;
            line-height: $line-height-5x;
        }
    }

    &__input {
        width: 100%;
        font-family: $font-family-2x;
        font-weight: 400;
        font-size: $font-size-4x;
        line-height: $line-height-5x;
    }
}
</style>
