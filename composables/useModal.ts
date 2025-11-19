import { ref } from 'vue';

const isModalOpen = ref(false);
const modalContent = ref<string | null>(null); // какой модал показывать

export function useModal() {
    const openModal = (name: string) => {
        modalContent.value = name;
        isModalOpen.value = true;
    };

    const closeModal = () => {
        isModalOpen.value = false;
        modalContent.value = null;
    };

    return {
        isModalOpen,
        modalContent,
        openModal,
        closeModal,
    };
}