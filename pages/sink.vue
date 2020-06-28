<template>
  <v-container
    id="home"
    class=" text-center mx-0 px-0 pt-0"
    style="max-width: none"
    tag="section"
  >
    <v-row justify="center">
      <base-pricing-plan
        class="mx-5 my-1"
        price="$59.99"
        frequency="month"
        title="Basic Plan"
        subtitle="Starting at"
        :features="planFeatures"
      >
        <v-btn
          color="primary"
          depressed
          large
          class="px-12 mx-auto"
          v-text="'Order Now'"
        />
      </base-pricing-plan>
      <base-pricing-plan
        class="mx-5 my-1"
        price="$99.99"
        frequency="month"
        title="Pro Plan"
        subtitle="Starting at"
        :features="planFeatures"
      >
        <v-btn
          color="primary"
          depressed
          large
          class="px-12 mx-auto"
          v-text="'Order Now'"
        />
      </base-pricing-plan>
      <base-pricing-plan
        class="mx-5 my-1"
        price="$999.99"
        frequency="month"
        title="Enterprise Plan"
        subtitle="Starting at"
        :features="planFeatures"
      >
        <v-btn
          color="primary"
          depressed
          large
          class="px-12 mx-auto"
          v-text="'Order Now'"
        />
      </base-pricing-plan>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Sink",

  data: () => ({
    skills: [
      { name: "Vue.js", value: 100 },
      { name: "Python", value: 90 },
      { name: "Javascript", value: 100 },
      { name: "Node", value: 80 },
      { name: "Swift", value: 50 }
    ],
    teamSocialLinks: [
      { link: "https://linkedin.com", icon: "mdi-linkedin" },
      { link: "https://twitter.com", icon: "mdi-twitter" },
      { link: "mailto:sample@example.com", icon: "mdi-email" }
    ],
    planFeatures: [
      "Wordpress",
      "HTML5 & CSS3",
      "PSD Files",
      "Unlimited Support"
    ]
  })
};
</script>
