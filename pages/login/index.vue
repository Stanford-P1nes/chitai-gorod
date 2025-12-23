<template>
    <div class="page">
        <div class="auth-content page__content">
            <section class="auth-content__header">
                <h3 class="auth-content__title">Вход и регистрация</h3>
            </section>
            <section class="auth-content__main">
                <div class="auth-content__form">
                    <p class="auth-content__text">
                        Чтобы войти или зарегистрироваться, укажите номер телефона.
                    </p>
                    <UiInput />
                    <UiButton text="Получить код" />
                </div>
                <p class="auth-content__annotation">
                    Нажимая кнопки «Получить код», вы даете согласие на обработку своих персональных
                    данных в соответствии с Политикой обработки ПД
                </p>
            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
.page {
    &__content {
        max-width: 720px;
        margin: 0 auto;
        padding: $padding-6x $padding-4x $padding-6x;
    }
}

.auth-content {
    padding: 0 $padding-3x;
    animation: modal-top 0.4s ease forwards;

    &__header {
        padding: 36px 0 20px;
    }

    &__title {
        font-weight: 500;
        font-size: $font-size-6x;
        line-height: $line-height-7x;
    }

    &__main {
        padding-bottom: 25px;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: $gap-5x;
        margin-bottom: 16px;
    }

    &__text {
        font-weight: 400;
        font-size: $font-size-3x;
        line-height: $line-height-5x;
    }

    &__annotation {
        font-weight: 400;
        font-size: $font-size-3x;
        line-height: $line-height-4x;
    }
}
</style>
