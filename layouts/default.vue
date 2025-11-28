<template>
    <AppHeader />
    <AppSidebar />
    <main>
        <div class="container">
            <slot />
        </div>
    </main>
    <UiDialog />
    <UiModal />
    <AppFooter />
</template>
