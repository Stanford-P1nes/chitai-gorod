<template>
    <div class="app-social-links">
        <a
            href=""
            class="app-social-links__icon app-social-links__icon--vk"
        ></a>
        <a
            href=""
            class="app-social-links__icon app-social-links__icon--instagram"
        ></a>
        <a
            href=""
            class="app-social-links__icon app-social-links__icon--tiktok"
        ></a>
        <a
            href=""
            class="app-social-links__icon app-social-links__icon--youtube"
        ></a>
        <a
            href=""
            class="app-social-links__icon app-social-links__icon--telegram"
        ></a>
    </div>
</template>

<style lang="scss">
.app-social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;

    &__icon {
        width: 25px;
        height: 25px;

        &--vk {
            background-image: url('@/public/ico/vk.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }
        &--instagram {
            background-image: url('@/public/ico/instagram.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }
        &--tiktok {
            background-image: url('@/public/ico/tiktok.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }
        &--youtube {
            background-image: url('@/public/ico/youtube.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }
        &--telegram {
            background-image: url('@/public/ico/telegram.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }
    }
}
</style>
