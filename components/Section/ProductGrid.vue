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
}
</style>
