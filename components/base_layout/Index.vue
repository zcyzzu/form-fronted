<template>
  <v-app>
    <system-bar v-if="$vuetify.breakpoint.mdAndUp" />
    <app-bar
      block
      search
    />
    <base-view />
    <settings />
  </v-app>
</template>

<script>
  export default {
    name: 'BaseLayout',
    components: {
      SystemBar: () => import('@/layouts/base/SystemBar'),
      AppBar: () => import('@/layouts/base/AppBar'),
      BaseView: () => import('@/layouts/base/View'),
      Settings: () => import('@/layouts/base/Settings'),
    },
  }
</script>
