<template>
  <v-app>
    <v-main>
      <!-- <SystemBar v-if="$vuetify.breakpoint.mdAndUp"></SystemBar> -->
      <app-bar block search />
      <base-view />
      <settings />
      <!-- <nuxt /> -->
    </v-main>
  </v-app>
</template>
<script>
export default {
  components: {
    // SystemBar: () => import("~/components/base_layout/SystemBar"),
    AppBar: () => import("~/components/base_layout/AppBar"),
    BaseView: () => import("~/components/base_layout/View"),
    Settings: () => import("~/components/base_layout/Settings")
  }
};
</script>
<style lang="scss">
html {
  overflow-x: hidden;
}
</style>
