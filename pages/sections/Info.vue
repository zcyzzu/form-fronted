<template>
  <base-section class="offblack" space="56">
    <v-theme-provider dark>
      <v-row
        no-gutters
        class="px-12"
        align="start"
        justify="center"
      >
        <v-col
          cols="12"
          md="6"
          class="px-3"
        >
          <base-subheading :title="`关 于 我 们`" />
          <base-divider
            color="white"
            align="left"
          />
          <base-body text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus varius, malesuada nulla sed, ultrices est. Proin sed nisl tortor. Sed ex mi, volutpat et lobortis sit amet, fringilla at leo." />
        </v-col>
        <!-- <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="3"
          class="px-3"
        >
          <base-subheading title="最 新 动 态" />
          <base-divider
            color="white"
            align="left"
          />
          <template v-for="(news, i) in appData.recentNews">
            <base-body
              :key="`news-text-${i}`"
              tag="div"
              space="0"
              class="py-3"
              :text="news"
            />
            <v-divider :key="`news-divider-${i}`" />
          </template>
        </v-col> -->
        <!-- <v-col
          v-if="$vuetify.breakpoint.mdAndUp"
          cols="3"
          class="px-3"
        >
          <base-subheading title="最 新 文 章" />
          <base-divider
            color="white"
            align="left"
          />
          <template v-for="(post, i) in appData.recentPosts">
            <v-row :key="`post-row-${i}`">
              <v-col
                v-if="$vuetify.breakpoint.mdAndUp"
                cols="3"
              >
                <base-avatar
                  :key="`post-date-${i}`"
                  color="primary"
                  outlined
                  size="60"
                  class="ma-2"
                  :text="post.date"
                />
              </v-col>
              <v-col
                cols="12"
                md="9"
              >
                <base-body
                  :key="`post-text-${i}`"
                  tag="span"
                  space="0"
                  class="py-3"
                  :text="post.text"
                />
              </v-col>
            </v-row>
            <v-divider
              :key="`divider-${i}`"
              color="grey"
              max-width="100%"
            />
          </template>
        </v-col> -->
        <v-col
          cols="12"
          md="6"
          class="px-3"
        >
          <base-subheading title="联 系 我 们" />
          <base-divider
            color="white"
            align="left"
          />
          <!-- <base-subtitle
            title="Phone:"
            weight="bold"
          /> -->
          <base-body
            space="2"
            text="西安极亿智数科技信息咨询有限公司"
          />
          <!-- <base-subtitle
            title="Email:"
            weight="bold"
          /> -->
          <base-body
            space="2"
            :text="`陕西省西安市高新区财富中心`"
          />
          <v-img :src="require(`~/assets/code.jpeg`)"
          max-height="100"
          max-width="100"
          >
          </v-img>
          <!-- <base-subtitle
            title="微信公众号:"
            weight="bold"
          />
          <base-body
            space="2"
            text="云导师在线辅导平台"
          /> -->
          <!-- <base-subheading title="关 注 我 们" />
          <base-divider
            color="white"
            align="left"
          /> -->
          <!-- <base-btn
            v-for="media in appData.socialLinks"
            :key="media.link"
            :href="media.link"
            target="_blank"
            class="ma-1"
            min-width="40px"
            width="40px"
            depressed
            :color="media.color"
            :icon="media.icon"
          /> -->
        </v-col>
      </v-row>
    </v-theme-provider>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionInfo',
    data() {
      return {
        src:require("~/assets/code.jpeg")
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
