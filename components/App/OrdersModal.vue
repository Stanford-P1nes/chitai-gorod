<template>
    <div class="orders-content">
        <section class="orders-content__header">
            <div class='orders-content__top'>
                <strong class="orders-content__navigate">Заказы</strong>
                <span class="orders-content__between-element"></span>
                <strong class="orders-content__navigate">Покупки</strong>
            </div>
            <div class='orders-content__bottom'>
                <UiButton text='Актуальные' color='active' />
                <UiButton text='Завершённые' color='unactive' />
            </div>
        </section>
        <section class="orders-content__main"></section>
    </div>
</template>

<style scoped lang="scss">
.orders-content {
    padding: 0 $padding-lg;
    animation: modal-right 0.4s ease forwards;

    &__header {
        padding: 36px 0 20px;
    }
    
    &__top {
        display: flex;
        align-items: center;
        gap: $gap-lg;
        margin-bottom: 20px;
    }
    
    &__bottom {
        display: flex;
        align-items: center;
        gap: $gap-lg;
    }

    &__navigate {
        font-weight: 700;
        font-size: $font-size-xxl;
        line-height: $line-height-xxxl;
        cursor: pointer;
    }
    
    &__between-element {
        display: inline-block;
        width: 8px;
        height: 8px;
        background-color: $color-text;
        border-radius: $border-r-xxl;
    }
    
    &__main {
        padding-top: 5px;
        padding-bottom: 25px;
        overflow-y: auto;
        height: 300px;
    }
}
</style>
