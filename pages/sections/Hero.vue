<template>
  <base-section id="hero" space="0">
    <v-img
      :src="require('@/assets/background.png')"
      min-height="835px"
      class="grey lighten-2"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="green"
          ></v-progress-circular>
        </v-row>
      </template>
      <v-theme-provider dark>
        <v-container class="fill-height px-5 py-12">
          <v-responsive
            class="d-flex align-center justify-center"
            height="100%"
            width="99%"
          >
            <v-row align="center">
              <v-col cols="12" md="6">
                <base-heading
                  class="text-uppercase font-weight-bold"
                  :title="`${appData.title}`"
                />
                <base-subheading
                  title="提升写作能力，达成导师需求，顺利完成毕业"
                />
                <base-body
                  text="这里可以再写一些描述？这里可以再写一些描述？这里可以再写一些描述？这里可以再写一些描述？这里可以再写一些描述？这里可以再写一些描述？这里可以再写一些描述？"
                />
              </v-col>
              <v-col cols="12" md="6">
                <v-img
                  :src="require('@/assets/camping.svg')"
                  min-height="365px"
                  max-width="650px"
                />
              </v-col>
            </v-row>
          </v-responsive>
        </v-container>
      </v-theme-provider>
    </v-img>
  </base-section>
</template>

<script>
export default {
  name: "SectionHero"
};
</script>

<style lang="scss" scoped></style>
