<template>
  <base-section
    id="stats"
    class="primary"
    space="0"
  >
    <v-row
      justify="center"
      align="center"
      class="px-10"
    >
      <template v-for="(stat, i) in stats">
        <v-col
          :key="i"
          cols="12"
          sm="6"
          md="3"
          class="text-center"
        >
          <base-stat
            class="pa-3"
            v-bind="stat"
          />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionStats',
    data () {
      return {
        stats: [
          { text: '正 式 营 业', number: '2015年', outlined: true, color: 'white' },
          { text: '各 专 业 讲 师', number: '54+', color: 'white' },
          { text: '辅 导 人 数', number: '5000+', outlined: true, color: 'white' },
          { text: '定 制 辅 导', number: '40+', color: 'white' },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
