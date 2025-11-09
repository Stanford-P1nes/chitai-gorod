import { defineEventHandler } from 'h3';
import type { FooterData } from '~/types/footer';

export default defineEventHandler((): FooterData => {
    return {
        contacts: {
            phone: '8 988 644-87-39',
            links: [
                { title: 'Вопросы и ответы', to: '/faq' },
                { title: 'Поучаствовать в интервью', to: '/interview' },
            ],
            socials: [
                { icon: 'vk', url: 'https://vk.com/chitai_gorod' },
                { icon: 'instagram', url: 'https://instagram.com/chitai_gorod' },
                { icon: 'tiktok', url: 'https://tiktok.com/@chitai_gorod' },
                { icon: 'youtube', url: 'https://youtube.com/chitaigorod' },
                { icon: 'telegram', url: 'https://t.me/chitaigorod' },
            ],
        },
        columns: [
            {
                title: 'Интернет-магазин',
                links: [
                    { title: 'Акции', to: '/sale' },
                    { title: 'Распродажа', to: '/clearance' },
                    { title: 'Доставка и оплата', to: '/delivery' },
                    { title: 'Программа лояльности', to: '/loyalty' },
                    { title: 'Подарочные сертификаты', to: '/gift-cards' },
                    { title: 'Правила продажи', to: '/terms' },
                    { title: 'Политика конфиденциальности', to: '/privacy' },
                ],
            },
            {
                title: 'Розничная сеть',
                links: [
                    { title: 'Адреса магазинов', to: '/stores' },
                    { title: 'Книжный дозор', to: '/book-patrol' },
                    { title: 'О компании', to: '/about' },
                    { title: 'Читай-город для бизнеса', to: '/business' },
                    { title: 'Хотите у нас работать?', to: '/jobs' },
                ],
            },
            {
                title: 'Знаем, что почитать',
                links: [
                    { title: 'Скоро в продаже', to: '/coming-soon' },
                    { title: 'Эксклюзивные новинки', to: '/exclusive' },
                    { title: 'Лучшие из лучших', to: '/top' },
                    { title: 'Читай-журнал', to: '/magazine' },
                    { title: 'Книжные циклы', to: '/series' },
                    { title: 'Что ещё почитать?', to: '/recommendations' },
                ],
            },
        ],
        payment: ['mir', 'visa', 'mastercard'],
        note: {
            text: 'На информационном ресурсе применяются.',
            link: {
                title: 'рекомендательные технологии',
                to: '/',
            },
        },
    };
});
