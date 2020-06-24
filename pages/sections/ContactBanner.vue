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
      name:"轻 松 面 对 答 辩",
      text:"走 出 眼 花 缭 乱 的 金 融 统 计 模 型"
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
