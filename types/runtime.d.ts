export {};

declare module 'nuxt/schema' {
    interface PublicRuntimeConfig {
        supabaseUrl: string;
        supabaseAnonKey: string;
    }
}

declare module '@nuxt/schema' {
    interface PublicRuntimeConfig {
        supabaseUrl: string;
        supabaseAnonKey: string;
    }
}
