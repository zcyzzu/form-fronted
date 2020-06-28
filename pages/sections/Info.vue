<template>
  <base-section class="offblack" space="56">
    <v-theme-provider dark>
      <v-row no-gutters class="px-0 px-md-12" align="start" justify="center">
        <v-col cols="12" md="5" class="px-3">
          <base-subheading :title="`关 于 我 们`" />
          <base-divider color="white" align="left" />
          <v-row no-gutters>
            <v-col>
              <base-body
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget metus varius, malesuada nulla sed, ultrices est. Proin sed nisl tortor. Sed ex mi, volutpat et lobortis sit amet, fringilla at leo."
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="px-3" >
          <base-subheading title="联 系 我 们" />
          <base-divider color="white" align="left" />
          <base-body space="2" text="西安极亿智数科技信息咨询有限公司" />
          <base-body space="2" :text="`陕西省西安市高新区财富中心`" />
        </v-col>
        <v-col cols="12" md="3" class="px-3" style="height:100%">
          <v-img
            :src="require(`~/assets/code.jpeg`)"
            max-height="150"
            max-width="150"
            eager
            class="mx-auto my-md-0 my-3"
          >
          </v-img>
        </v-col>
      </v-row>
    </v-theme-provider>
  </base-section>
</template>

<script>
export default {
  name: "SectionInfo",
  data() {
    return {
      src: require("~/assets/code.jpeg")
    };
  }
};
</script>

