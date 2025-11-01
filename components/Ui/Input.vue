<script setup>
import { ref } from 'vue';

const icons = {
    russia: '/ico-flags/russia.svg',
    usa: '/ico-flags/usa.svg',
    china: '/ico-flags/china.svg',
    germany: '/ico-flags/germany.svg',
    france: '/ico-flags/france.svg',
    kazakhstan: '/ico-flags/kazakhstan.svg',
};

const country = ref('russia');

const showListCountry = ref(false);

const toggleCountryList = () => {
    showListCountry.value = !showListCountry.value;
};

const placeholders = {
    russia: '+7 (988) 777 66-55',
    usa: '+1 (555) 123-4567',
    china: '+86 138 0013 8000',
    germany: '+49 1512 3456789',
    france: '+33 6 12 34 56 78',
    kazakhstan: '+7 701 123 4567',
};

const vMask = {
    russia: '+7 (###) ###-####',
    usa: '+1 (###) ###-####',
    china: '+86 ### #### ####',
    germany: '+49 #### ########',
    france: '+33 # ## ## ## ##',
    kazakhstan: '+7 ### ### ####',
};

const inputPhoneModel = red('');
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
                        :src="icons[country]"
                        :alt="`Флаг ${country}`"
                    />
                </div>
                <select
                    name="country"
                    class="ui-input__select"
                    v-show="showListCountry"
                    v-model="country"
                >
                    <option value="russia">Russia</option>
                    <option value="usa">Usa</option>
                    <option value="china">China</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="kazakhstan">Kazakhstan</option>
                </select>
            </div>
            <input
                type="tel"
                class="ui-input__input"
                id="phone-number"
                :placeholder="placeholders[country]"
                v-mask="vMask[country]"
                v-model="inputPhoneModel"
                autocomplete="off"
                autofocus
                required
                @click="toggleInputPhoneNumber"
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

        img {
            width: 100%;
            height: 100%;
        }
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
