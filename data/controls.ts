import type { Control } from '~/types/control';

export const controls: Control[] = [
    {
        id: 0,
        name: 'login',
        link: '/',
        icon: '/ico/person.svg',
        alt: 'Иконка человечка',
    },
    {
        id: 1,
        name: 'orders',
        link: '/',
        icon: '/ico/box.svg',
        alt: 'Иконка корбоки',
    },
    {
        id: 2,
        name: 'favorites',
        link: '/',
        icon: '/ico/like.svg',
        alt: 'Иконка закладки',
    },
    {
        id: 3,
        name: 'cart',
        link: '/',
        icon: '/ico/basket.svg',
        alt: 'Иконка карзины',
    },
];