<script>
  // Extensions
  import View from '~/pages/view'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Contact',

    extends: View,

    mixins: [
      LoadSections([
        "about",
        "storyAlt",
        'stats',
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
