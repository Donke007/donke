<template>
  <div class="home flex r-center l-center">
    <HelloWorld msg="Welcome" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style lang="less" scoped>
.home {
  font-size: 0.1rem;
  height: 100vh;
}
</style>
