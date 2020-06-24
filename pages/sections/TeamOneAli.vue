<template>
  <base-section id="AliPlayer" space="48" bspace="48">
    <base-heading class="font-weight-bold" title="通用课程试听" align="center" />
    <base-divider color="primary" align="center" />
    <base-body align="center" text="这是相关描述或删除" />
    <v-row no-gutters>
      <v-col cols="12" md="6" v-for="(item, i) in items" :key="i" >
        <v-card :loading="!playerReady" max-width="600" elevation="0" class="mx-auto" outlined>
          <base-heading class="font-weight-bold text-h5  pa-2" space="0" :title="item.name" />
          <v-card
            elevation="0"
            style="position:relative;z-index:0"
            class="prism-player"
            :min-height="$vuetify.breakpoint.mdAndUp ? '400px' : '200px'"
            :height="$vuetify.breakpoint.mdAndUp ? '400px' : '200px'"
            :min-width="$vuetify.breakpoint.mdAndUp ? '400px' : '200px'"
            :id="'player-' + i"
          ></v-card>
        </v-card>
      </v-col>
    </v-row>
     <div class="d-flex justify-center">
      <base-btn
        rounded
        class="my-12 elevation-0 mx-1"
        depressed
        min-width="250"
        min-height="50"
        @click="sendMsg"
      >
        <span class="font-weight-black text-none" v-text="'咨询辅导顾问'" />
      </base-btn>
    </div>
    <base-btnMsg :dialog="dialogShow"></base-btnMsg>
  </base-section>
</template>
<script>
import { AliplayerMixin } from "~/mixins/AliplayerMixin";
export default {
  mixins: [AliplayerMixin],
  data() {
    return {
      dialogShow: false,
      items: [
        {
          name: "水平测试"
        },
        {
          name: "写作指导"
        }
      ],
      contents: {
        videos: [
          {
            src:
              "https://vod.daoshi.cloud/766c81f2f1ac48b3bde0b34b453c92d1/d0d1559c2e9c4b2093001841502b2422-9ce74f7d127f4a81f2b11d200e7de0ab-ld.m3u8",
            cover: require(`~/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg`)
          },
          {
            src:
              "https://vod.daoshi.cloud/389affc4e0294a768c988ecd69491c37/1b3cc140acd64a228aa55c0b393984e8-43470e71d440b1d610f2906ac4c2160c-ld.m3u8",
            cover: require(`~/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg`)
          }
        ]
      }
    };
  },
  methods: {
      sendMsg(){
           this.dialogShow = true;
      }
  },
};
</script>
