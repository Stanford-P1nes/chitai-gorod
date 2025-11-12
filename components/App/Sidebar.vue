<script setup lang="ts">
import { ref } from 'vue';
import { useSidebar } from '~/composables/useSidebar';
import { categories } from '~/data/categories';

const { isSidebarOpen, closeSidebar } = useSidebar();

const click = ref<string | null>(null);
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
                    @click="click = category.id"
                    class="sidebar__route"
                    :style="`--i:${idx}`"
                >
                    <UiButton :text="category.title" />

                    <ul v-if="click === category.id">
                        <li
                            v-for="(child, idx) in category.children"
                            :key="child.id"
                            class="sidebar__route sidebar__route--inner"
                            :style="`--i:${idx}`"
                        >
                            <router-link :to="`/category/${category.slug}/${child.slug}`">
                                <UiButton :text="child.title" />
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
            <button class='sidebar__button' @click='closeSidebar'></button>
        </aside>
    </transition>
</template>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
    transition: transform .4s ease, opacity .4s ease;
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
    width: 40%;
    @include LampEffect($b-r: $border-r-md, $overflow: visible);
    margin: 10px;
    z-index: 10000;

    &__wrapper {
        padding: $padding-sm;
        display: flex;
        flex-direction: column;
    }

    &__route {
        opacity: 0;
        margin: 8px;
        animation: surfer 0.5s ease forwards;
        animation-delay: calc(var(--i) * 0.1s);
        width: max-content;

        &--inner {
            margin-left: 30px;
        }
    }

    &__button {
        position: absolute;
        top: 0;
        right: -30px;
        width: 24px;
        height: 24px;
        background-image: url('/ico/close.svg');
        background-size: cover;
        background-repeat: no-repeat;
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
