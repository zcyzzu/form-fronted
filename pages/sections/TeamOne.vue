<template>
  <base-section id="our-team" space="96">
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="项 目 管 理"
        align="center"
      />
      <base-divider color="primary" align="center" />
      <base-body align="center" text="我们为不同方向论文提供最佳的课程组合" />
      <!-- 分割线 -->
      <v-row no-gutters>
        <v-col
          cols="12"
          md="6"
          class="text-center"
          v-for="(employee,i) in teamMembers"
          :key="i"
        >
          <v-card
            elevation="0"
            style="border:1px solid rgb(153,153,153)"
            class="pa-2 ma-3"
          >
            <v-img :src="employee.src"></v-img>
            <v-card-text class="pt-3" style="position: relative">
              <div
                class="font-weight-bold mb-2 text-center"
                v-text="employee.name"
              />
              <div
                class="mb-2 text-center"
                v-for="(infos,index) in employee.title"
                :key="index"
                v-text="infos.info"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <!-- 分割线 -->
    </div>
  </base-section>
</template>

<script>
export default {
  name: "SectionOurTeam",
  data() {
    return {
      teamMembers: [
        {
          name: "进 度 管 理",
          title: [
            { info: "火电厂超低排放改造EPC项目进度管理研究" },
            { info: "基于挣值法的项目成本进度管理研究" },
            { info: "基于改进灰色关键链的项目进度管理研究" },
            { info: "..." }
          ],
          src: require("@/assets/team/rana-sawalha-IhuHLIxS_Tk-unsplash.jpg")
        },
        {
          name: "成 本 管 理",
          title: [
            { info: "精益视角下的企业成本管理研究" },
            { info: "A公司快速路维护项目成本管理研究" },
            { info: "标准成本法与作业成本法结合的A公司成本管理应用研究" },
            { info: "..." }
          ],
          src: require("@/assets/team/christopher-campbell-rDEOVtE7vOs-unsplash.jpg")
        },
        {
          name: "质 量 管 理",
          title: [
            { info: "A汽车零部件公司供应链质量管理优化研究" },
            { info: "B工程建设项目全面质量管理的优化研究" },
            { info: "C公司医疗产品开发项目质量管理研究" },
            { info: "..." }
          ],
          src: require("@/assets/team/dan-ROJFuWCsfmA-unsplash.jpg")
        },
        {
          name: "风 险 管 理",
          title: [
            { info: "电网工程项目风险管理研究" },
            { info: "基于项目产出的DB项目设计风险管理优化研究" },
            { info: "A公司地铁项目BOT模式运营风险管理研究" },
            { info: "..." }
          ],
          src: require("@/assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg")
        },
        {
          name: "采 购 管 理",
          title: [
            { info: "A公司新产品开发项目采购管理问题及改进对策研究" },
            { info: "火电建设项目物资采购管理JIT模式的应用" },
            { info: "我国铁路工程项目物资采购管理研究" },
            { info: "..." }
          ],
          src: require("@/assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
