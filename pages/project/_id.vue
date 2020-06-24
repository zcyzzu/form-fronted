<script>
  // Extensions
  import View from '~/pages/view'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'project',


    extends: View,

    mixins: [
      LoadSections([
        'project-detail',
        'project-gallery-alt',
        'info',
      ]),
    ],

    props: {
      id: [Number, String],
    },
  }
</script>
