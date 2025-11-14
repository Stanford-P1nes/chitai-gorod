import type { Control } from '~/types/control';

export const controls: Control[] = [
    {
        id: 0,
        name: 'Login',
        link: '/',
        icon: '/ico/person.svg',
        alt: 'Иконка человечка',
    },
    {
        id: 1,
        name: 'Orders',
        link: '/',
        icon: '/ico/box.svg',
        alt: 'Иконка корбоки',
    },
    {
        id: 2,
        name: 'Bookmarks',
        link: '/',
        icon: '/ico/bookmark.svg',
        alt: 'Иконка закладки',
    },
    {
        id: 3,
        name: 'Basket',
        link: '/',
        icon: '/ico/basket.svg',
        alt: 'Иконка карзины',
    },
];