<template>
  <div class="home flex r-center l-center">
    <!-- <HelloWorld msg="Welcome" /> -->
    <div class="bottom-box flex r-center l-center">
      <i-input v-model="value" placeholder="" class="input-row" />
      <i-button type="info">按钮</i-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {}
};
</script>
<style lang="less" scoped>
.home {
  font-size: 0.1rem;
  height: 100vh;
  box-sizing: border-box;
  // padding: 0 2rem;
}
.bottom-box {
  // width: 20vw;
}
</style>
