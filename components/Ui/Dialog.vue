<script setup lang="ts">
import { useSwiper } from '#imports';
import { ref } from 'vue';
import { useDialog } from '~/composables/useDialog';

const { isDialogOpen, closeDialog, dialogContent } = useDialog();

const dialogSwiper = ref(null);

const dialogSwiperInstance = useSwiper(dialogSwiper, {
    effect: 'creative',
    loop: false,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
});
</script>

<template>
    <transition name="modal">
        <dialog
            v-if="isDialogOpen"
            class="dialog-images"
            open="true"
        >
            <div class="dialog-images__inner">
                <ClientOnly>
                    <swiper-container
                        ref="dialogSwiper"
                        :slides-per-view="1"
                        class="dialog-images__swiper"
                    >
                        <swiper-slide
                            v-for="(img, idx) in dialogContent"
                            :key="idx"
                            class="dialog-images__slide"
                        >
                            <img
                                :src="img"
                                alt="Картинка"
                                class="dialog-images__image"
                            />
                        </swiper-slide>
                    </swiper-container>
                    <!-- BUTTONS -->
                    <template v-if="dialogContent?.length > 1">
                        <button
                            class="swiper-basic-button swiper-basic-button--left"
                            @click="dialogSwiperInstance?.prev?.()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--left"
                            />
                        </button>
                        <button
                            class="swiper-basic-button swiper-basic-button--right"
                            @click="dialogSwiperInstance?.next?.()"
                        >
                            <img
                                src="/ico/arrow.svg"
                                alt="Стрелка направо"
                                class="swiper-basic-button__img swiper-basic-button__img--right"
                            />
                        </button>
                    </template>
                </ClientOnly>
                <UiButton
                    variant="secondary"
                    src="/ico/close.svg"
                    alt="Иконка крестик"
                    color="active"
                    class="dialog-images__button-close"
                    @click="closeDialog"
                />
            </div>
        </dialog>
    </transition>
</template>

<style scoped lang="scss">
.modal-enter-active,
.modal-leave-active {
    transition: transform 0.2s ease, opacity 0.1s ease;
}

.modal-enter-from,
.modal-leave-to {
    transform: scale(1, 1.1);
    opacity: 0;
}

.dialog-images {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: transparent;
    backdrop-filter: blur(2px);
    z-index: 10000;

    &__inner {
        position: relative;
        width: 500px;
        height: 600px;
        @include LampEffect($b-r: $radius-2x, $overflow: visable);
    }

    &__swiper {
        height: 100%;
    }

    &__slide {
        padding: 16px;
        height: 100%;
    }

    &__image {
        object-fit: contain;
        height: 100%;
        user-select: none;
    }

    &__button-close {
        position: absolute;
        top: 0;
        left: 101%;
    }
}
</style>
