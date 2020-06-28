<template>
  <div v-if="floatBtn">
    <v-card
      class="py-2 px-4"
      color="rgba(0,0,0,0)"
      flat
      :style="
        `position: fixed; top: ${
          $vuetify.breakpoint.smAndDown ? '70px' : '230px'
        }; right: -35px;`
      "
      width="160"
    >
      <v-btn
        icon
        href="http://wpa.qq.com/msgrd?v=3&uin=3306018052&site=云导师&menu=yes"
      >
        <v-icon large color="rgb(0,190,225)">
          mdi-qqchat
        </v-icon>
      </v-btn>
      客服一
    </v-card>
    <!-- 分割线 -->
    <v-card
      class="py-2 px-4"
      color="rgba(0,0,0,0)"
      flat
      :style="
        `position: fixed; top: ${
          $vuetify.breakpoint.smAndDown ? '110px' : '270px'
        }; right: -35px;`
      "
      width="160"
    >
      <v-btn
        icon
        href="http://wpa.qq.com/msgrd?v=3&uin=3464279904&site=云导师&menu=yes"
      >
        <v-icon large color="rgb(0,190,225)">
          mdi-qqchat
        </v-icon>
      </v-btn>
      客服二
    </v-card>
    <v-card
      class="py-2 px-4"
      color="rgba(0,0,0,0)"
      flat
      :style="
        `position: fixed; top: ${
          $vuetify.breakpoint.smAndDown ? '150px' : '310px'
        }; right: -35px;`
      "
      width="160"
    >
      <v-btn icon @click="openLeaveMsgDialog">
        <v-icon large color="rgb(0,190,225)">
          mdi-help
        </v-icon>
      </v-btn>
      课程顾问
    </v-card>
    <BtnMsg :dialog="dialogShow" @writeCancel="writeCancel"></BtnMsg>
  </div>
</template>

<script>
import BtnMsg from "~/components/base/BtnMsg";
export default {
  name: "BaseSettings",
  components: {
    BtnMsg
  },
  data() {
    return {
      menu: false,
      dialogShow: false,
      floatBtn: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 830) {
        this.floatBtn = true;
      } else {
        this.floatBtn = false;
      }
    },
    openLeaveMsgDialog() {
      this.dialogShow = true;
    },
    writeCancel(){
      this.dialogShow=false
    }
  }
};
</script>
