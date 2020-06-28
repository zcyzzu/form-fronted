<template>
  <base-section space="0">
    <v-img eager :src="src" min-height="600" max-height="710">
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
  }
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
