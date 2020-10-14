<template>
    <div class="flex flex-col w-full min-h-screen">
        <TheNavbar />

        <main class="flex-1 w-full">
            <slot />
        </main>

        <TheFooter />
    </div>
</template>

<script>
import TheNavbar from '@/components/layout/TheNavbar';
import TheFooter from '@/components/layout/TheFooter';

export default {
    name: 'DefaultLayout',
    components: {
        TheNavbar,
        TheFooter
    }
};
</script>
