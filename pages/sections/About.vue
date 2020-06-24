<template>
  <base-section space="0">
    <base-servicesBanner :src="src" :name="name" :text="text"></base-servicesBanner>
  </base-section>
</template>
<script>
export default {
  data() {
    return {
      src: require("~/assets/projects/robson-hatsukami-morgan-RTKaEcGKarQ-unsplash.jpg"),
      name: "关 于 我 们",
      text: "我 们 是 xxxxxxxxxxx"
    };
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
