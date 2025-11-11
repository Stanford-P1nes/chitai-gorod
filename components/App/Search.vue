<template>
    <div class="app-search">
        <form class="search-form app-search__form">
            <div class="search-form__input-wrapper">
                <input
                    class="search-form__input"
                    type="text"
                    placeholder="Найти..."
                />
            </div>
        </form>
        <UiButton
            variant="secondary"
            src="/ico/search.svg"
            alt="Кнопка с иконкой лупы для поиска"
        />
    </div>
</template>

<style lang="scss">
.app-search {
    flex-grow: 4;
    display: flex;
    @include LampEffect($b-r: $border-r-md);
    
    .search-form {
        width: 100%;
        display: flex;
        align-items: center;
        
        &__input-wrapper {
            width: 100%;
            padding: $padding-ui;
        }
        
        &__input {
            width: 100%;
            font-weight: 400;
            font-size: $font-size-lg;
        }
    }
}
</style>
