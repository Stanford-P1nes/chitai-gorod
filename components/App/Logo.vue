<template>
    <nuxt-link to='/' class="app-logo">
        <p class='app-logo__text'>ЧИ<span class='app-logo__accent'>Т</span>АЙ Г<span class='app-logo__accent'>О</span>Р<span class='app-logo__accent'>О</span>Д</p>
    </nuxt-link>
</template>

<style lang='scss' scoped>

.app-logo {
    width: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    &__text {
        font-family: $font-family-title;
        font-size: 24px;
        font-weight: 900;
        line-height: 29px;
    }

    &__accent {
        color: $color-orange;
    }
}

</style>