import { defineEventHandler } from 'h3';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(() => {
    return {
        runtimePublic: useRuntimeConfig().public,
        envRaw: {
            NUXT_PUBLIC_SUPABASE_URL: process.env.NUXT_PUBLIC_SUPABASE_URL,
            NUXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NUXT_PUBLIC_SUPABASE_ANON_KEY,
            SUPABASE_URL: process.env.SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY,
        },
    };
});
