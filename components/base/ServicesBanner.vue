<template>
  <base-section space="0">
    <v-img
      :src="src"
     :height="this.$vuetify.breakpoint.lg||this.$vuetify.breakpoint.md?710:500"
      class="grey lighten-5"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="green"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    <transition name="fade">
      <div
        class="bannerDown text-center white--text d-flex flex-column justify-space-around"
      >
        <div>
          <p class="text-h5">{{ name }}</p>
        </div>
        <div>
          <p class="text-h6">{{ text }}</p>
        </div>
      </div>
    </transition>
  </base-section>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  },
};
</script>
<style scoped>
.bannerDown {
  background: #21619a;
  width: 100%;
  height: 131px;
  position: relative;
  top: -2px;
}
</style>
