<template>
  <base-section space="0">
    <base-servicesBanner :src="src" :name="name" :text="text"></base-servicesBanner>
  </base-section>
</template>
<script>
export default {
  data() {
    return {
      src:require('~/assets/projects/kimson-doan-AZMmUy2qL6A-unsplash.jpg'),
      name:"专 属 方 案，专 属 定 制",
      text:"零 基 础 把 脉 企 业 发 展"
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
