import type { Control } from '~/types/control';

export const controls: Control[] = [
    {
        id: 0,
        name: 'Войти',
        link: '/',
        icon: '/ico/person.svg',
        alt: 'Иконка человечка'
    },
    {
        id: 1,
        name: 'Заказы',
        link: '/',
        icon: '/ico/box.svg',
        alt: 'Иконка корбоки'
    },
    {
        id: 2,
        name: 'Закладки',
        link: '/',
        icon: '/ico/bookmark.svg',
        alt: 'Иконка закладки'
    },
    {
        id: 3,
        name: 'Корзина',
        link: '/',
        icon: '/ico/basket.svg',
        alt: 'Иконка карзины'
    },
];