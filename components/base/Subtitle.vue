<script>
  import Heading from './Heading'

  export default {
    name: 'BaseSubtitle',

    extends: Heading,

    props: {
      size: {
        type: String,
        default: 'body-2',
      },
      mobileSize: {
        type: String,
        default: 'body-1',
      },
      color: String,
      space: {
        type: [String, Number],
        default: 0,
      },
      tag: {
        type: String,
        default: 'div',
      },
      weight: {
        type: [Number, String],
        default: 'regular',
      },
    },

    computed: {
      classes () {
        return [
          ...Heading.computed.classes.call(this),
          this.color ? this.color : this.theme.isDark ? 'white--text' : 'offblack--text',
        ]
      },
    },
  }
</script>
