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
            title: '风 险 管 理 方 向',
            text:`基于KMV模型的A银行信用风险评估研究,商业银行中小企业贷款风险管理研究,外生冲击对股票市场影响及股市风险管理研究`,
          },
          {
            icon: 'mdi-cog',
            outlined: true,
            title: '产 业 经 济 方 向',
            text:"A省旅游产业经济效应实证分析,外商直接投资对产业结构升级的影响,出口退税政策对产业经济的影响及其对策"
          },
          {
            icon: 'mdi-responsive',
            avatarColor: 'offblack',
            outlined: true,
            title: '股 票 投 资 方 向',
            text:"基于Copula模型的股票与债券投资组合策略研究,金融危机背景下我国股票市场风险收益关系研究,量化方法在股票配对交易和指数预测中的应用"
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
