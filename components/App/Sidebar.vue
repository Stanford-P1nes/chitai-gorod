<script setup lang="ts">
import { ref } from 'vue';
import { useSidebar } from '~/composables/useSidebar';
import { categories } from '~/data/categories';

const { isSidebarOpen, closeSidebar } = useSidebar();

const click = ref<string | null>(null);
function toggleClick(e: any): void {
    if (click.value === e) {
        click.value = null;
    } else {
        click.value = e;
    }
}
</script>

<template>
    <transition name="slide">
        <aside
            v-if="isSidebarOpen"
            class="sidebar"
        >
            <ul class="sidebar__wrapper">
                <li
                    v-for="(category, idx) in categories"
                    :key="category.id"
                    @click="toggleClick(category.id)"
                    class="sidebar__item sidebar__item--upper"
                    :style="`--i:${idx}`"
                >
                    <UiButton
                        :text="category.title"
                        color="active"
                    />

                    <ul
                        v-if="click === category.id"
                        class="sidebar__wrapper sidebar__wrapper--inner"
                    >
                        <li
                            v-for="(child, idx) in category.children"
                            :key="child.id"
                            class="sidebar__item sidebar__item--inner"
                            :style="`--i:${idx}`"
                        >
                            <router-link :to="`/catalog/${category.slug}/${child.slug}/`">
                                <UiButton
                                    :text="child.title"
                                    color="active"
                                    @click="closeSidebar"
                                />
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>

            <UiButton
                variant="secondary"
                src="/ico/close.svg"
                alt="Иконка крестика"
                color="active"
                @click="closeSidebar"
                class="sidebar__button-close"
            ></UiButton>
        </aside>
    </transition>
</template>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: transform 0.4s ease, opacity 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    @include LampEffect($radius: $radius-2x, $overflow: visible);
    margin: 10px;
    z-index: 10000;

    @include media(tablet) {
        width: 100%;
        margin: 0;
        @include LampEffect($radius: 0);
    }

    &__wrapper {
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
        padding: $padding-4x;
        display: flex;
        flex-direction: column;
        gap: $gap-2x;

        @include media(tablet) {
            padding: $padding-2x;
        }

        &--inner {
            padding: 0;
            gap: $gap-2x;
            padding-left: $padding-2x;
            border-left: $border;
        }
    }

    &__item {
        opacity: 0;
        animation: surfer 0.5s ease forwards;
        animation-delay: calc(var(--i) * 0.1s);
        width: max-content;

        &--upper {
            display: flex;
            gap: 10px;

            @include media(tablet) {
                flex-direction: column;
            }
        }
    }

    &__button-close {
        position: absolute;
        top: 0;
        right: -50px;

        @include media(tablet) {
            padding: $padding-2x;
            top: 10px;
            right: 10px;
        }
    }

    @keyframes surfer {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
}
</style>
