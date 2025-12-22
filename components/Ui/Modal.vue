<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue';
import { useModal } from '~/composables/useModal';

const { isModalOpen, modalContent, closeModal } = useModal();
</script>

<template>
    <transition name="modal">
        <article
            v-if="isModalOpen"
            class="ui-modal"
        >
            <AppAuthModal v-if="modalContent === 'login'" />
            <AppOrdersModal v-if="modalContent === 'orders'" />
            <AppFavoritesModal v-if="modalContent === 'favorites'" />
            <AppBasketModal v-if="modalContent === 'cart'" />

            <UiButton
                variant="secondary"
                src="/ico/close.svg"
                alt="Иконка крестик"
                color="active"
                @click="closeModal"
                class="ui-modal__button-close"
            />
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

    @include media(mobile) {
        left: calc(50% - 100% / 2);
        width: 100%;
        @include LampEffect($radius: 0);
    }

    &__button-close {
        position: absolute;
        right: $padding-6x;
        top: $padding-6x;
        width: 35px;
        height: 35px;
        border-radius: $radius-3x;
        @include LampEffect($radius: $radius-3x);
    }
}
</style>
