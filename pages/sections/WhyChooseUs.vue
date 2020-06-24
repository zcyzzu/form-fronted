<template>
  <base-section
    id="why-choose-us"
    class="grey lighten-4"
    bspace="96"
  >
    <v-row
      no-gutters
      class="px-12"
      align="start"
      justify="center"
    >
      <v-col
        cols="12"
        md="6"
        class="px-3 pb-3"
      >
        <base-subheading
          title="解 答 你 的 疑 问"
          class="primary--text"
        />
        <base-divider
          color="white"
          align="left"
        />
        <v-expansion-panels>
          <v-expansion-panel
            v-for="(reason, i) in reasons"
            :key="i"
          >
            <v-expansion-panel-header>
              <span v-text="reason.title" />
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat>
                <v-card-text v-text="reason.description" />
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        cols="12"
        md="6"
        class="px-3 py-1"
      >
        <base-subheading
          title="其他什么东西或者删除"
          class="primary--text"
        />
        <base-divider
          color="white"
          align="left"
        />
        <template v-for="(post, i) in appData.blogPosts">
          <blog-post
            :key="i"
            :post="post"
          />
        </template>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  import BlogPost from '@/components/blog/Post'

  export default {
    name: 'SectionWhyChooseUs',
    components: {
      BlogPost,
    },
    data () {
      return {
        reasons: [
          { title: '我已经有学校导师了，为什么还要云导师？', description: '您的学校导师在学术能力上和专业知识方面都经过了长期积累，对于学校导师的意见和建议，您可能无法完全理解。另外你的导师也可能由于出国交流，参加学术会议等原因无法随时解答您的问题。云导师会根据您的能力水平，定制专业指导计划，分析解释导师修改意见，解答您对论文的疑惑，帮助您完成论文。' },
          { title: '我只是想要顺利毕业，为什么不选择代笔？', description: '教育部每年都会抽检全国院校毕业论文，对于抽检不合格的论文会撤销其学位。高校也会因为学术不端问题撤销学生学位。例如翟天临、刘梦洁都因论文抄袭被撤销学位。随着我国高等教育质量的不断提高，国家也越来越重视学术诚信，学术不端行为是个人人生发展道路上的一颗定时炸弹，随时都会给个人诚信带来恶劣影响。云导师承诺绝不参与代写行为，也鼓励大家正确看待学历学位，避免因为一时急功近利选择代写毁掉自己整个人生规划。' },
          { title: '云导师如何指导我？', description: '全程采用1对1在线互动指导形式，实时沟通，指导课程中，可以有效的根据您提出的问题有针对性的指导。' },
        ],
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
