<template>
  <base-section id="our-services">
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="项 目 管 理"
        align="center"
      />
      <base-divider color="primary" align="center" />
      <base-body align="center" text="我们为不同方向论文提供最佳的课程组合" />
    </div>
    <v-row align="stretch" class="px-3 px-md-12">
      <template v-for="(feature, i) in features">
        <v-col :key="i" cols="12" md="6" lg="6">
          <base-feature-alt class="pa-1" v-bind="feature" />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
export default {
  name: "SectionOurServices",
  data() {
    return {
      features: [
        {
          icon: "mdi-flash",
          title: "风 险 管 理 方 向",
          text: ` A公司市场营销策略研究,B公司美容产品营销策略优化研究,C商业银行上海分行个人理财产品市场营销策略研究`
        },
        {
          icon: "mdi-cog",
          outlined: true,
          title: "发 展 战 略 方 向",
          text: "A医疗器械公司发展战略研究,B装配式建筑工程有限公司发展战略研究,C能源公司发展战略研究"
        },
        {
          icon: "mdi-responsive",
          avatarColor: "offblack",
          outlined: true,
          title: "问 题 对 策 方 向",
          text:
            "A公司客户关系管理问题及对策研究,B公司管理层薪酬问题与对策研究,C职业学院人力资源管理问题与对策研究"
        },
        {
          icon: "mdi-face-agent",
          title: "评 价 指 标 体 系 方 向",
          text:
            "A银行资产管理业务风险评价体系研究,B公司员工绩效管理研究,互联网企业并购过程中财务风险评价研究"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
