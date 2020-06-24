<script>
  // Extensions
  import View from '~/pages/view'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'About',

    extends: View,

    mixins: [
      LoadSections([
        'story',
        'story-alt',
        "storyThird",
        "storyForth",
        "AliPlayer",
        "WriteMenu",
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
