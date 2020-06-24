<template>
  <div>
    <v-dialog v-model="dialog" :max-width="dialogWidth">
      <v-card class="px-5 pb-2">
        <v-card-title class="justify-center" primary-title>
          <span>咨询课程顾问</span>
        </v-card-title>
        <!-- 以下是form表单 -->
        <!-- 以下是form表单 -->
        <v-form lazy-validation ref="form">
          <v-col>
            <v-row>
              <v-text-field
                label="如何称呼您？"
                :rules="[rules.required]"
                :value="nickname"
                @change="setNickname"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field
                label="您的手机号?"
                counter="11"
                :rules="[rules.mobile]"
                :value="mobile"
                @input="setMobile"
              ></v-text-field>
            </v-row>
            <v-row>
              <v-text-field label="微信号?" :rules="[rules.wechat]" :value="wechat" @input="setWechat"></v-text-field>
            </v-row>
            <v-row>
              <v-select
                label="您的专业*"
                :items="majors"
                item-value="abbr"
                item-text="name"
                :value="nickname"
                @change="setMajor"
                attach
                persistent-hint
                required
              ></v-select>
            </v-row>
            <v-row>
              <v-textarea label="咨询的问题" rows="3" :value="msg" @input="setMsg"></v-textarea>
            </v-row>
          </v-col>
        </v-form>
        <!-- 以上是form表单 -->
        <!-- 以上是form表单 -->
        <v-card-actions class="d-flex justify-center">
          <v-btn color="primary" @click="submit">确定</v-btn>
          <v-btn color="primary" @click="dialog = false">取消</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- 以下是提交失败提示弹框 -->
    <!-- 以下是提交失败提示弹框 -->
    <v-container>
      <v-row justify="center">
        <v-dialog v-model="tips" persistent max-width="290">
          <v-card>
            <v-card-title
              class="headline"
              style="padding:8px 5px;text-align:center;display:block"
            >警告</v-card-title>
            <v-card-text>信息保存失败，请重新填写!</v-card-text>
            <v-divider></v-divider>

            <!-- //TODO 考虑去掉按钮选项？同时弹窗增加红色底色 -->

            <v-card-actions style="padding:0">
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="tips = false">取 消</v-btn>
              <v-btn color="green darken-1" text @click="tips = false">确 定</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props:{
    dialog:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      tips: false,
      majors: [
        { name: "企业管理", abbr: "MBA" },
        { name: "公共管理", abbr: "MPA" },
        { name: "经济金融", abbr: "FIN" },
        { name: "项目管理", abbr: "PMP" }
      ],
      rules: {
        mobile: v => {
          if (/^1[3456789]\d{9}$/.test(v) || !!this.wechat) {
            return true;
          } else {
            return "请检查电话号码是否正确";
          }
        },
        required: v => !!v || "此项必填",
        wechat: v => {
          if (!!this.mobile || !!v) {
            return true;
          } else {
            return "请填写手机号或微信号";
          }
        }
      }
    };
  },
  computed: {
    dialogWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
        case "sm":
          return "80%";
        case "md":
        case "lg":
        case "xl":
          return "40%";
      }
    },
    //vuex传入的状态值，也可以使用组件内部data
    ...mapState("leaveMsg", {
      nickname: "nickname",
      mobile: "mobile",
      wechat: "wechat",
      major: "major",
      msg: "msg"
    }),
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.dialog = false;
        this.$axios
          .$post("/api/leavemessage", {
            nickname: this.$store.state.leaveMsg.nickname,
            mobile: this.$store.state.leaveMsg.mobile,
            wechat: this.$store.state.leaveMsg.wechat,
            major: this.$store.state.leaveMsg.major,
            message: this.$store.state.leaveMsg.msg
          })
          .then(success => {
            console.log('ok')
          })
          .catch(error => {
            this.tips = true;
          });
      }
    },
    ...mapMutations("leaveMsg", {
      setNickname: "setNickname",
      setMobile: "setMobile",
      setWechat: "setWechat",
      setMajor: "setMajor",
      setMsg: "setMsg"
    })
  }
};
</script>