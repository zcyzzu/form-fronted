<template>
  <base-section id="writeMenu" class="grey lighten-4" bspace="96">
    <v-card elevation="0" color="grey lighten-4">
      <base-heading
        class="font-weight-bold"
        title="专 注 四 大 类 专 业"
        align="center"
      />
      <base-divider color="primary" align="center" />
      <base-body
        align="center"
        class="px-5 "
        text="简单描述或者删除？简单描述或者删除？简单描述或者删除？"
      />
      <v-tabs v-model="tab" background-color="transparent" grow class="px-5 ">
        <v-tab v-for="item in items" :key="item" class="text-h6">
          {{ item }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(item, i) in text" :key="i">
          <div style="min-height:500px" class="d-flex justify-center">
            <v-img :src="item.src" eager width="40%"></v-img>
            <v-card elevation="0" class="d-flex flex-column" width="60%">
              <div
                v-for="(contents, index) in item.txt"
                :key="index"
                style="background:#f5f5f5"
              >
                <base-body align="center" :text="contents.content" />
              </div>
            </v-card>
          </div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <div class="d-flex justify-center">
      <base-btn
        rounded
        class="my-12 elevation-0 mx-1"
        depressed
        min-width="250"
        min-height="50"
        @click="sendMsg"
      >
        <span class="font-weight-black text-none" v-text="'咨询辅导顾问'" />
      </base-btn>
    </div>
    <base-btnMsg :dialog="dialogShow"></base-btnMsg>
  </base-section>
</template>
<script>
export default {
  name: "SectionOurTeam",
  data() {
    return {
      tab: null,
      dialogShow: false,
      items: ["基础指导套餐", "标准指导套餐", "高级指导套餐"],
      text: [
        {
          src: require("~/assets/projects/carlos-hevia-qhB6S2dts8A-unsplash.jpg"),
          txt: [
            { content: "选题辅导" },
            { content: "大纲辅导" },
            { content: "大纲修改辅导" },
            { content: "开题辅导" },
            { content: "开题修改辅导" },
            { content: "写作辅导" },
            { content: "导师意见修改辅导" },
            { content: "盲审意见修改辅导" },
            { content: "答辩辅导" }
          ]
        },
        {
          src: require("~/assets/projects/cindy-chen-EP4VrAn-WaY-unsplash.jpg"),
          txt: [
            { content: "选题辅导" },
            { content: "大纲辅导" },
            { content: "大纲修改辅导" },
            { content: "开题辅导" },
            { content: "开题修改辅导" },
            { content: "中期辅导" },
            { content: "写作辅导" },
            { content: "导师意见修改辅导" },
            { content: "数据与案例分析辅导" },
            { content: "盲审意见修改辅导" },
            { content: "答辩课程及模拟辅导" }
          ]
        },
        {
          src: require("~/assets/projects/jamison-mcandie-waZEHLRP98s-unsplash.jpg"),
          txt: [
            { content: "选题辅导" },
            { content: "大纲辅导" },
            { content: "大纲修改辅导" },
            { content: "大摘要辅导" },
            { content: "文献综述辅导" },
            { content: "开题辅导" },
            { content: "开题修改辅导" },
            { content: "开题答辩意见修改辅导" },
            { content: "中期辅导" },
            { content: "写作辅导" },
            { content: "导师意见修改辅导" },
            { content: "数据与案例分析辅导" },
            { content: "盲审意见修改辅导" },
            { content: "预答辩意见修改辅导" },
            { content: "答辩课程及模拟辅导" }
          ]
        }
      ]
    };
  },
  methods: {
    sendMsg() {
      this.dialogShow = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.basil {
  background-color: #fffbe6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>
