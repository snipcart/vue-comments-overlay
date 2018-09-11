<template>
  <div>
    <comments-overlay
        v-for="target in targets"
        :target="target"
        :key="target.id">
    </comments-overlay>
  </div>

</template>

<script>
import CommentsOverlay from "./CommentsOverlay";

export default {
  components: { CommentsOverlay },
  computed: {
    targets() {
      return this.$root.targets;
    }
  }
};
</script> 