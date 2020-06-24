<script>
// Extensions
import View from "~/pages/view";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  name: "Blog",

  extends: View,

  mixins: [LoadSections(["BlogBanner", "teamOne", "teamOneAli", "info"])],

  props: {
    id: {
      type: String,
      default: "home"
    }
  }
};
</script>
