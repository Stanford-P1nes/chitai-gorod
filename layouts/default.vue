<template>
    <AppHeader />
    <AppSidebar />
    <main>
        <div class='container'>
            <slot />
        </div>
    </main>
    <UiModal />
    <AppFooter />
</template>