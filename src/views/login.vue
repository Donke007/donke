<template>
  <div class="flex r-center l-center login-bg">
    <div class="flex r-center login-box">
      <form>
        <Input
          prefix="ios-contact"
          placeholder="Enter name"
          style="width: auto"
        />
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.login-bg {
  background: #808695;
  width: 100%;
  height: 100%;
  min-width: 6rem;
  position: absolute;
  top: 0;
  left: 0;
  .login-box {
    width: 20vw;
    min-width: 2.5rem;
    height: 60vh;
    background: #f8f8f9;
    border-radius: 10px;
  }
}
</style>
