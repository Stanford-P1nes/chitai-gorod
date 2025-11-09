import { defineEventHandler  } from 'h3'
import type { Product } from '~/types/product';
import { products } from '~/data/products';

export default defineEventHandler((): Product[] => {
    console.log('Конечная точка API вызывается и возвращает:', products);
    return products;
});