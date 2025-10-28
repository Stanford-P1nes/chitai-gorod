<template>
    <button class="app-search-button">
        <img
            class='app-search-button__icon'
            src="@/assets/images/ico/search.svg"
            alt="search icon"
        />
    </button>
</template>

<style lang='scss'>

.app-search-button {
    border-radius: 8px;
    padding: 12px;
    width: 48px;
    height: 48px;
    background-color: $color-orange;

    &__icon {
        width: 24px;
        height: 24px;
    }
}

</style>