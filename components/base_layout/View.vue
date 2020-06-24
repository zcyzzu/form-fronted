<template>
  <v-main class="pt-0">
    <v-app>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-app>
  </v-main>
</template>

<script>
export default {
  name: "BaseView"
};
</script>
