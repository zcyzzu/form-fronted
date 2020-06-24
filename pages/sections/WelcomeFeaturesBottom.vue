<template>
  <base-section
    id="welcome-feature"
  >
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        :title="`指 导 流 程`"
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
          md="2"
        >
          <base-feature
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
    name: 'SectionWelcomeFeatures',
    data () {
      return {
        features: [
          {
            icon: 'account_box',
            title: '报名登记',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
          {
            icon: 'chat',
            title: '制定指导计划',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
          {
            icon: 'import_contacts',
            title: '预约讲师',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
          {
            icon: 'font_download',
            title: '全流程指导',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
          {
            icon: 'insert_drive_file',
            title: '完成毕业',
            text:"这里是详细的描述或者删掉?这里是详细的描述或者删掉"
          },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
