<template>
  <base-section space="0">
    <base-servicesBanner :src="src" :name="name" :text="text"></base-servicesBanner>
  </base-section>
</template>
<script>
export default {
  data() {
    return {
      src:require('~/assets/projects/twitter-praizist-PDNc3fFFrYk-unsplash.jpg'),
      name:"掌 握 项 目 细 节",
      text:"用 心 解 读 每 一 个 项 目"
    }
  },
  
}
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
