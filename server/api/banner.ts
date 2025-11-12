import { defineEventHandler } from 'h3';
import type { Banner } from '~/types/banner';
import { banners } from '~/data/banners';

export default defineEventHandler((): Banner[] => {
    return banners;
})