<script setup lang="ts">
defineProps({
    width: {type: String, default: '100%'},
    height: {type: String, default: '100px'}
});
</script>

<template>
    <div
        class="app-skeleton"
        :style="{ width, height }"
    ></div>
</template>

<style scoped lang="scss">
.app-skeleton {
    @include LampEffect($bg: linear-gradient(90deg, $color-background 25%, $color-bg-components 50%, $color-background 75%));
    background-size: 200% 100%;
    animation: shine 1.5s infinite linear;
}
@keyframes shine {
    from {
        background-position: 200% 0;
    }
    to {
        background-position: -200% 0;
    }
}
</style>
