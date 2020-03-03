<template>
  <div class="header">
    <h1>{{headline}}</h1>
    <span>{{span}}</span>
  </div>
</template>

<script>
export default {
  props: {
    headline: String,
    span: String
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.header {
  font-family: "Source Sans Pro";
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  h1 {
    font-size: 2.2rem;
    font-weight: bold;
    color: $h1;
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;

    color: $span;
  }
}
</style>