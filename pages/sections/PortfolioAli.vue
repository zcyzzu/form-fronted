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
    <base-btnMsg :dialog="dialogShow" @writeCancel="writeCancel"></base-btnMsg>
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
              "https://vod.daoshi.cloud/d67ed92ce33b49bdabcb4eef0f7a72ac/c191943cb6544da5af603a7ca2f6a7fd-8f7b71606011fe75075b1dd53fcedd25-ld.m3u8",
            cover: require(`~/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg`)
          },
          {
            src:
              "https://vod.daoshi.cloud/bb781cd0199f46758ed2e12436ff28a9/d9dcaca063ce434c82ecfd922a7f6cb7-e137355e961d8afba40c2bc5e0257d30-ld.m3u8",
             cover: require(`~/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg`)
          }
        ]
      }
    };
  },
  methods: {
      sendMsg(){
           this.dialogShow = true;
      },
      writeCancel(){
        this.dialogShow=false
      }
  },
};
</script>
