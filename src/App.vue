<template>
  <div id="app">
    <router-view class="wallet" />
  </div>
</template>
<script>
export default {
  /* 
font-family: 'Source Sans Pro', ;
font-family: 'PT Mono', ;
 */
};
</script>

<style lang="scss">
$shadow: 6px 6px 26px -8px rgba(0, 0, 0, 0.52);

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
  background: white;
  width: 26rem;
  height: 56rem;
  box-shadow: $shadow;
}
</style>
