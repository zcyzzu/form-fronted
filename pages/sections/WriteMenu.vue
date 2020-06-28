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
    </v-card>
    <v-container
      id="home"
      class=" text-center mx-0 px-0 pt-0"
      style="max-width: none"
      tag="section"
    >
      <v-row justify="center">
        <base-pricing-plan
          class="mx-5 my-1"
          frequency="价格实惠，周期短，快速解决问题"
          :title="items[0]"
          :features="text[0].txt"
        >
        </base-pricing-plan>
        <base-pricing-plan
          class="mx-5 my-1"
          :title="items[1]"
          frequency="性价比高，包含数据分析及答辩模拟"
          :features="text[1].txt"
        >
        </base-pricing-plan>
        <base-pricing-plan
          class="mx-5 my-1"
          :title="items[2]"
          frequency="深入学习各项技能，顺利通过答辩"
          :features="text[2].txt"
        >
        </base-pricing-plan>
      </v-row>
    </v-container>
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
    <base-btnMsg :dialog="dialogShow" @writeCancel="writeCancel"></base-btnMsg>
  </base-section>
</template>
<script>
export default {
  name: "SectionOurTeam",
  data() {
    return {
      planFeatures: [
        "Wordpress",
        "HTML5 & CSS3",
        "PSD Files",
        "Unlimited Support"
      ],
      // -------------------------------------
      tab: null,
      dialogShow: false,
      items: ["基础指导套餐", "标准指导套餐", "高级指导套餐"],
      text: [
        {
          txt: [
            "选题辅导",
            "大纲辅导",
            "大纲修改辅导",
            "开题修改辅导",
            "写作辅导",
            "导师意见修改辅导",
            "盲审意见修改辅导",
            "答辩辅导",
          ]
        },
        {
          txt: [
            "选题辅导",
            "大纲辅导",
            "大纲修改辅导",
            "开题辅导",
            "开题修改辅导",
            "中期辅导",
            "写作辅导",
            "导师意见修改辅导",
            "数据与案例分析辅导",
            "盲审意见修改辅导",
            "答辩课程及模拟辅导"
          ]
        },
        {
          txt: [
            "选题辅导",
            "大纲辅导",
            "大纲修改辅导",
            "大摘要辅导",
            "文献综述辅导",
            "开题辅导",
            "开题修改辅导",
            "开题答辩意见修改辅导",
            "中期辅导",
            "写作辅导",
            "导师意见修改辅导",
            "数据与案例分析辅导",
            "盲审意见修改辅导",
            "预答辩意见修改辅导",
            "答辩课程及模拟辅导"
          ]
        }
      ]
    };
  },
  methods: {
    sendMsg() {
      this.dialogShow = true;
    },
    writeCancel() {
      this.dialogShow = false;
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
