<template>
  <base-section
    id="callout"
    class="primary"
  >
    <div class="justify-center align-center text-center">
      <base-heading
        class="font-weight-bold"
        title="30+ reuseable components!"
        align="center"
        space="0"
      />
      <base-btn
        rounded
        class="mt-10 mb-2 elevation-0"
        color="white primary--text"
        depressed
        href="https://store.vuetifyjs.com/products/flairo-theme-pro"
        target="_blank"
      >
        <span
          class="font-weight-black text-none"
          v-text="`Purchase ${appData.title}`"
        />
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionCallout',
  }
</script>

<style lang="scss" scoped>

</style>
