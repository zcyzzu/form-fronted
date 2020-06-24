<template>
  <base-section id="our-team" space="96">
    <div class="justify-center align-center">
      <base-heading
        class="font-weight-bold"
        title="专 注 四 大 类 专 业"
        align="center"
      />
      <base-divider color="primary" align="center" />
      <base-body
        align="center"
        text="简单描述或者删除？简单描述或者删除？简单描述或者删除？简单描述或者删除？简单描述或者删除？"
      />
    </div>
    <v-row justify="center" align="center" class="px-10">
      <template v-for="(employee, i) in teamMembers">
        <v-col :key="i" cols="12" sm="6" md="3">
          <base-team-member class="pa-3" v-bind="employee" />
        </v-col>
      </template>
    </v-row>
  </base-section>
</template>

<script>
export default {
  name: "SectionOurTeam",
  data() {
    return {
      teamMembers: [
        {
          title: "简单描述或者删除",
          name: "工商管理类",
          socialLinks: [
            { icon: "MBA" },
            { icon: "EMBA" },
            { icon: "企业管理" },
            { icon: "市场营销" },
            { icon: "人力资源管理" },
            { icon: "技术与经济管理" }
          ],
          src: require("@/assets/team/rana-sawalha-IhuHLIxS_Tk-unsplash.jpg")
        },
        {
          title: "简单描述或者删除",
          name: "公共管理类",
          socialLinks: [
            { icon: "MBA" },
            { icon: "EMBA" },
            { icon: "企业管理" },
            { icon: "市场营销" },
            { icon: "人力资源管理" },
            { icon: "技术与经济管理" }
          ],
          src: require("@/assets/team/christopher-campbell-rDEOVtE7vOs-unsplash.jpg")
        },
        {
          title: "简单描述或者删除",
          name: "经济金融类",
          socialLinks: [
            { icon: "MBA" },
            { icon: "EMBA" },
            { icon: "企业管理" },
            { icon: "市场营销" },
            { icon: "人力资源管理" },
            { icon: "技术与经济管理" }
          ],
          src: require("@/assets/team/dan-ROJFuWCsfmA-unsplash.jpg")
        },
        {
          title: "简单描述或者删除",
          name: "项目管理类",
          socialLinks: [
            { icon: "MBA" },
            { icon: "EMBA" },
            { icon: "企业管理" },
            { icon: "市场营销" },
            { icon: "人力资源管理" },
            { icon: "技术与经济管理" }
          ],
          src: require("@/assets/team/brooke-cagle-wKOKidNT14w-unsplash.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
