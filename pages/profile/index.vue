<template>
    <div class="page">
        <div class="profile-content page__content">
            <section class="profile-content__header">
                <h3 class="profile-content__name">Агаев Рамазан</h3>
                <p class="profile-content__text">Зарегистрирован 1 ноября 2025 г.</p>
                <p class="profile-content__text">Последний визит: 23 декабря 2025 г.</p>
            </section>
            <section class="profile-content__main">
                <div class="profile-content__info">
                    <p class="profile-content__text">Телефон: +7 (999) 123-45-67</p>
                    <p class="profile-content__text">Email: agaev.ramazan@example.com</p>
                </div>
                <div class="profile-content__actions">
                    <UiButton
                        text="Редактировать профиль"
                        color="active"
                    />
                    <UiButton
                        text="Выйти из аккаунта"
                        color="danger"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
.page {
    &__content {
        max-width: 720px;
        margin: 0 auto;
        padding: $padding-6x $padding-4x $padding-6x;
    }
}

.profile-content {
    padding: 0 $padding-3x;
    animation: modal-top 0.4s ease forwards;

    &__header {
        padding-bottom: $padding-6x;
        border-bottom: 1px solid $color-white;
    }

    &__name {
        font-weight: 500;
        font-size: $font-size-7x;
        line-height: $line-height-8x;
        margin-bottom: 12px;
    }

    &__text {
        font-weight: 400;
        font-size: $font-size-3x;
        line-height: $line-height-5x;
        margin-bottom: 6px;
    }

    &__main {
        padding-top: $padding-6x;
        display: flex;
        flex-direction: column;
        gap: $gap-6x;
    }

    &__info {
        display: flex;
        flex-direction: column;
        gap: $gap-2x;
    }

    &__actions {
        display: flex;
        flex-direction: column;
        gap: $gap-4x;
        margin-top: 36px;
    }
}
</style>
