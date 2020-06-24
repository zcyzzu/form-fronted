<template>
  <base-section space="0">
    <base-servicesBanner :src="src" :name="name" :text="text"></base-servicesBanner>
  </base-section>
</template>
<script>
export default {
  data() {
    return {
      src:require('~/assets/projects/mike-erskine-S_VbdMTsdiA-unsplash.jpg'),
      name:"分 析 把 握 导 师 要 求",
      text:"深 入 解 读 政 策 规 范"
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
