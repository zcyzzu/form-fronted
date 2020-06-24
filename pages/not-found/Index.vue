<script>
  // Extensions
  import View from '~/pages/view'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',


    extends: View,

    mixins: [
      LoadSections([
        'not-found',
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
