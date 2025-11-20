<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import { useModal } from '~/composables/useModal';

const { isModalOpen, modalContent, closeModal } = useModal();
</script>

<template>
    <transition name="modal">
        <article
            v-if="isModalOpen"
            class="ui-modal"
        >
            <AppAuthModal v-if="modalContent === 'Login'" />
            <AppOrdersModal v-if="modalContent === 'Orders'" />
            <AppFavoritesModal v-if="modalContent === 'Bookmarks'" />
            <AppBasketModal v-if="modalContent === 'Basket'" />

            <button
                class="ui-modal__button-close"
                @click="closeModal"
            >
                ✖
            </button>
        </article>
    </transition>
</template>

<style scoped lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: transform 0.4s ease, opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.ui-modal {
    position: fixed;
    left: calc(50% - 460px / 2);
    bottom: 0;
    width: 460px;
    @include LampEffect;
    z-index: 9000;

    &__button-close {
        position: absolute;
        right: $padding-lg;
        top: $padding-lg;
        width: 35px;
        height: 35px;
        border-radius: $border-r-xxl;
        @include LampEffect($b-r: $border-r-xxl, $bg: $color-active);
    }
}
</style>
