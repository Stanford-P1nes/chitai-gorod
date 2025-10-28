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
                <AppButton />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.app-search {
    width: 100%;
    &__form {
        display: flex;
        border-radius: 8px;
        background-color: $color-gray;
    }
    .search-form {
        width: 100%;
        padding: 12px 15px 12px 15px;

        &__input-wrapper {
            width: 100%;
        }

        &__input {
            width: 100%;
        }
    }
}
</style>
