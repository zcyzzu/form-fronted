<template>
  <base-section
    id="welcome-feature"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        :title="`辅 导 优 势`"
        align="center"
      />
      <base-divider
        color="primary"
        align="center"
      />
      <base-body
        align="center"
        text="这里来一句话的描述吗或者删掉？"
      />
    </div>
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(feature, i) in features">
        <v-col
          :key="i"
          cols="12"
          md="3"
        >
          <base-feature
            class="pa-3"
            v-bind="feature"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionWelcomeFeatures',
    data () {
      return {
        features: [
          {
            icon: 'remove_from_queue',
            title: '全面指导，互动指导',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉?这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
          {
            icon: 'local_post_office',
            title: '个人定制，专属服务',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉?这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
          {
            icon: 'exposure_plus_1',
            title: '强化能力，提升水平',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉?这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
