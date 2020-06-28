<script>
// Extensions
import View from "~/pages/view";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Home",

  extends: View,

  mixins: [
    LoadSections([
      "hero",
      "welcome-features",
      "our-team",
      "welcome-featuresBottom",
      "why-choose-us",
      "info"
    ])
  ],

  props: {
    id: {
      type: String,
      default: "home"
    }
  },
  
};
</script>
