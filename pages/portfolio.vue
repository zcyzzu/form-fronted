<script>
  // Extensions
  import View from '~/pages/view'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Portfolio',


    extends: View,

    mixins: [
      LoadSections([
        "portfolioBanner",
        "ourPortfolio",
        "teamOneAli",
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
