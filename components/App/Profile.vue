<template>
    <div class="profile-content">
        <section class="profile-content__header">
            <h3 class="profile-content__name">Агаев Рамазан</h3>
            <p class="profile-content__text">
                Зарегистрирован 1 ноября 2025 г.
            </p>
            <p class="profile-content__text">
                Последний визит: 23 декабря 2025 г.
            </p>
        </section>
        <section class="profile-content__main">
            <div class="profile-content__info">
                <p class="profile-content__text">Телефон: +7 (999) 123-45-67</p>
                <p class="profile-content__text">Email: agaev.ramazan@example.com</p>
            </div>
            <div class="profile-content__about-me">
                <h4 class="profile-content__about-me-title">Обо мне</h4>
                <p class="profile-content__text">
                    Люблю читать фантастику и исторические романы. Часто посещаю книжные
                    мероприятия и встречи с авторами.
                </p>
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
</template>