<template>
  <div id="app">
    <router-view class="wallet" />
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  }
};
</script>

<style lang="scss">
@import "./assets/scss/button.scss";
@import "./assets/scss/variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e5e5e5;
  text-transform: uppercase;
}

.wallet {
  padding: 2rem 0 1rem 0;
  background: $white;
  width: 26rem;
  height: 56rem;
  box-shadow: $appShadow;
}
</style>
