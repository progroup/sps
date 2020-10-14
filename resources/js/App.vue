<template>
    <div id="app">
        <Component :is="layout">
            <RouterView :key="$route.fullPath" />
        </Component>

        <PortalTarget name="modals" />
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        layout () {
            return this.$route.meta.layout || 'DefaultLayout';
        }
    },
};
</script>
