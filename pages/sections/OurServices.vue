<template>
  <base-section
    id="our-services"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="项 目 管 理"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />
        <base-body
        align="center"
        text="我们为不同方向论文提供最佳的课程组合"
      />
    </div>
    <v-row
      align="stretch"
      class="px-3 px-md-12"
    >
      <template v-for="(feature, i) in features">
        <v-col
          :key="i"
          cols="12"
          md="6"
          lg="6"
        >
          <base-feature-alt
            class="pa-1"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionOurServices',
    data () {
      return {
        features: [
          {
            icon: 'mdi-flash',
            title: '进度管理',
            text:`火电厂超低排放改造EPC项目进度管理研究 ,基于挣值法的项目成本进度管理研究,基于改进灰色关键链的项目进度管理研究`,
          },
          {
            icon: 'mdi-cog',
            outlined: true,
            title: '成本管理',
            text:"精益视角下的企业成本管理研究,A公司快速路维护项目成本管理研究,标准成本法与作业成本法结合的A公司成本管理应用研究"
          },
          {
            icon: 'mdi-responsive',
            avatarColor: 'offblack',
            outlined: true,
            title: '质 量 管 理',
            text:"A汽车零部件公司供应链质量管理优化研究,B工程建设项目全面质量管理的优化研究,C公司医疗产品开发项目质量管理研究"
          },
          {
            icon: 'mdi-face-agent',
            title: '风 险 管 理',
            text:"电网工程项目风险管理研究,基于项目产出的DB项目设计风险管理优化研究,A公司地铁项目BOT模式运营风险管理研究"
          },
          {
            icon: 'mdi-auto-fix',
            title: '采 购 管 理',
            avatarColor: '#0077b5',
            outlined: true,
            text:"A公司新产品开发项目采购管理问题及改进对策研究,火电建设项目物资采购管理JIT模式的应用,我国铁路工程项目物资采购管理研究"
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
