<template>
    <section class="product-grid">
        <slot />
    </section>
</template>

<style scoped lang="scss">
.product-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    
    @include media(laptop) {
        height: 300px;
        grid-template-columns: repeat(4, 1fr);
    }

    @include media(tablet) {
        height: 240px;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    @include media(mobile) {
        height: 210px;
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
