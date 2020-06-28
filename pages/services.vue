<script>
  // Extensions
  import View from '~/pages/view'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Services',
    extends: View,
    mixins: [
      LoadSections([
        "servicesBanner",
        "our-services",
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
