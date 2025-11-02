<template>
    <div class="app-search">
        <div class="app-search__form-wrapper">
            <div class="app-search__form">
                <form class="search-form">
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
        </div>
    </div>
</template>

<style lang="scss">
.app-search {
    flex-grow: 4;

    &__form {
        display: flex;
        border-radius: $border-r-md;
        background-color: $color-gray;
    }
    
    .search-form {
        width: 100%;
        padding: 12px 15px 12px 15px;
        display: flex;
        align-items: center;

        &__input-wrapper {
            width: 100%;
        }

        &__input {
            width: 100%;
        }
    }
}
</style>
