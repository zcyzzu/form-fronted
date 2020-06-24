<template>
  <v-app-bar
    app
    elevate-on-scroll
    style="right: 0"
    :color="color || 'white'"
    :height="$vuetify.breakpoint.mdAndUp ? '100px' : '60px'"
  >
  <div class="pa-6">
    <v-img
      class="hidden-sm-and-down "
      min-width="250"
      max-width="250"
      max-height="80"
      :src="require('~/assets/form/logo.jpeg')"
    />
  </div>
    <!-- <v-toolbar-title class="headline">
      <router-link
        :to="{ name: 'index' }"
        tag="h4"
        style="cursor: pointer"
      >云 导 师</router-link>
    </v-toolbar-title> -->
    <v-spacer />
    <div v-if="$vuetify.breakpoint.mdAndUp">
      <v-tabs
        hide-slider
        optional
        background-color="transparent"
        v-bind="tabAttrs"
      >
        <v-tab
          v-for="item in items"
          :key="item.name"
          :to="{ name: item.name }"
          :exact="item.name === 'index'"
          :ripple="false"
          active-class="primary--text"
          class="font-weight-medium subtitle-1"
          min-width="60px"
          text
        >
          <!-- <span v-if="item.name === 'index'">Home</span>
          <span v-else v-text="item.name" /> -->
          <span>{{item.default}}</span>
          <v-icon
            v-if="item.icon && $vuetify.breakpoint.mdAndUp"
            medium
            right
            v-text="item.icon"
          />
        </v-tab>
      </v-tabs>
    </div>
    <div v-else>
      <v-btn icon @click="drawer = true">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <blog-sidebar
        v-if="$route.name === 'Blog'"
        :value="drawer"
        @input="drawer = $event"
      />
      <base-sidebar
        v-else
        :items="items"
        :value="drawer"
        @input="drawer = $event"
      />
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "BaseAppBar",
  components: {
    BlogSidebar: () => import("./BlogSidebar"),
    BaseSidebar: () => import("./BaseSidebar")
  },
  props: {
    block: Boolean,
    search: Boolean,
    color: String
  },
  data() {
    return {
      drawer: false,
      items: [
        { name: "index", default: "首页", icon: "mdi-home" },
        { name: "about", default: "辅导内容介绍", icon: "mdi-account-group" },
        { name: "services", default: "项目管理", icon: "mdi-book-open-variant" },
        { name: "portfolio", default: "工商管理", icon: "mdi-book" },
        { name: "blog", default: "公共管理", icon: "mdi-web" },
        { name: "contact", default: "经济金融", icon: "mdi-phone" },
        { name: "aboutUs", default: "关于我们", icon: "mdi-phone" }
      ]
    };
  },
  computed: {
    tabAttrs() {
      const attrs = {};
      if (this.block) attrs.height = "100px";
      return attrs;
    }
  },
  watch: {
    "$route.name"(val) {
      this.drawer = false;
    }
  }
};
</script>
