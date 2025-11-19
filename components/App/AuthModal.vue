<template>
    <div class="auth-content">
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
</template>

<style scoped lang="scss">
.auth-content {
    padding: 0 $padding-lg;

    &__header {
        padding: 36px 0 20px;
    }

    &__title {
        font-weight: 500;
        font-size: $font-size-xxl;
        line-height: $line-height-xxxl;
    }

    &__main {
        padding-bottom: 25px;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: $gap-xl;
        margin-bottom: 16px;
    }

    &__text {
        font-weight: 400;
        font-size: $font-size-md;
        line-height: $line-height-xl;
    }

    &__annotation {
        font-weight: 400;
        font-size: $font-size-md;
        line-height: $line-height-lg;
        color: $color-darkgray;
    }
}
</style>
