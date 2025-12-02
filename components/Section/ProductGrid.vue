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
    padding: 0 $padding-2x;
    
    @include media(laptop) {
        grid-template-columns: repeat(4, 1fr);
    }

    @include media(tablet) {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    @include media(mobile) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
