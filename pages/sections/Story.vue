<template>
  <base-section id="story" class="white" space="96">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6" class="px-10">
        <base-heading
          class="font-weight-bold py-3"
          title="专 业 服 务"
          align="left"
        />
        <base-body
          text="我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。我们的讲师具有丰富的学术研究和教育指导经验，让专业人士给您最专业的指导。"
          align="left"
        />
        <base-btn rounded class="my-10 elevation-0 mx-1" depressed>
          <span class="font-weight-black text-none" v-text="'Learn More'" />
        </base-btn>
      </v-col>
      <v-col cols="12" md="6">
        <v-img
          :min-height="$vuetify.breakpoint.mdAndUp ? '500px' : '200px'"
          :height="$vuetify.breakpoint.mdAndUp ? '500px' : '200px'"
          :min-width="$vuetify.breakpoint.mdAndUp ? '600px' : '300px'"
          :src="
            require('@/assets/about/priscilla-du-preez-XkKCui44iM0-unsplash.jpg')
          "
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="green"
              ></v-progress-circular>
            </v-row> </template
        ></v-img>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
export default {
  name: "SectionStory",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped></style>
