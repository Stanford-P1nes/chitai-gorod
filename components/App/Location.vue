<template>
    <button class="app-location">
        <span class="app-location__icon">
            <img
                src="/ico/location.svg"
                alt="Иконка локации"
            />
        </span>
        <span class="app-location__side">Россия, Махачкала</span>
        <span class="app-location__icon">
            <img
                src="/ico/arrow-down-2-fill.svg"
                alt="Иконка стрелочки вниз"
            />
        </span>
    </button>
</template>

<style scoped lang="scss">
.app-location {
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
        text-wrap: nowrap;
    }
}
</style>
