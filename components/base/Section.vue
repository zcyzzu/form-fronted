<template>
  <section
    v-bind="$attrs"
    :style="[styles, bstyles, mstyles, mbottom]"
    v-on="$listeners"
  >
    <slot />
  </section>
</template>

<script>
// Components
import Measurable from "vuetify/lib/mixins/measurable";

export default {
  name: "BaseSection",

  mixins: [Measurable],

  props: {
    space: {
      type: [Number, String],
      default: 96
    },
    bspace: {
      type: [Number, String],
      default: 0
    },
    mSpace: {
      type: [Number, String],
      default: 0
    },
    mbottoms: {
      type: [Number, String],
      default: 0
    }
  },
  computed: {
    styles() {
      const space = this.$vuetify.breakpoint.mdAndUp
        ? this.space
        : this.space / 2;

      return {
        ...this.measurableStyles,
        paddingTop: `${space}px`
      };
    },
    bstyles() {
      const bspace = this.$vuetify.breakpoint.mdAndUp
        ? this.bspace
        : this.bspace / 2;

      return {
        paddingBottom: `${bspace}px`
      };
    },
    mstyles() {
      const mSpace = this.$vuetify.breakpoint.mdAndUp
        ? this.mSpace
        : this.mSpace / 2;

      return {
        marginTop: `${mSpace}px`
      };
    },
    mbottom() {
      const mbottoms = this.$vuetify.breakpoint.mdAndUp
        ? this.mbottoms
        : this.mbottoms / 2;

      return {
        marginBottom: `${mbottoms}px`
      };
    }
  }
};
</script>
