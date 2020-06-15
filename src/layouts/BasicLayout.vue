<template>
  <div>
    <Header />
    <SiderMenu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu.vue";
export default {
  components: {
    SiderMenu,
    Header,
    Footer
  }
};
</script>
