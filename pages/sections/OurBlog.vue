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
            title: '政 府 机 关 方 向',
            text:` 地方政府处置公共危机事件策略研究,A市共享单车发展中的政府治理问题研究,精准扶贫背景下B县政府电商扶贫研究`,
          },
          {
            icon: 'mdi-cog',
            outlined: true,
            title: '财 政 方 向',
            text:"A污水处理厂PPP项目物有所值（VFM）定量评价研究,政府补助对上市公司财务效果的影响—以B企业为例,PPP模式下C市轨道交通项目建设政府监管研究"
          },
          {
            icon: 'mdi-responsive',
            avatarColor: 'offblack',
            outlined: true,
            title: '公共服务方向',
            text:"政府公共服务满意度研究-以A市为例,基于模糊综合评价法的旅游公共服务质量研究,乡镇政府公共服务能力提升研究"
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
