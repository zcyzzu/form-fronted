<template>
  <base-section id="AliPlayer">
    <v-card
      :loading="!playerReady"
      max-width="1000"
      class="mx-auto "
      elevation="0"
      v-for="(item, i) in items"
      :key="i"
    >
      <base-heading class="font-weight-bold" :title="item.name" />
      <v-card
        elevation="0"
        style="position:relative;z-index:0"
        class="prism-player"
        :min-height="$vuetify.breakpoint.mdAndUp ? '700px' : '300px'"
        :height="$vuetify.breakpoint.mdAndUp ? '700px' : '300px'"
        :min-width="$vuetify.breakpoint.mdAndUp ? '1000px' : '300px'"
        :id="'player-' + i"
      ></v-card>
    </v-card>
  </base-section>
</template>
<script>
import { AliplayerMixin } from "~/mixins/AliplayerMixin";
export default {
  mixins: [AliplayerMixin],
  data() {
    return {
      items: [
        {
          name: "写作指导"
        }
      ],
      contents: {
        videos: [
          {
            src:
              "https://vod.daoshi.cloud/021cdf0f690b4d32a6d3617e8f13dd7c/276c238ba2ea427a922ea99fc0451157-8a068e24abc6d3b3e30c4af7dc53e341-ld.m3u8",
            cover: require(`~/assets/projects/adrian-TvN54bnuQg8-unsplash.jpg`)
          }
        ]
      }
    };
  }
};
</script>
