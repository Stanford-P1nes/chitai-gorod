import type { User } from '~/types/user';
import { users } from '~/data/users';
import { ref, nextTick } from 'vue';
import { defineStore } from 'pinia';
import { useSupabase } from '~/composables/useSupabase';
import { transformKeysToCamel } from '~/utils/transformKeys';

export const useUsersStore = defineStore('users', () => {
    const { supabase } = useSupabase();
    const usersData = ref<User[]>([]);
    const loadingUsers = ref(false);

    async function getUsers() {
        loadingUsers.value = true;
        nextTick();

        const setFallbackUsers = () => {
            usersData.value = users;
        };

        try {
            const { data, error } = await supabase.from('users').select('*');

            if (error) {
                console.error('Supabase error:', error);
                setFallbackUsers();
                return;
            }

            usersData.value = transformKeysToCamel<User[]>(data);
        } catch (error) {
            console.error('Произошла ошибка во время получуния данных: ', error);
            
            setFallbackUsers();
        } finally {
            loadingUsers.value = false;
        }
    }

    return {
        usersData,
        loadingUsers,
        getUsers,
    };
});
