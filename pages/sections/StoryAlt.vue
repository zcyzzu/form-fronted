<template>
  <base-section id="story-alt" class="grey lighten-4" space="96" bspace="96">
    <v-row align="center" >
      <v-col cols="12" md="6">
        <v-img
          :min-height="$vuetify.breakpoint.mdAndUp ? '500px' : '200px'"
          :height="$vuetify.breakpoint.mdAndUp ? '500px' : '200px'"
          :min-width="$vuetify.breakpoint.mdAndUp ? '600px' : '300px'"
          :src="require('@/assets/about/clay-banks-LjqARJaJotc-unsplash.jpg')"
        />
      </v-col>
      <v-col cols="12" md="6" class="px-10">
        <base-heading
          class="font-weight-bold py-3"
          title="关 于 我 们"
          align="left"
        />
        <base-body
          text="  云导师在线辅导平台，依托于丰富的资源和高校，专业为企事业单位提供可行性分析报告，商业研报，商业计划书等咨询业务。
  与高校合作后，深刻理解学生对于论文无从下笔的烦恼，开始开辟新业务，发展致力于论文在线辅导教学，通过1对1线上视频辅导与讲解的辅导方式，让学生可以快速顺利完成自己的论文。
  我们拥有一批高学历，经验丰富的指导讲解老师，独立的工作平台，致力于为客户打造专业的线上辅导机构，优秀的学习平台，可以利于手机及电脑客户端随时随地的提供专属辅导解答服务。"
        />
        <base-btn rounded class="my-10 elevation-0 mx-1" depressed>
          <span class="font-weight-black text-none" v-text="'Learn More'" />
        </base-btn>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
export default {
  name: "SectionStoryAlt",
  data() {
    return {
      features: [
        {
          icon: "mdi-flash",
          title: "Fast",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis."
        },
        {
          icon: "mdi-cog",
          title: "Customizable",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis."
        },
        {
          icon: "mdi-responsive",
          title: "Responsive",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis."
        },
        {
          icon: "mdi-face-agent",
          title: "Friendly Support",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et ante a quam dignissim venenatis."
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
