<script>
  import Heading from './Heading'

  export default {
    name: 'BaseTitle',

    extends: Heading,

    props: {
      size: {
        type: String,
        default: 'title',
      },
      mobileSize: {
        type: String,
        default: 'subtitle-1',
      },
      tag: {
        type: String,
        default: 'h3',
      },
      weight: {
        type: String,
        default: 'bold',
      },
    },
  }
</script>
