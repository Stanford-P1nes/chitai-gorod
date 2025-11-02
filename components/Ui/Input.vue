<script setup lang="ts">
import { ref } from 'vue';
import { Country, countryData } from '~/types/country';

// Теперь используем импортированные данные
const country = ref<Country>(Country.RUSSIA);
const showListCountry = ref<boolean>(false);
const phoneNumber = ref<string>('');

const toggleCountryList = (): void => {
    showListCountry.value = !showListCountry.value;
};

// Получаем данные из централизованного объекта
const getCurrentFlag = (): string => countryData[country.value].flag;
const getCurrentPlaceholder = (): string => countryData[country.value].placeholder;
const getCountryName = (countryCode: Country): string => countryData[countryCode].name;
</script>

<template>
    <div class="ui-input">
        <div class="ui-input__wrapper">
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
                <select
                    name="country"
                    class="ui-input__select"
                    v-show="showListCountry"
                    v-model="country"
                >
                    <option
                        v-for="countryCode in Object.values(Country)"
                        :key="countryCode"
                        :value="countryCode"
                    >
                        {{ getCountryName(countryCode) }}
                    </option>
                </select>
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
                @focus="toggleCountryList"
            />
        </div>
    </div>
</template>

<style lang="scss">
.ui-input {
    position: relative;
    width: 100%;

    &__wrapper {
        display: flex;
        gap: 12px;
        padding: 12px 20px;
        border: $border;
        border-radius: $border-r-md;
        background-color: $color-white;
    }

    &__icon {
        width: 20px;
        height: 20px;
        cursor: pointer;
    }

    &__img {
        width: 100%;
        height: 100%;
    }

    &__select {
        position: absolute;
        right: 100%;
        bottom: 0;
        cursor: pointer;
        font-family: $font-family-text;
        font-weight: 400;
        font-size: $font-size-lg;
        line-height: $line-height-xl;
        color: $color-black;
    }

    &__input {
        font-family: $font-family-text;
        font-weight: 400;
        font-size: $font-size-lg;
        line-height: $line-height-xl;
        color: $color-black;
    }
}
</style>
