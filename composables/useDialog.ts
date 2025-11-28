import { ref } from 'vue';

const isDialogOpen = ref(false);
const dialogContent = ref<string[]>([]);

type PossibleCover = string | { img?: string } | null | undefined;

export function useDialog() {
    const openDialog = (data?: PossibleCover[]) => {
        const normalized: string[] = Array.isArray(data)
            ? data
                  .map(d => {
                      if (!d) return '';
                      return typeof d === 'string' ? d : (d as { img?: string }).img ?? '';
                  })
                  .filter(Boolean)
            : [];

        dialogContent.value = normalized;

        // open dialog only if we have at least one image
        isDialogOpen.value = normalized.length > 0;
    };

    const closeDialog = () => {
        isDialogOpen.value = false;
        dialogContent.value = [];
    };

    return {
        isDialogOpen,
        openDialog,
        closeDialog,
        dialogContent,
    };
}
