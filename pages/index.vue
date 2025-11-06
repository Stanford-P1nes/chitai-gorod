<template>
    <div class="page">
        <!-- Главный банер -->
        <SectionMainBanner />
    </div>
</template>

<style lang="scss">
.page {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: $gap-page;
    border-radius: $border-r-xl;
    background-color: $color-white;
    padding: $padding-wrap;
}
</style>
