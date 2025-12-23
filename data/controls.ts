import type { Control } from '~/types/control';

export const controls: Control[] = [
    {
        id: 0,
        name: 'login',
        link: '/login',
        icon: '/ico/person.svg',
    },
    {
        id: 1,
        name: 'orders',
        link: '/orders',
        icon: '/ico/box.svg',
    },
    {
        id: 2,
        name: 'favorites',
        link: '/favorites',
        icon: '/ico/like.svg',
    },
    {
        id: 3,
        name: 'cart',
        link: '/cart',
        icon: '/ico/basket.svg',
    },
    // {
    //     id: 4,
    //     name: 'profile',
    //     link: '/profile',
    //     icon: '/ico/person.svg',
    // },
];