<!--  -->
<template>
  <div id="layout" :class="[menuStatus ? 'close' : 'open']">
    <LayoutHeader />
    <LayoutMain />
    <LayoutNav />
  </div>
</template>

<script>
import LayoutNav from "./components/nav";
import LayoutHeader from "./components/header";
import LayoutMain from "./components/main";
export default {
  name: "layout",
  components: {
    LayoutNav,
    LayoutHeader,
    LayoutMain
  },
  data() {
    return {};
  },
  computed: {
    menuStatus: function() {
      return this.$store.state.app.isCollapse;
    }
  }
};
</script>
<style lang="scss" scoped></style>
